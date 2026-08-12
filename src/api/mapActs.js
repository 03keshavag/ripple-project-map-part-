/**
 * Ripple — Map & Discovery
 * DATA-ACCESS LAYER — the ONLY place that talks to a data source.
 *
 * All components call getMapActs() and never touch the backend or the mock
 * array directly, so re-pointing to the real API later is a one-place change.
 */
import { USE_MOCK_DATA } from '../config';
import { MOCK_ACTS } from '../mock/acts';

/** Simulated network latency so loading states are visible & testable. */
const MOCK_DELAY_MS = 900;

/**
 * Returns the list of kindness acts for the map / discovery views.
 *
 * ================================================================
 *  MOCK-TO-REAL API SWAP (only edit this function when going live)
 * ================================================================
 * When the backend exists, simply delete the mock branch below and keep the
 * fetch branch. Nothing else in the codebase needs to change:
 *
 *   if (USE_MOCK_DATA) {
 *     await new Promise((r) => setTimeout(r, MOCK_DELAY_MS));
 *     return MOCK_ACTS;
 *   }
 *
 * The response shape stays identical:
 *   [{ id, title, category, summary, latitudeApprox, longitudeApprox }]
 * ================================================================
 */
export async function getMapActs() {
  if (USE_MOCK_DATA) {
    // Artificial delay makes the loading/empty states easy to see and test.
    await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY_MS));
    return MOCK_ACTS;
  }

  // ---- LIVE BACKEND PATH (currently unreachable while mock flag is on) ----
  const res = await fetch('/api/map/acts', {
    headers: { Accept: 'application/json' },
  });
  if (!res.ok) {
    throw new Error(`Failed to load acts (HTTP ${res.status})`);
  }
  return res.json();
}