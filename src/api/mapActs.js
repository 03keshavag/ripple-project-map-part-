/**
 * Ripple — Map & Discovery
 * DATA-ACCESS LAYER — the ONLY place that talks to a data source.
 *
 * All components call getMapActs() and never touch the backend or the mock
 * array directly, so re-pointing to the real API later is a one-place change.
 */
import { USE_MOCK_DATA, API_BASE_URL } from '../config';
import { MOCK_ACTS } from '../mock/acts';

/** Simulated network latency so loading states are visible & testable. */
const MOCK_DELAY_MS = 900;

/**
 * A coordinate pair is only usable as a map marker when both lat & lng are
 * finite numbers. Records with missing / non-numeric / non-finite coords are
 * skipped so a single bad record can never crash the whole map.
 */
function hasValidCoordinates(lat, lng) {
  return (
    typeof lat === 'number' &&
    Number.isFinite(lat) &&
    typeof lng === 'number' &&
    Number.isFinite(lng)
  );
}

/**
 * Normalises one raw act into the shape the rest of the UI expects.
 *
 * The real backend hands back Mongo `_id`; the UI (markers, cards, routes)
 * uses `id`. We bridge that here so no component has to care about the source.
 * Records with invalid coordinates are dropped (return null) and logged in dev.
 */
function normalizeAct(raw) {
  const act = { ...raw, id: raw.id ?? raw._id };

  if (!hasValidCoordinates(act.latitudeApprox, act.longitudeApprox)) {
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.warn('[mapActs] Skipping act with invalid coordinates:', raw);
    }
    return null;
  }

  return act;
}

/**
 * Returns the list of kindness acts for the map / discovery views.
 * Handles BOTH sources and normalises them to a single, validated shape:
 *   [{ id, title, category, summary, latitudeApprox, longitudeApprox, ... }]
 *
 * ================================================================
 *  MOCK-TO-REAL API SWAP (only edit this switch when going live)
 * ================================================================
 * `VITE_USE_MOCK_DATA=true` returns local mock data (with an artificial
 * delay so loading states are visible). Set it to `false` to call the real
 * backend GET {API_BASE_URL}/api/acts/map. Point at a different backend by
 * changing VITE_API_BASE_URL — no component code changes are needed.
 */
export async function getMapActs() {
  if (USE_MOCK_DATA) {
    // Artificial delay makes the loading/empty states easy to see and test.
    await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY_MS));
    return MOCK_ACTS.map(normalizeAct).filter(Boolean);
  }

  // ---- LIVE BACKEND PATH -------------------------------------------
  const res = await fetch(`${API_BASE_URL}/api/acts/map`, {
    headers: { Accept: 'application/json' },
  });
  if (!res.ok) {
    throw new Error(`Failed to load acts (HTTP ${res.status})`);
  }

  // Backend contract: { success, count, acts: [...] }
  const payload = await res.json();
  const acts = Array.isArray(payload?.acts) ? payload.acts : [];
  return acts.map(normalizeAct).filter(Boolean);
}