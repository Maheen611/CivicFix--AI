"""
CivicFix AI backend.

A small Flask service that hosts the parts of the app that don't belong in
the browser:

  * an image-classification "agent"       -> POST /api/classify
  * a RAG retrieval pipeline               -> GET  /api/rag/retrieve
  * an authority lookup, RAG-augmented     -> GET  /api/authority
  * an AI complaint drafter, RAG-augmented -> POST /api/generate-complaint
  * a tiny complaints store (JSON file)    -> /api/complaints

This is written to be read, not just run: it favours clarity over
cleverness, and every "this is a placeholder" spot says so in a comment.

Swap `classify_image()` for a real trained vision model, and set the
ANTHROPIC_API_KEY environment variable to let `generate_complaint_text()`
call a real LLM instead of the built-in template.
"""
import datetime
import json
import os
import random
import re
import uuid
from collections import Counter

from flask import Flask, jsonify, request
from flask_cors import CORS
from PIL import Image

app = Flask(__name__)
CORS(app)

DATA_DIR = os.path.join(os.path.dirname(__file__), "data")
COMPLAINTS_FILE = os.path.join(DATA_DIR, "complaints.json")
os.makedirs(DATA_DIR, exist_ok=True)
if not os.path.exists(COMPLAINTS_FILE):
    with open(COMPLAINTS_FILE, "w") as f:
        json.dump([], f)


# =========================================================================
# Static reference data
# =========================================================================

CATEGORIES = [
    {"id": "pothole", "label": "Pothole"},
    {"id": "garbage", "label": "Garbage / waste overflow"},
    {"id": "road_damage", "label": "Damaged road"},
    {"id": "drainage", "label": "Drainage / waterlogging"},
    {"id": "streetlight", "label": "Streetlight failure"},
    {"id": "other", "label": "Other civic issue"},
]
CATEGORY_LABEL = {c["id"]: c["label"] for c in CATEGORIES}

DESCRIPTIONS = {
    "pothole": "A pothole is visible in the road surface, posing a hazard to vehicles and two-wheelers.",
    "garbage": "Uncollected garbage is visible, with waste accumulating in a public area.",
    "road_damage": "The road surface appears damaged or broken, affecting safe passage.",
    "drainage": "Water appears to be pooling or a drain looks blocked, which can worsen with rain.",
    "streetlight": "A streetlight in the area appears to be non-functional.",
    "other": "A civic infrastructure issue is visible that may need attention from the local authority.",
}

CITIES = {
    "hyderabad": "Greater Hyderabad Municipal Corporation (GHMC)",
    "bengaluru": "Brihat Bengaluru Mahanagara Palike (BBMP)",
    "mumbai": "Municipal Corporation of Greater Mumbai (MCGM)",
    "delhi": "Municipal Corporation of Delhi (MCD)",
    "chennai": "Greater Chennai Corporation (GCC)",
    "pune": "Pune Municipal Corporation (PMC)",
}

NATIONAL_FALLBACK = {
    "name": "CPGRAMS \u2014 Government of India public grievance portal",
    "url": "https://pgportal.gov.in",
    "note": "CPGRAMS does not accept grievances by email; they must be lodged on the portal or app.",
}


# =========================================================================
# RAG: a small, curated, fully-offline knowledge base + TF-IDF retrieval
#
# Real vector-embedding retrieval (e.g. sentence-transformers + FAISS, or a
# hosted embeddings API) is the production path — see the README. For a
# hackathon backend with a handful of documents, plain term-frequency
# cosine similarity is transparent, has zero extra dependencies, runs in
# microseconds, and is easy for a judge to read end-to-end in this file.
# =========================================================================

