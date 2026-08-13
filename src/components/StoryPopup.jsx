import { getCategoryColor } from '../constants/categories';

/** Formats an ISO date into a short readable label; null when missing/invalid. */
function formatDate(value) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

/**
 * StoryPopup — content shown inside a map marker's popup.
 * Pure presentational component: category badge, title, summary, city,
 * people impacted, created date (when available), and the "I Want to Ripple"
 * call-to-action. Styled to match the rest of the Ripple UI.
 */
export default function StoryPopup({ act, onRipple }) {
  const color = getCategoryColor(act.category);
  const createdDate = formatDate(act.createdAt);

  return (
    <div className="p-4">
      <span
        className="inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold text-white"
        style={{ backgroundColor: color }}
      >
        {act.category}
      </span>

      <h3 className="mt-2 text-base font-bold leading-snug text-slate-900 dark:text-slate-100">
        {act.title}
      </h3>

      <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {act.summary}
      </p>

      {act.city && (
        <p className="mt-2 flex items-center gap-1 text-xs font-medium text-slate-500 dark:text-slate-400">
          <span aria-hidden="true">📍</span> {act.city}
        </p>
      )}

      {typeof act.peopleImpacted === 'number' && (
        <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
          People impacted: {act.peopleImpacted}
        </p>
      )}

      {createdDate && (
        <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
          {createdDate}
        </p>
      )}

      <p className="mt-2 text-[10px] uppercase tracking-wide text-slate-400 dark:text-slate-500">
        Approximate location only
      </p>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onRipple(act);
        }}
        className="mt-3 w-full rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark active:scale-[0.98] dark:bg-brand-light dark:hover:bg-brand"
      >
        I Want to Ripple →
      </button>
    </div>
  );
}