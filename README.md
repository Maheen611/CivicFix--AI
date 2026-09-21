
# CivicFix AI 🌍

### AI-Powered Smart City Grievance & Sustainability Platform

> **Capture. Report. Improve Your City.**

CivicFix AI is a citizen-focused application that helps people document civic problems such as potholes, overflowing garbage, damaged roads, drainage issues, and streetlight failures.

Users can capture or upload an image, select a city and location, receive AI-assisted issue classification, find the relevant municipal reporting channel, and generate a clear complaint for review and submission.

This project is designed as an **AI + Sustainability** initiative aligned primarily with **UN Sustainable Development Goal 11: Sustainable Cities and Communities**.

---

## 👩‍💻 Project Information

| Field | Details |
|---|---|
| Project Name | CivicFix AI |
| Student | Maheen |
| College | Nawab Shah Alam Khan College of Engineering and Technology |
| Primary SDG | SDG 11 — Sustainable Cities and Communities |
| Secondary SDG | SDG 6 — Clean Water and Sanitation |
| Project Category | AI for Sustainability / Smart Cities |
| Development Support | IBM Bob |

---

## 📌 Problem Statement

Citizens regularly notice civic problems such as potholes, unmanaged waste, damaged roads, drainage issues, and broken streetlights. However, many people do not know which municipal department is responsible, where to submit a complaint, or how to describe the issue clearly.

Existing reporting processes can be fragmented and difficult to navigate. As a result, some problems remain unreported, complaints may lack useful information, and citizens may struggle to follow up.

CivicFix AI addresses this gap by combining image-based AI assistance, location selection, authority information, and AI-supported complaint generation in one user-friendly platform.

---

## 💡 Proposed Solution

CivicFix AI provides a structured reporting workflow:

1. Capture or upload a photograph of a civic issue.
2. Analyze the image using an AI classification service.
3. Allow the user to confirm or correct the detected category.
4. Select the city, area, and location.
5. Find the relevant municipal department or official grievance channel.
6. Generate a professional complaint draft using AI.
7. Let the user review and edit the complaint.
8. Open the official email or grievance portal for submission.
9. Save the complaint reference number and track updates where supported.

The system is designed to assist citizens, not to replace official municipal processes.

---

## 🎯 Objectives

- Make civic issue reporting easier to understand.
- Reduce confusion about municipal reporting channels.
- Help users create clear and structured complaints.
- Use AI for image classification and text generation.
- Support reporting related to sustainable cities and sanitation.
- Keep citizens in control of final submission.
- Encourage transparent and responsible use of AI.

---

## ✨ Key Features

### 1. Civic Issue Capture

- Capture an image using a camera.
- Upload an image from the device.
- Add a manual description.
- Select an issue category.

### 2. AI-Assisted Classification

The AI service can suggest categories such as:

- Pothole
- Overflowing garbage
- Damaged road
- Drainage problem
- Streetlight failure
- Other civic issue

The classification is presented as an assistance feature and must be reviewed by the user.

### 3. Location Selection

- Select a city and area.
- Use map-based location selection.
- Support GPS access only with user permission.
- Allow manual correction of the selected location.

### 4. Authority Finder

- Identify the relevant municipal department where data is available.
- Display official contact information from trusted sources.
- Provide official grievance portal links.
- Show the source or verification date of authority information.
- Avoid generating or guessing unknown email addresses.

### 5. AI Complaint Generator

The application can prepare:

- Complaint subject
- Issue description
- Location details
- Date and time
- Suggested request for action
- Image attachment guidance

Users can edit the draft before submission.

### 6. Complaint Tracking

- Store submitted complaint details.
- Save a user-entered reference number.
- Display the current status when supported by a connected source.
- Clearly distinguish user-entered information from verified live updates.

### 7. Impact Dashboard

Potential dashboard information includes:

- Number of submitted reports
- Issue categories
- Area-wise issue distribution
- Status breakdown
- Community reporting trends

Only real, consented, and appropriately anonymized data should be used for impact claims.

---

## 🤖 AI Components

| Component | Purpose |
|---|---|
| Image Classification | Suggest the category of a visible civic issue |
| Multimodal AI | Process image and text inputs where supported |
| Large Language Model | Generate an editable complaint draft |
| Retrieval-Augmented Generation (RAG) | Retrieve official municipal procedures and contact information |
| Agentic Workflow | Coordinate issue analysis, missing details, retrieval, and drafting |
| OCR | Read relevant text from signs or documents when appropriate |

### Important AI Limitation

AI results may be incorrect or incomplete. CivicFix AI should always allow the user to verify the issue category, location, complaint text, and authority before submission.

---

## 🧠 RAG Workflow

The Retrieval-Augmented Generation workflow can be structured as follows:

```text
User selects city and issue category
                |
                v
Retrieve trusted municipal information
                |
                v
Filter by city, area, department, and issue type
                |
                v
Return official procedure and contact source
                |
                v
Generate complaint guidance
                |
                v
User reviews and submits through official channel
```

### Suggested RAG Data Fields

- City
- State
- Area or zone
- Issue category
- Department
- Official email
- Official grievance portal
- Source URL
- Verification date
- Notes or eligibility requirements

The RAG dataset should be populated with verified information. If verified data is unavailable, the application should clearly state that the authority information is unavailable rather than inventing details.

---

## 🔁 Agent Logic

A possible agent workflow:

```text
START
  |
  v
Receive image, location, and user description
  |
  v
Analyze the image
  |
  v
Suggest issue category
  |
  v
Ask user to confirm or correct
  |
  v
Check for missing location or description
  |
  v
Retrieve authority information
  |
  v
Generate editable complaint
  |
  v
User reviews complaint
  |
  v
Open official submission channel
  |
  v
Save reference number if available
  |
  v
END
```