KNOWLEDGE_BASE = [
    {
        "id": "ghmc-grievance",
        "title": "GHMC Citizen Grievance Redressal (verified)",
        "city": "hyderabad",
        "category": "all",
        "verified": True,
        "text": (
            "Greater Hyderabad Municipal Corporation (GHMC) runs a Centralised Grievance "
            "Redressal System (CGRS). Citizens can file complaints through the MyCURE app "
            "(GHMC's current citizen services app), on ghmc.gov.in under Our Services > "
            "Grievance > Citizen with OTP verification, or by calling the toll-free numbers "
            "155304 and 040-2111-1111. Complaints about potholes, garbage, drainage, "
            "streetlights and road damage are all routed through this same system."
        ),
        "source_name": "UNI India \u2014 \u201cGHMC launches 'MyCURE' app\u201d",
        "source_url": "https://www.uniindia.com/ghmc-launches-mycure-app-to-integrate-civic-services-boost-grievance-redressal/south/news/3746006.html",
    },
    {
        "id": "cpgrams-national",
        "title": "CPGRAMS \u2014 national grievance portal (verified)",
        "city": "all",
        "category": "all",
        "verified": True,
        "text": (
            "The Centralised Public Grievance Redress and Monitoring System (CPGRAMS), at "
            "pgportal.gov.in, is the Government of India's portal for escalating a civic "
            "grievance when the local municipal corporation does not resolve it. It is "
            "portal/app based only \u2014 grievances sent by email are explicitly not "
            "accepted or acted upon. It works for any city or state, not just Hyderabad."
        ),
        "source_name": "Department of Administrative Reforms & Public Grievances (DARPG)",
        "source_url": "https://pgportal.gov.in",
    },
    {
        "id": "mock-directory-note",
        "title": "Contact directory status for other cities (mock, not verified)",
        "city": "other",
        "category": "all",
        "verified": False,
        "text": (
            "This prototype does not ship a verified contact directory for BBMP (Bengaluru), "
            "MCGM (Mumbai), MCD (Delhi), GCC (Chennai) or PMC (Pune). Rather than invent an "
            "email address or phone number, residents in those cities should look up the "
            "official corporation website directly, or escalate through CPGRAMS."
        ),
        "source_name": "CivicFix AI \u2014 responsible-AI note",
        "source_url": None,
    },
    {
        "id": "tip-pothole",
        "title": "What helps when reporting a pothole",
        "city": "all",
        "category": "pothole",
        "verified": False,
        "text": (
            "A useful pothole report includes an object for scale (a coin, a foot, a "
            "vehicle wheel) in the photo, the nearest cross-street or landmark, roughly how "
            "long the pothole has been there, and whether it has caused a fall or accident. "
            "Depth and diameter matter more to road engineers than a general description."
        ),
        "source_name": "General civic-reporting best practice",
        "source_url": None,
    },
    {
        "id": "tip-garbage",
        "title": "What helps when reporting garbage / waste overflow",
        "city": "all",
        "category": "garbage",
        "verified": False,
        "text": (
            "For waste and garbage complaints, mention whether this is a missed collection "
            "day, an overflowing community bin, or illegally dumped construction debris \u2014 "
            "each is usually handled by a different team. Recurrence (e.g. 'overflows every "
            "Friday') is worth stating explicitly, since one-off and recurring issues are "
            "often triaged differently."
        ),
        "source_name": "General civic-reporting best practice",
        "source_url": None,
    },
    {
        "id": "tip-drainage",
        "title": "What helps when reporting drainage / waterlogging",
        "city": "all",
        "category": "drainage",
        "verified": False,
        "text": (
            "Drainage complaints are more actionable when they note whether the waterlogging "
            "happens only during rain or persists in dry weather (the latter usually means a "
            "blocked or broken pipe rather than just poor stormwater capacity), and whether "
            "it blocks a road, an entrance, or a footpath."
        ),
        "source_name": "General civic-reporting best practice",
        "source_url": None,
    },
    {
        "id": "tip-streetlight",
        "title": "What helps when reporting a streetlight failure",
        "city": "all",
        "category": "streetlight",
        "verified": False,
        "text": (
            "Streetlight complaints are resolved faster when the pole's ID number (usually "
            "stamped or stickered on the pole) is included, along with whether the light "
            "flickers, stays off, or stays on during the day \u2014 each points to a different "
            "electrical fault."
        ),
        "source_name": "General civic-reporting best practice",
        "source_url": None,
    },
    {
        "id": "tip-road-damage",
        "title": "What helps when reporting general road damage",
        "city": "all",
        "category": "road_damage",
        "verified": False,
        "text": (
            "For broken pavement, missing slabs or damaged medians, note whether pedestrians, "
            "two-wheelers or heavier vehicles are most affected, and whether the damage "
            "followed recent utility digging \u2014 that often changes which department is "
            "responsible for the repair."
        ),
        "source_name": "General civic-reporting best practice",
        "source_url": None,
    },
]


