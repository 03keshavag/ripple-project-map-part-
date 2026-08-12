/**
 * Ripple — Map & Discovery
 * Central runtime configuration.
 *
 * The USE_MOCK_DATA flag is the single switch that points the data-access
 * layer at either the local mock data or the real backend endpoint
 * GET /api/map/acts. No component code needs to change when we swap.
 */
export const USE_MOCK_DATA = import.meta.env.VITE_USE_MOCK_DATA !== 'false';

/**
 * Demo city center used to centre the Kindness Map (Bengaluru, India).
 * NOTE: this is only the *map viewport* centre — it is never a marker.
 */
export const DEMO_CENTER = { lat: 12.9716, lng: 77.5946 };

/** Default map zoom for the demo city. */
export const DEMO_ZOOM = 13;