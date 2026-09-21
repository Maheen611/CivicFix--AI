# CivicFix AI — Capture. Report. Improve Your City.

A hackathon prototype for **UN SDG 11: Sustainable Cities and Communities**. CivicFix AI turns a photo of a civic problem (pothole, garbage overflow, damaged road, waterlogging, a dead streetlight, etc.) into a complete, editable complaint for the responsible municipal authority.

This version splits the project into a static **frontend** and a small **Python backend** that hosts the actual "agent" logic — image classification, RAG-based authority/knowledge retrieval, and AI complaint drafting.

## Project structure

```
civicfix-ai/
├── README.md
├── frontend/
│   ├── index.html      — markup only
│   ├── styles.css       — all styling
│   └── script.js        — all app logic (routing, state, backend calls)
└── backend/
    ├── app.py            — Flask API: classification agent, RAG, complaint drafting, complaint store
    ├── requirements.txt
    └── data/
        └── complaints.json   — file-based complaint store (auto-created)
```

## Running it

**1. Start the backend**

```bash
cd backend
pip install -r requirements.txt
python app.py
```

This runs on `http://127.0.0.1:5000` by default. Leave it running in its own terminal.

**2. Serve the frontend**

Don't just double-click `index.html` — serve it from a local web server so the camera and `fetch()` calls to the backend behave correctly:

```bash
cd frontend
python -m http.server 5500
```

Then open `http://localhost:5500` in your browser. If you ever move the backend to a different host/port, update the one `API_BASE` constant near the top of `frontend/script.js`.

The app is designed to **degrade gracefully**: if the backend isn't running, image classification, authority lookup, and AI complaint drafting all fall back to an in-browser demo version, and the UI tells you which one it used. Nothing breaks if you only open the frontend.

## What the backend actually does

| Endpoint | Method | What it's for |
|---|---|---|
| `/api/health` | GET | Liveness check |
| `/api/ai-status` | GET | Which AI provider (Claude / IBM watsonx.ai / none) is actually configured |
| `/api/categories` | GET | The 6 supported issue categories |
| `/api/classify` | POST (multipart `image`) | The classification "agent" (see below) |
| `/api/rag/retrieve` | GET (`query`, `city`, `category`) | Standalone RAG retrieval, for inspection |
| `/api/authority` | GET (`city`, `category`) | Authority lookup, RAG-augmented (see below) |
| `/api/generate-complaint` | POST (JSON) | Drafts the complaint letter, RAG-augmented |
| `/api/complaints` | GET / POST | List / create saved complaints (file-backed) |
| `/api/complaints/<id>` | PATCH | Update a complaint's status or reference number |

### The RAG pipeline

`backend/app.py` has a small, hand-written knowledge base (`KNOWLEDGE_BASE`) of ~8 short documents: the verified GHMC/CGRS facts, the verified CPGRAMS national-portal facts, an honest "we don't have verified contacts for other cities" note, and per-category reporting tips (what detail actually helps a pothole vs. a streetlight complaint get resolved).

Retrieval is real TF-IDF-style term-frequency cosine similarity (`retrieve()` in `app.py`), with a small relevance boost for documents tagged to the requested city/category — no external embedding API, no vector database, zero extra dependencies. That's a deliberate choice for a hackathon backend: it's transparent (you can read the whole ranking function in about 15 lines), deterministic, fast, and works fully offline. `/api/authority` and `/api/generate-complaint` both call `retrieve()` and return the documents it surfaced (`sources` / `sources_used`) so the frontend can show exactly what was retrieved rather than a black box.

**To upgrade this to production-grade RAG:** swap `retrieve()` for a call to a vector store (e.g. FAISS, Chroma, or a hosted vector DB) over embeddings from a real embedding model, and grow `KNOWLEDGE_BASE` into an actual, regularly-updated municipal document corpus rather than a hand-written list.

### The classification agent

`classify_image()` in `app.py` is a labelled placeholder: it computes basic brightness/colour stats from the actual uploaded photo with PIL, then picks a category with weighted randomness biased by those stats. It is **not** a trained vision model, and both the API response and the UI say so explicitly. Swap this function for a real image classifier (a fine-tuned CNN/ViT you host, or a call to a hosted vision API) to make it real.

### The complaint-drafting agent

`generate_complaint_text()` always runs the RAG step first, then tries a real AI provider — falling back to a deterministic template (still informed by what RAG retrieved) if none is configured or the call fails, so the endpoint always works with zero configuration.

Two providers are supported out of the box, picked by `_pick_provider()` in `app.py`:

| Provider | Env vars needed | Notes |
|---|---|---|
| **Claude (Anthropic)** | `ANTHROPIC_API_KEY` | Uses the `anthropic` package |
| **IBM watsonx.ai (Granite)** | `WATSONX_API_KEY`, `WATSONX_PROJECT_ID` (plus optional `WATSONX_URL`, `WATSONX_MODEL_ID`) | Uses the `ibm-watsonx-ai` package |