def _tokenize(text):
    return re.findall(r"[a-z0-9]+", text.lower())


for _doc in KNOWLEDGE_BASE:
    _doc["_tf"] = Counter(_tokenize(_doc["title"] + " " + _doc["text"]))


def _cosine(tf_a, tf_b):
    common = set(tf_a) & set(tf_b)
    dot = sum(tf_a[t] * tf_b[t] for t in common)
    norm_a = sum(v * v for v in tf_a.values()) ** 0.5
    norm_b = sum(v * v for v in tf_b.values()) ** 0.5
    if norm_a == 0 or norm_b == 0:
        return 0.0
    return dot / (norm_a * norm_b)


def retrieve(query, city=None, category=None, top_k=3):
    """TF-IDF-style cosine retrieval over KNOWLEDGE_BASE, with a small relevance
    boost for documents tagged to the requested city/category. Returns the
    top_k documents with score > 0, each annotated with its similarity score."""
    query_tf = Counter(_tokenize(query))
    scored = []
    for doc in KNOWLEDGE_BASE:
        score = _cosine(query_tf, doc["_tf"])
        if city and doc["city"] in (city, "all"):
            score += 0.20 if doc["city"] == city else 0.05
        if category and doc["category"] in (category, "all"):
            score += 0.20 if doc["category"] == category else 0.05
        if score > 0:
            scored.append((score, doc))
    scored.sort(key=lambda pair: pair[0], reverse=True)
    out = []
    for score, doc in scored[:top_k]:
        clean = {k: v for k, v in doc.items() if k != "_tf"}
        clean["score"] = round(score, 3)
        out.append(clean)
    return out


# =========================================================================
# The classification "agent" (placeholder — see docstring)
# =========================================================================

def classify_image(image: Image.Image):
    """
    Placeholder classification agent.

    A real deployment would replace this with a trained image-classification
    model (a fine-tuned CNN/ViT served here, or a call to a hosted vision
    API). To keep this demo self-contained and dependency-light, this uses a
    simple brightness/colour heuristic on the actual uploaded image plus
    weighted randomness — and it says so, out loud, in the response and in
    the UI. Nothing here should be presented as a trained model's output.
    """
    img = image.convert("RGB").resize((64, 64))
    pixels = list(img.getdata())
    n = len(pixels)
    avg_r = sum(p[0] for p in pixels) / n
    avg_g = sum(p[1] for p in pixels) / n
    avg_b = sum(p[2] for p in pixels) / n
    brightness = (avg_r + avg_g + avg_b) / 3

    if brightness < 90:
        weights = {"pothole": 0.32, "road_damage": 0.28, "drainage": 0.14,
                   "garbage": 0.14, "streetlight": 0.08, "other": 0.04}
    elif avg_g > avg_r and avg_g > avg_b:
        weights = {"garbage": 0.30, "drainage": 0.22, "other": 0.16,
                   "pothole": 0.14, "road_damage": 0.12, "streetlight": 0.06}
    else:
        weights = {"streetlight": 0.26, "road_damage": 0.22, "pothole": 0.20,
                   "drainage": 0.14, "garbage": 0.12, "other": 0.06}

    ids = list(weights.keys())
    ws = list(weights.values())
    category = random.choices(ids, weights=ws, k=1)[0]
    confidence = round(random.uniform(74, 94), 1)

    alternates = [c for c in ids if c != category]
    random.shuffle(alternates)
    alt_out = [
        {"id": a, "label": CATEGORY_LABEL[a], "confidence": round(max(confidence - random.uniform(10, 30), 30), 1)}
        for a in alternates[:2]
    ]

    return {
        "category": category,
        "label": CATEGORY_LABEL[category],
        "confidence": confidence,
        "alternates": alt_out,
        "description": DESCRIPTIONS[category],
        "note": "Demo heuristic classifier \u2014 not a trained production vision model.",
    }


