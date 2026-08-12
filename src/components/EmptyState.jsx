/**
 * EmptyState — shared feedback for empty data / no-filters-match / errors.
 * Optionally surfaces an action button (e.g. reload or clear filters).
 */
export default function EmptyState({
  title,
  message,
  actionLabel,
  onAction,
  emoji = '🌱',
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center dark:border-slate-700 dark:bg-slate-900">
      <span className="text-5xl" role="img" aria-hidden="true">
        {emoji}
      </span>
      <h3 className="mt-4 text-lg font-bold text-slate-800 dark:text-slate-100">
        {title}
      </h3>
      <p className="mt-1 max-w-sm text-sm text-slate-500 dark:text-slate-400">
        {message}
      </p>
      {actionLabel && onAction && (
        <button
          type="button"
          onClick={onAction}
          className="mt-5 rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}