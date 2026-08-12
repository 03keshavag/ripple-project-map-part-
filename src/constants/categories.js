/**
 * Ripple — Map & Discovery
 * The six MIL story categories used across the whole platform.
 *
 * Colours drive the map pin + popup badge theming so categories are
 * instantly recognisable in both the Map view and the Discovery view.
 */
export const CATEGORIES = [
  { id: 'Community Service', label: 'Community Service', color: '#e11d48' },
  { id: 'Education', label: 'Education', color: '#2563eb' },
  { id: 'Environment', label: 'Environment', color: '#16a34a' },
  { id: 'Animal Welfare', label: 'Animal Welfare', color: '#d97706' },
  { id: 'Health', label: 'Health', color: '#7c3aed' },
  { id: 'Inclusion', label: 'Inclusion', color: '#0891b2' },
];

export const CATEGORY_MAP = Object.fromEntries(
  CATEGORIES.map((c) => [c.id, c]),
);

/** Fallback colour if a category label ever arrives that we don't know. */
export const FALLBACK_CATEGORY_COLOR = '#0f172a';

export function getCategoryColor(category) {
  return CATEGORY_MAP[category]?.color ?? FALLBACK_CATEGORY_COLOR;
}