# =========================================================================
# The complaint-drafting agent, RAG-augmented
# =========================================================================

def _call_anthropic(prompt):
    """Call Claude (Anthropic) with the given prompt. Returns the generated text."""
    import anthropic
    client = anthropic.Anthropic(api_key=os.environ["ANTHROPIC_API_KEY"])
    msg = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=500,
        messages=[{"role": "user", "content": prompt}],
    )
    return "".join(getattr(b, "text", "") for b in msg.content if getattr(b, "type", "") == "text").strip()


def _call_watsonx(prompt):
    """Call IBM watsonx.ai (a Granite foundation model by default) with the given
    prompt. Returns the generated text.

    Needs the `ibm-watsonx-ai` package (in requirements.txt) plus WATSONX_API_KEY
    and WATSONX_PROJECT_ID in the environment. WATSONX_URL and WATSONX_MODEL_ID
    are optional overrides (see README for how to find these in your IBM Cloud
    account)."""
    from ibm_watsonx_ai import Credentials
    from ibm_watsonx_ai.foundation_models import ModelInference

    credentials = Credentials(
        url=os.environ.get("WATSONX_URL", "https://us-south.ml.cloud.ibm.com"),
        api_key=os.environ["WATSONX_API_KEY"],
    )
    model = ModelInference(
        model_id=os.environ.get("WATSONX_MODEL_ID", "ibm/granite-13b-chat-v2"),
        credentials=credentials,
        project_id=os.environ["WATSONX_PROJECT_ID"],
        params={"max_new_tokens": 400, "temperature": 0.4, "decoding_method": "greedy"},
    )
    result = model.generate_text(prompt=prompt)
    # generate_text() normally returns the generated string directly, but some
    # SDK versions / call shapes return a result dict instead — handle both.
    if isinstance(result, str):
        return result.strip()
    if isinstance(result, dict):
        try:
            return result["results"][0]["generated_text"].strip()
        except (KeyError, IndexError, TypeError):
            pass
    return str(result).strip()


# Providers are tried in this order when AI_PROVIDER isn't set explicitly —
# whichever one has its required env var present, first, wins.
AI_PROVIDERS = {
    "anthropic": {"env": "ANTHROPIC_API_KEY", "call": _call_anthropic, "label": "Claude (Anthropic)"},
    "watsonx": {"env": "WATSONX_API_KEY", "call": _call_watsonx, "label": "IBM watsonx.ai (Granite)"},
}


def _pick_provider():
    """Decide which AI provider (if any) to use:
    1. AI_PROVIDER env var, if it names a known provider whose key is configured.
    2. Otherwise, the first provider in AI_PROVIDERS whose key is configured.
    3. Otherwise None — the caller falls back to the deterministic template."""
    forced = os.environ.get("AI_PROVIDER", "").strip().lower()
    if forced in AI_PROVIDERS and os.environ.get(AI_PROVIDERS[forced]["env"]):
        return forced
    for name, cfg in AI_PROVIDERS.items():
        if os.environ.get(cfg["env"]):
            return name
    return None


