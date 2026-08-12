# Ripple — Kindness Map & Discovery 

Standalone React + Vite + Tailwind demo of the **Kindness Map**, **Discovery**
list, and the **"I Want to Ripple"** entry point — built on **mock data** so it
runs with zero backend. Part of the Ripple hackathon project (UNESCO-themed
Media & Information Literacy).

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## What's included

- 🗺️ **Kindness Map** — Leaflet + OpenStreetMap tiles (attribution visible),
  centered on Bengaluru (12.9716, 77.5946).
- 📍 **Markers** — one per act, custom SVG pins colored by category, positioned
  at **approximate** city/neighbourhood coordinates only.
- 🗨️ **Story popups** — click a marker: title, category badge, short summary,
  and an **"I Want to Ripple" →** button that navigates to `/ripple/:actId`.
- 🎚️ **Category filters** — chips for Community Service, Education,
  Environment, Animal Welfare, Health, Inclusion. Client-side filtering, shared
  across map and discovery views. No selection = show all.
- 📚 **Discovery UI** — a grid of story cards as an alternative to the map.
- ⏳ **Loading & empty states** — an artificial ~900 ms delay in the mock data
  function makes both states easy to see and test.
- 🧭 **Ripple stub** — `/ripple/:actId` renders a placeholder Challenge screen
  (that screen is owned by Nitya/Bhavitha).
- 🌗 **Light & dark themes** — class-based Tailwind dark mode. The header and
  ripple stub have a 🌙/☀️ toggle; the choice is saved to `localStorage` and
  defaults to your OS preference on first visit. Leaflet popups, attribution,
  and controls are themed too.

## Mock → real API swap (one place only)

All data flows through **`src/api/mapActs.js` → `getMapActs()`**.

- Components never call `fetch` or import the mock array directly.
- Set `VITE_USE_MOCK_DATA=false` (in `.env`) to switch to the live endpoint
  `GET /api/map/acts`.
- The mock payload in `src/mock/acts.js` matches the real API contract exactly:

```json
{
  "id": "123",
  "title": "Helping Hands",
  "category": "Community Service",
  "summary": "A student helped an elderly citizen safely cross a busy road.",
  "latitudeApprox": 12.9716,
  "longitudeApprox": 77.5946
}
```

- The mock file ships **~100 acts** (10 hand-written seeds + 90 generated
  from per-category templates) scattered across ~26 Bengaluru neighbourhoods.
  Coordinates are deterministic, neighbourhood-scale approximations, so the
  map feels alive without ever showing an exact location.

Search for `MOCK-TO-REAL API SWAP` in `src/api/mapActs.js` for the marked spot.

## Privacy / safety

- Only `latitudeApprox` / `longitudeApprox` are used — never exact coordinates.
- No reverse-geocoding, no precise-location lookups, no tracking.

## Scripts

| Command            | Purpose                       |
| ------------------ | ----------------------------- |
| `npm run dev`      | Dev server (port 5173)        |
| `npm run build`    | Production build into `dist/` |
| `npm run preview`  | Preview the production build  |

## Stack

React 18 · Vite 5 · Tailwind CSS 3 · Leaflet / react-leaflet 4 · React Router 6
