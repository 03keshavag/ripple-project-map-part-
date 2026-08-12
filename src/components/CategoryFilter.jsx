/**
 * CategoryFilter — chip-style multi-select filter.
 *
 * - Tapping a chip toggles that category on/off.
 * - When nothing is selected, "show everything" is implied (handled by the
 *   parent), and the chips still offer a visual cue via the "All stories"
 *   indicator.
 */
export default function CategoryFilter({ categories, active, onToggle }) {
  const noneActive = active.length === 0;

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 text-sm font-semibold text-slate-500 dark:text-slate-400">
        {noneActive ? 'Showing all' : 'Filtered by'}
      </span>

      {categories.map((category) => {
        const isActive = active.includes(category.id);
        return (
          <button
            key={category.id}
            type="button"
            onClick={() => onToggle(category.id)}
            aria-pressed={isActive}
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition ${
              isActive
                ? 'border-transparent text-white shadow-sm'
                : 'border-slate-300 bg-white text-slate-600 hover:border-slate-400 hover:text-slate-800 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-slate-100'
            }`}
            style={
              isActive ? { backgroundColor: category.color } : undefined
            }
          >
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: isActive ? '#ffffff' : category.color }}
            />
            {category.label}
          </button>
        );
      })}

      {!noneActive && (
        <button
          type="button"
          onClick={() => active.forEach((id) => onToggle(id))}
          className="rounded-full px-3 py-1.5 text-sm font-semibold text-brand hover:underline dark:text-brand-light"
        >
          Clear all
        </button>
      )}
    </div>
  );
}