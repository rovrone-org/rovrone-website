# RovrOne Website (local dev)

This workspace contains a simple frontend (Vite + React) and backend (Node + Express) scaffold for the RovrOne Labs website.

Quick start (macOS / zsh):

1. Start backend

```bash
cd backend
npm install
npm run dev
```

2. Start frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend expects the backend at http://localhost:4000 by default.

Files of interest:

- `backend/` — Express API and JSON data store (data/*.json)
- `frontend/` — Vite React app (src/components, src/pages)