If both are configured, the first one found (Claude, then watsonx) wins by default — set `AI_PROVIDER=anthropic` or `AI_PROVIDER=watsonx` to force a choice explicitly. `GET /api/ai-status` reports which provider (if any) is currently active, so the frontend can show it truthfully rather than guessing.

```bash
# Claude
export ANTHROPIC_API_KEY=sk-ant-...

# IBM watsonx.ai — get these from your IBM Cloud / watsonx.ai project
export WATSONX_API_KEY=...
export WATSONX_PROJECT_ID=...
export WATSONX_URL=https://us-south.ml.cloud.ibm.com   # optional, this is the default
export WATSONX_MODEL_ID=ibm/granite-13b-chat-v2         # optional — pick any Granite/other model your project has access to

export AI_PROVIDER=watsonx   # optional — forces watsonx even if ANTHROPIC_API_KEY is also set

python app.py
```

Either way, the response includes `sources_used` (what RAG retrieved) and, when an AI provider was used, `provider` / `provider_label` — the frontend's "Write your own AI prompt" panel displays exactly which one generated the letter.

The frontend's "Write your own AI prompt" button on the complaint-generator step calls this endpoint first; if the backend is unreachable it tries the `window.claude` "sample" capability (only present if the page happens to be opened inside a claude.ai artifact view); if neither is available, it tells you plainly and the built-in template is still there.

## Feature map (frontend)

| Page | What it does |
|---|---|
| Home | Explains the problem and the product |
| How It Works | The 8-step workflow, one step at a time |
| Report → Capture | Live camera (front/back switch) or upload from device |
| Report → Analyze | Backend classification agent suggests a category + confidence; fully editable, with a local fallback if the backend's offline |
| Report → Location | City, area, pincode, and an illustrative tap-to-pin map |
| Report → Authority | Real RAG retrieval from the backend; shows the actual documents retrieved and whether each is verified or not |
| Report → Generate | Template draft, or "Generate with AI" via the backend (RAG + optional Claude) |
| Report → Review | Final letter preview; email yourself, copy for a portal, or submit directly on GHMC |
| My Complaints | Local, on-device tracking (also mirrored to the backend's `complaints.json` if it's running) |
| Explore Issues | Sample community feed (demo data) on a map + list, filterable by category |
| Impact Dashboard | Chart.js visualizations over the sample dataset |
| Profile & Settings | Local-only profile, a consent toggle, and a "clear my data" control |
| Responsible AI & Privacy | Plain-language explanation of what's real, what's mock, and what the AI can't be trusted for |

## What's real vs. mock — please read this before presenting it

CivicFix AI is built to never invent official contact details, complaint IDs, or a submission success. Concretely:

- **Verified, cited, real:** the Hyderabad/GHMC helpline numbers (155304, 040-2111-1111), the MyCURE citizen app name, the "Centralised Grievance Redressal System" name, and the path to file a complaint on ghmc.gov.in (Our Services → Grievance → Citizen). Source is linked in-app on the Authority Finder step. The **CPGRAMS** national grievance portal (`pgportal.gov.in`) is real and linked as a fallback for every city.
- **Real but unverified in this build:** the names of the other five municipal corporations (BBMP, MCGM, MCD, GCC, PMC) are real public facts, but this prototype does **not** ship a verified contact directory for them — the backend's `/api/authority` response says so explicitly (`verified: false`) and the app points the user to search for the official site instead of guessing an address.
- **Simulated / demo, clearly labeled in-app and in the API response:** the image classifier (a heuristic, not a trained vision model), the "Explore Issues" sample community feed, and the Impact Dashboard's sample dataset.
- **Never fabricated:** email addresses, phone numbers not confirmed by a cited source, and complaint reference numbers — those are always entered by the user after they receive them from a real channel.

## Notes & known limits

- **Camera access** (front/back switching on the capture step) needs a secure context — `http://localhost` counts, opening the file directly with `file://` may not on some browsers. Use "Upload from device" as a fallback either way.
- The backend's complaint store is a single JSON file with no auth — fine for a local demo/single-user hackathon setup, not for multi-user production. `My Complaints` in the browser (localStorage) is what the UI actually reads from; the backend copy is a secondary record.
- CORS is wide open (`CORS(app)`) for local development convenience — lock this down before deploying anywhere public.

## Extending it toward production

- Swap `classify_image()` for a real image-classification model/API.
- Swap the TF-IDF `retrieve()` for embedding-based vector search over a real, maintained municipal knowledge base.
- Replace the illustrative tap-to-pin map with a real mapping SDK (Google Maps / Mapbox / Leaflet with tile access) for true geocoding.
- Move complaint storage from a JSON file to a real database with authentication, and make `My Complaints` / `Explore Issues` genuinely multi-user.
- Build (or connect to) a verified, kept-up-to-date municipal contact directory rather than relying on a single cited reference.

## License / attribution

Built as a hackathon prototype. Municipal corporation names and the cited GHMC/CPGRAMS facts are public information, linked to their sources inside the app's Authority Finder and Responsible AI pages.