def generate_complaint_text(payload):
    """
    Drafts a complaint letter, grounded in whatever the RAG step retrieved.

    Tries a real AI provider first — Claude (Anthropic) or IBM watsonx.ai
    (Granite), see `_pick_provider()` — with the retrieved context and the
    reporter's own prompt. Falls back to a deterministic template (still
    informed by retrieval) if no provider is configured or the call fails,
    so the endpoint always works with zero configuration.
    """
    category_id = payload.get("category", "other")
    label = CATEGORY_LABEL.get(category_id, "Civic issue")
    area = payload.get("area", "[area]")
    city_id = payload.get("city", "hyderabad")
    city_label = city_id.capitalize()
    pincode = payload.get("pincode", "")
    authority = payload.get("authority") or CITIES.get(city_id, "the municipal corporation")
    description = payload.get("description", "")
    custom_prompt = payload.get("custom_prompt", "")
    reporter_name = payload.get("name") or "[Your name]"
    reporter_contact = payload.get("contact") or "[Your phone or email]"
    today = datetime.date.today().strftime("%d %b %Y")

    rag_query = " ".join(filter(None, [label, city_label, description, custom_prompt]))
    sources = retrieve(rag_query, city=city_id, category=category_id, top_k=3)

    provider = _pick_provider()
    if provider:
        try:
            context_block = "\n".join(f"- {s['title']}: {s['text']}" for s in sources) or "(no additional context retrieved)"
            prompt = (
                "You are helping an Indian citizen draft a short, formal, polite civic "
                "complaint letter to a municipal authority.\n\n"
                f"Authority: {authority}\nIssue category: {label}\n"
                f"Location: {area}, {city_label}" + (f" - PIN {pincode}" if pincode else "") + "\n"
                f"Date: {today}\nReporter's description: {description}\n"
                + (f"Additional instructions from the reporter: {custom_prompt}\n" if custom_prompt else "")
                + f"\nRetrieved reference context (use only if relevant, do not copy verbatim):\n{context_block}\n"
                + "\nWrite only the complaint letter itself (starting with \"To,\" and ending with "
                "a placeholder for the reporter's name), under 220 words. Ask for inspection and a "
                "complaint reference number. Do not invent any contact details, complaint IDs, or "
                "claim the issue has already been resolved."
            )
            text = AI_PROVIDERS[provider]["call"](prompt)
            if text:
                return {"text": text, "source": "ai", "provider": provider,
                        "provider_label": AI_PROVIDERS[provider]["label"], "sources_used": sources}
        except Exception as exc:  # noqa: BLE001 - any failure falls through to the template
            print(f"[generate_complaint_text] {provider} generation failed, using template instead: {exc}")

    text = (
        f"To,\nThe Grievance Officer,\n{authority}\n\n"
        f"Subject: Complaint regarding {label.lower()} at {area}, {city_label}\n\n"
        f"Date: {today}\n\n"
        "Dear Sir/Madam,\n\n"
        "I would like to report the following civic issue for your attention and necessary action.\n\n"
        f"Category: {label}\nLocation: {area}, {city_label}" + (f" \u2014 PIN {pincode}" if pincode else "") + "\n\n"
        f"Description:\n{description}\n\n"
        "A photograph of the issue is attached for reference. I would be grateful if this could be "
        "inspected and resolved at the earliest, and if I could be provided a complaint reference "
        "number for tracking.\n\n"
        "Thank you for your attention to this matter.\n\n"
        f"Regards,\n{reporter_name}\n{reporter_contact}"
    )
    return {"text": text, "source": "template", "provider": None, "provider_label": None, "sources_used": sources}


# =========================================================================
# Routes
# =========================================================================

@app.route("/api/health", methods=["GET"])
def health():
    return jsonify({"ok": True})


