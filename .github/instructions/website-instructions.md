---
applyTo: '**'
---

## Summary / Goal
Create a clean, professional website for **RovrOne Labs Private Limited** using React (frontend) and Node (backend). The site is a basic corporate site with extendable code, clear APIs, and human-written content. Keep language concise and literal — do **not** use meta phrases like "AI-generated". Match the site's visual theme to the provided logo (monochrome, geometric, modern). Produce maintainable code, clear folder structure, and simple APIs suitable for later integration with product pages and admin panel.

---

## Tech Stack

- **Frontend:** React (create-react-app or Vite). Use functional components and hooks. Prefer TypeScript if requested; default to JavaScript otherwise.  
- **Styling:** CSS Modules or Tailwind CSS (optional). Keep styles modular and easy to override.  
- **Backend:** Node.js + Express. Simple REST endpoints with JSON responses. No heavy frameworks.  
- **Data store:** JSON file or lightweight DB (SQLite / file-based) placeholder for now.  
- **Build / dev:** npm scripts (`start`, `build`, `dev`, `test`).  
- **Tests:** basic unit tests (Jest + React Testing Library) scaffolding.

---

## Design & Theming Notes (use logo as source)

- **Logo style:** monochrome, geometric, bold strokes, hex/angle motifs.  
- **Colors:**  
  - Primary — `#000000`  
  - Secondary — `#ffffff`  
  - Accent — grayscale or subtle dark-blue/charcoal (`#1f2937`) for CTA hover.  
  Keep it minimal and corporate.  
- **Typography:** modern sans-serif (e.g., Inter, Poppins, or system UI). Use different weights for headings and body.  
- **Spacing:** generous whitespace, centered content blocks, clear section separation.  
- **Imagery:** product photos and diagrams are shown in full-bleed or card format. Use rounded 12–16px cards only where necessary.  
- **Responsiveness:** mobile-first; header collapses into a hamburger menu on small screens.

---

## Pages & Routes

### Frontend Routes
- `/` — **Home:** hero, intro, featured solutions, call-to-action (Contact / Get Quote)  
- `/about` — **About Us:** mission, vision, team, R&D labs, certifications  
- `/services` — **Services:** Drone Manufacturing, DaaS, Robotics, AI & Platforms, EV Division, Training  
- `/products` — **Products & Flagships:** Saksham Drone, LED Flying Screen Display, Robotics kits (optional)  
- `/drone-school` — **Programs:** training, university partnerships, curriculum highlights  
- `/contact` — **Contact:** contact form, phone, email, address, map placeholder  
- `/careers` — **Career / Join Us** (optional)  
- `/privacy` & `/terms` — **Legal pages**

### Backend Endpoints (Express)
- `GET /api/site` — returns site metadata: name, description, hero text, social links  
- `GET /api/services` — returns services list (id, title, short, full description, images)  
- `GET /api/products` — returns products list (id, title, specs, brochure link)  
- `POST /api/contact` — accepts contact form submissions: `{ name, email, phone, message }` — returns success status (validate server-side)  
- `POST /api/subscribe` — email newsletter signup (email)  
- `GET /health` — health check  

### API Guidelines
- Always return JSON with a clear structure `{ success: boolean, data: ..., errors: [...] }`.  
- Validate inputs and return clear HTTP status codes (`400` for client errors, `500` for server errors).  
- Keep controllers small and readable; separate routes from controller logic.  
- Provide CORS configuration for frontend origin in development.

---

## Folder Structure (recommended)

/ (repo root)
├─ /frontend
│  ├─ /public
│  ├─ /src
│  │  ├─ /components
│  │  │  ├─ Header.jsx
│  │  │  ├─ Footer.jsx
│  │  │  ├─ Hero.jsx
│  │  │  ├─ ServiceCard.jsx
│  │  │  └─ ContactForm.jsx
│  │  ├─ /pages
│  │  │  ├─ Home.jsx
│  │  │  ├─ About.jsx
│  │  │  └─ Services.jsx
│  │  ├─ /styles
│  │  │  └─ variables.css
│  │  ├─ App.jsx
│  │  └─ index.jsx
│  └─ package.json
├─ /backend
│  ├─ /routes
│  │  └─ api.js
│  ├─ /controllers
│  ├─ /models
│  ├─ server.js
│  └─ package.json
├─ README.md


---

## Coding & Quality Rules for Copilot

