import { getCategoryColor } from '../constants/categories';

/**
 * StoryCard — a single story preview used in the Discovery list/grid.
 * Pure presentational: title, category badge, short summary, and an
 * "I Want to Ripple" action.
 */
export default function StoryCard({ act, onRipple }) {
  const color = getCategoryColor(act.category);

  return (
    <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-900">
      <div className="flex items-center justify-between">
        <span
          className="inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold text-white"
          style={{ backgroundColor: color }}
        >
          {act.category}
        </span>
        <span className="text-[11px] text-slate-400 dark:text-slate-500">
          📍 nearby
        </span>
      </div>

      <h3 className="mt-3 text-lg font-bold leading-snug text-slate-900 dark:text-slate-100">
        {act.title}
      </h3>

      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        {act.summary}
      </p>

      <button
        type="button"
        onClick={() => onRipple(act)}
        className="mt-4 w-full rounded-full border border-brand bg-brand-light/10 px-4 py-2 text-sm font-semibold text-brand transition hover:bg-brand hover:text-white active:scale-[0.98] dark:border-brand-light dark:bg-brand-light/10 dark:text-brand-light dark:hover:bg-brand dark:hover:text-white"
      >
        I Want to Ripple →
      </button>
    </article>
  );
}