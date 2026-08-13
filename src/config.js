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
 * Base URL of the Ripple backend.
 *
 * Configurable via VITE_API_BASE_URL so the frontend can point at any
 * deployed backend without touching source code (e.g. for the cross-laptop
 * demo). Defaults to the local backend for day-to-day development.
 */
export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

/**
 * Demo city center used to centre the Kindness Map (Bengaluru, India).
 * NOTE: this is only the *map viewport* centre — it is never a marker.
 */
export const DEMO_CENTER = { lat: 12.9716, lng: 77.5946 };

/** Default map zoom for the demo city. */
export const DEMO_ZOOM = 13;