1. **Readable and explicit code:** prefer clear variable names, small functions, and comments for complex logic.  
2. **No cryptic one-liners** that obscure intent. Favor explicitness.  
3. **Content is human-written:** produce concise copy for each page (examples below). Avoid marketing fluff; keep factual statements derived from the company profile.  
4. **Accessibility:** add `alt` attributes for images, semantic headings, keyboard navigation for forms.  
5. **Security:** sanitize and validate POST inputs; do not log sensitive info; implement rate limiting placeholder for contact endpoint.  
6. **Extensibility:** make it easy to add product pages, an admin panel, or authentication later.  
7. **Documentation:** generate a clear README with run instructions for both frontend and backend, and an API summary.

---

## Content Guidelines (sample copy — concise and human)

### Home — Hero (short)
RovrOne Labs designs and builds indigenous drone, robotics, and electric mobility systems. We deliver industrial-grade hardware and software solutions for enterprises and public sector organisations.

### About (short)
RovrOne Labs Private Limited combines hardware engineering and software development to deliver practical autonomous systems. We focus on local manufacturing, research, and partnerships that build real-world solutions.

### Services (short bullets)
- Drone manufacturing and custom assembly.  
- Drone-as-a-Service for surveillance, mapping, and logistics.  
- Robotics systems for inspection and industrial automation.  
- EV prototyping, battery systems, and fleet electrification consulting.  
- Training and university collaboration through our Drone School.

### Contact (short)
Reach out to discuss projects, partnerships, or training programs.  
Phone: `+91 9009107086`  
Email: `rovronelabs@gmail.com`

---

## UI Behavior & Components

- **Header:** Logo on left, nav links (Home, About, Services, Products, Contact). CTA “Get Quote” on right.  
- **Hero:** Large headline, one-line supporting text, CTA button (Contact / Get Quote). Subtle geometric background echoing logo.  
- **Services grid:** cards with short description and “Learn more” linking to detailed service anchor.  
- **Contact form:** name, email, phone, message, simple client-side validation and UX-friendly success message after POST.  
- **Footer:** address, quick links, social links, copyright.

---

## Example API Spec (OpenAPI-style but brief)

GET /api/services
Response 200
{
"success": true,
"data": [
{ "id": "drone-manufacturing", "title": "Drone Manufacturing", "short": "Custom UAV design and production", "full": "Full description..." }
]
}

POST /api/contact
Body:
{ "name":"", "email":"", "phone":"", "message":"" }

Response:
{ "success": true, "message": "Thank you. We will respond within 3 business days." }

---

## Developer Handoff & Deliverables

When Copilot completes generation, the repo must contain:

1. Working React app with the pages listed and a header/footer.  
2. Working Node/Express server with the specified endpoints and basic input validation.  
3. A `README.md` with:  
   - Setup steps (`npm install` in both `/frontend` and `/backend` and how to start dev servers).  
   - API example curl commands for each endpoint.  
   - Build steps for production (build frontend & serve with backend or static hosting).  
4. Sample unit test(s) and scripts to run them.  
5. A `assets` folder containing the provided logo (`rov-logo.jpg`) and an example `variables.css` color tokens file.

---

## Acceptance Criteria

- Site loads and navigates between pages.  
- Frontend fetches data from backend endpoints and renders it.  
- Contact form submits and receives success response (stored to file).  
- README clearly explains how to run and test locally.  
- Code is modular and documented.  
- Theme matches logo color palette.  
- Accessibility basics included.  
- Tests scaffolded.

---

## Example Prompt Template (for Copilot)

You are given the repo skeleton. Create a full-stack corporate website for "RovrOne Labs Private Limited" using React for frontend and Node/Express for backend. Follow these constraints:

Use the folder structure listed in website-instructions.md.

Implement pages: Home, About, Services, Products, Contact. Include clear routing and navigation.

Implement REST API endpoints: GET /api/site, GET /api/services, GET /api/products, POST /api/contact, GET /health.

Frontend must fetch data from backend endpoints. Provide fetch examples and error handling.

Provide concise, factual site copy supplied in this file. Do not add marketing hyperbole or meta labels like "generated by AI".

Use the logo theme: monochrome, geometric. Base color palette on black/white with neutral accents.

Ensure accessibility and small unit test examples.

Produce a README with run steps for both frontend and backend and sample curl commands for each API endpoint.

Deliver the code for both frontend and backend. Show the key files (App.jsx, routes/api.js, server.js, a sample component, ContactForm.jsx) with working examples and comments.


---

## Checklist for Final Review
- [ ] Folder structure as specified  
- [ ] Pages implemented and content added  
- [ ] REST endpoints present and tested with curl  
- [ ] Contact form validation and response flow implemented  
- [ ] README and run instructions added  
- [ ] Logo asset linked and theme matched  
- [ ] Accessibility basics included  
- [ ] Tests scaffolded