@app.route("/api/ai-status", methods=["GET"])
def ai_status():
    """Lets the frontend show which AI provider (if any) is actually configured,
    rather than guessing from a generation response alone."""
    active = _pick_provider()
    return jsonify({
        "active_provider": active,
        "active_provider_label": AI_PROVIDERS[active]["label"] if active else None,
        "available": [
            {"id": name, "label": cfg["label"], "configured": bool(os.environ.get(cfg["env"]))}
            for name, cfg in AI_PROVIDERS.items()
        ],
    })


@app.route("/api/categories", methods=["GET"])
def get_categories():
    return jsonify(CATEGORIES)


@app.route("/api/classify", methods=["POST"])
def classify():
    if "image" not in request.files:
        return jsonify({"error": "No image file uploaded (expected multipart field 'image')."}), 400
    try:
        image = Image.open(request.files["image"].stream)
    except Exception:
        return jsonify({"error": "Could not read that image."}), 400
    return jsonify(classify_image(image))


@app.route("/api/rag/retrieve", methods=["GET"])
def rag_retrieve():
    """Standalone retrieval endpoint — useful for inspecting what the RAG
    step would surface for a given query, independent of complaint drafting."""
    query = request.args.get("query", "")
    city = request.args.get("city")
    category = request.args.get("category")
    combined = " ".join(filter(None, [query, city, category]))
    results = retrieve(combined, city=city, category=category, top_k=5)
    return jsonify({"query": combined, "results": results})


@app.route("/api/authority", methods=["GET"])
def authority():
    city_id = (request.args.get("city") or "hyderabad").lower()
    category_id = request.args.get("category")
    corp = CITIES.get(city_id, "Unknown municipal corporation")
    sources = retrieve(f"{corp} grievance complaint {category_id or ''}", city=city_id, category=category_id, top_k=4)
    # Only count this city's OWN verified source — a nationally-applicable doc
    # like CPGRAMS (city == "all") must not make an unverified city look verified.
    city_specific_verified = [s for s in sources if s["verified"] and s["city"] == city_id]
    return jsonify({
        "city": city_id,
        "corporation": corp,
        "verified": bool(city_specific_verified),
        "sources": sources,
        "national_fallback": NATIONAL_FALLBACK,
    })


@app.route("/api/generate-complaint", methods=["POST"])
def generate_complaint():
    payload = request.get_json(force=True, silent=True) or {}
    return jsonify(generate_complaint_text(payload))


def _read_complaints():
    with open(COMPLAINTS_FILE) as f:
        return json.load(f)


def _write_complaints(items):
    with open(COMPLAINTS_FILE, "w") as f:
        json.dump(items, f, indent=2)


@app.route("/api/complaints", methods=["GET"])
def list_complaints():
    return jsonify(_read_complaints())


@app.route("/api/complaints", methods=["POST"])
def create_complaint():
    payload = request.get_json(force=True, silent=True) or {}
    items = _read_complaints()
    record = {
        "id": "CVX-" + uuid.uuid4().hex[:8].upper(),
        "category": payload.get("category", "other"),
        "city": payload.get("city", "hyderabad"),
        "area": payload.get("area", ""),
        "pincode": payload.get("pincode", ""),
        "authority": payload.get("authority", ""),
        "letter": payload.get("letter", ""),
        "status": "Draft",
        "reference_no": "",
        "created_at": datetime.datetime.utcnow().isoformat() + "Z",
    }
    items.append(record)
    _write_complaints(items)
    return jsonify(record), 201


@app.route("/api/complaints/<complaint_id>", methods=["PATCH"])
def update_complaint(complaint_id):
    payload = request.get_json(force=True, silent=True) or {}
    items = _read_complaints()
    for item in items:
        if item["id"] == complaint_id:
            item.update({k: v for k, v in payload.items() if k in ("status", "reference_no")})
            _write_complaints(items)
            return jsonify(item)
    return jsonify({"error": "Not found"}), 404


if __name__ == "__main__":
    app.run(debug=True, port=5000)
