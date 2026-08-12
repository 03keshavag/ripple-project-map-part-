import { getCategoryColor } from '../constants/categories';

/**
 * StoryPopup — content shown inside a map marker's popup.
 * Pure presentational component: title, category badge, short summary, and
 * the "I Want to Ripple" call-to-action.
 */
export default function StoryPopup({ act, onRipple }) {
  const color = getCategoryColor(act.category);

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