The agent must not independently accuse individuals, determine legal responsibility, or submit a complaint without appropriate user control.

---

## 🏗️ Proposed Technology Stack

The exact stack may change during implementation.

### Frontend

- HTML5
- CSS3
- JavaScript or React
- Responsive mobile-first interface
- Leaflet
- OpenStreetMap

### Backend

- Python
- FastAPI or Flask
- REST APIs
- SQLite for an initial prototype
- PostgreSQL for future deployment

### AI and Data

- Image classification model
- Large Language Model
- IBM Granite or another configured model, if available
- RAG pipeline
- Vector database, if required
- Trusted municipal authority dataset

### Development Support

- IBM Bob for planning, coding, debugging, testing, and documentation.

> IBM Bob is a development assistant. The application's actual AI functionality must be implemented and configured separately.

---

## 🖥️ Application Pages

1. **Landing Page** — Project overview and call to action.
2. **Home Dashboard** — Quick access to reporting and complaints.
3. **Report Issue** — Camera and image upload.
4. **AI Analysis** — Classification and editable results.
5. **Location Selection** — City, area, and map.
6. **Authority Finder** — Municipal department and official channels.
7. **Complaint Generator** — AI-written editable complaint.
8. **My Complaints** — History and reference numbers.
9. **Explore Issues** — Map-based issue visualization, subject to privacy controls.
10. **Impact Dashboard** — Aggregated reporting insights.
11. **Profile and Settings** — User preferences and privacy controls.
12. **Responsible AI** — Explanation of limitations, privacy, and accountability.

---

## 🔐 Responsible AI Considerations

### Privacy

- Request permission before accessing the camera or location.
- Avoid collecting unnecessary personal information.
- Protect uploaded images and location data.
- Provide clear data retention and deletion practices.

### Transparency

- Explain that AI classifications are suggestions.
- Show when information comes from a verified source.
- Clearly label mock data and simulated functionality.
- Do not claim that a complaint was submitted unless the result is confirmed.

### Fairness

- Avoid assumptions about people, communities, or neighborhoods.
- Use representative and appropriately reviewed data.
- Allow users to correct inaccurate classifications.

### Accountability

- Keep the citizen in control of the final complaint.
- Do not fabricate email addresses, complaint IDs, or authority responses.
- Provide a manual reporting fallback when automation is unavailable.

---

## 🌱 SDG Alignment

### Primary SDG 11 — Sustainable Cities and Communities

CivicFix AI supports citizen participation and access to civic reporting channels for urban infrastructure and public-space issues.

### Secondary SDG 6 — Clean Water and Sanitation

The platform can support reporting of sanitation-related concerns such as waste accumulation and drainage problems.

The project should not claim measurable sustainability improvements unless supported by actual implementation data.

---

## 📊 Expected Impact

If implemented with verified municipal information and responsible AI, CivicFix AI could:

- Make civic reporting easier to navigate.
- Help citizens create more structured complaints.
- Improve access to official reporting procedures.
- Support documentation of recurring civic issues.
- Encourage community participation.
- Provide a foundation for future data-informed municipal engagement.

### Beneficiaries

| Beneficiary | Potential Benefit |
|---|---|
| Citizens | Easier access to reporting guidance |
| Communities | Better documentation of shared concerns |
| Municipal Departments | More structured reports where compatible systems are adopted |
| Environment | Increased attention to waste, sanitation, and infrastructure issues |

---

## 🧪 Prototype Demonstration

A recommended demonstration flow is:

```text
Photo Upload
     |
     v
AI Issue Classification
     |
     v
User Confirmation
     |
     v
City and Location Selection
     |
     v
Authority Finder
     |
     v
AI Complaint Draft
     |
     v
User Review
     |
     v
Official Submission Channel
```

The prototype should clearly label:

- Implemented features
- Simulated features
- Mock authority data
- Planned integrations
- Unsupported or unavailable functions

---

## 🚀 Future Enhancements

- Integration with more verified municipal directories.
- Multilingual complaint generation.
- Voice-based reporting.
- Duplicate issue detection.
- Community issue heatmaps.
- Accessibility improvements.
- Official status API integrations where available.
- Admin dashboard for authorized municipal partners.
- Analytics for recurring issue patterns.
- Notifications for user-managed complaint follow-up.

---

## ⚙️ Installation

The installation steps depend on the final implementation stack.

A typical Python backend setup may look like:

```bash
# Clone the repository
git clone https://github.com/your-username/civicfix-ai.git

# Enter the project directory
cd civicfix-ai

# Create a virtual environment
python -m venv venv

# Activate the environment on Windows
venv\Scripts\activate

# Activate the environment on macOS/Linux
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Start the backend
uvicorn app.main:app --reload
```

Replace the commands and folder paths with the actual project structure after implementation.

---

## 🔑 Environment Variables

Do not commit API keys or private credentials to GitHub.

Example `.env` configuration:

```env
APP_ENV=development
DATABASE_URL=sqlite:///./civicfix.db
AI_PROVIDER=
AI_MODEL=
MAP_PROVIDER=
RAG_DATA_PATH=
```

Use a `.env.example` file in the repository and add `.env` to `.gitignore`.

---

## 🤝 Contribution

Contributions and suggestions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Test the changes.
5. Open a pull request with a clear description.

---

## 📄 License

Choose an appropriate open-source license before publishing the repository. If no license has been selected, the project remains subject to applicable copyright rules.

---

## 👩‍🎓 Author

**Maheen**  
Nawab Shah Alam Khan College of Engineering and Technology

### Project Theme

**AI for Sustainability — Smart Cities and Citizen Participation**

> CivicFix AI aims to make civic issue reporting clearer, more accessible, and more responsible through practical AI-assisted workflows.
