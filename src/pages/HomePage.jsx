import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMapActs } from '../hooks/useMapActs';
import {
  CATEGORIES,
  CATEGORY_MAP,
  getCategoryColor,
} from '../constants/categories';
import KindnessMap from '../components/KindnessMap';
import DiscoveryList from '../components/DiscoveryList';
import CategoryFilter from '../components/CategoryFilter';
import LoadingState from '../components/LoadingState';
import EmptyState from '../components/EmptyState';
import ThemeToggle from '../components/ThemeToggle';

const VIEWS = ['map', 'discovery'];

/**
 * Builds the category list shown in the filter dynamically from the acts that
 * actually came back from the API (so new/unknown categories appear without
 * code changes). Known MIL categories keep their familiar order & colour;
 * any extras are appended with their derived colour.
 */
function getAvailableCategories(acts) {
  const presentIds = [
    ...new Set(acts.map((act) => act?.category).filter(Boolean)),
  ];
  const known = CATEGORIES.filter((c) => presentIds.includes(c.id));
  const extras = presentIds
    .filter((id) => !CATEGORY_MAP[id])
    .map((id) => ({ id, label: id, color: getCategoryColor(id) }));
  return [...known, ...extras];
}

/**
 * HomePage — the Kindness Map & Discovery screen.
 *
 * Owns the shared data + filter state, then hands filtered data down to the
 * purely presentational map and list components. A single "I Want to Ripple"
 * handler navigates to the challenge stub at /ripple/:actId.
 * Light & dark themes are supported via Tailwind `dark:` variants.
 */
export default function HomePage() {
  const { acts, loading, error, reload } = useMapActs();
  const [activeCategories, setActiveCategories] = useState([]);
  const [view, setView] = useState('map');
  const navigate = useNavigate();

  // Client-side filtering of the same data (no backend filtering yet).
  // Empty selection = "show everything".
  const filteredActs = useMemo(() => {
    if (activeCategories.length === 0) return acts;
    return acts.filter((act) => activeCategories.includes(act.category));
  }, [acts, activeCategories]);

  // Filter chips are derived from the acts actually returned by the API so
  // categories stay in sync with the (live) data source.
  const availableCategories = useMemo(() => getAvailableCategories(acts), [acts]);

  const handleRipple = (act) => {
    // Stub navigation to Nitya's challenge screen. The real screen is not
    // built here; RippleStubPage shows the actId for now.
    navigate(`/ripple/${act.id}`);
  };

  const toggleCategory = (id) => {
    setActiveCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id],
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <header className="border-b border-slate-200 bg-white transition-colors dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl" role="img" aria-label="Ripple">
              🌊
            </span>
            <div>
              <h1 className="text-xl font-bold text-brand dark:text-brand-light">
                Ripple
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Small acts, visible. Stories that spark new ripples.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Map / Discovery toggle */}
            <div className="flex rounded-full border border-slate-200 bg-slate-100 p-1 text-sm font-medium dark:border-slate-700 dark:bg-slate-800">
              {VIEWS.map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setView(v)}
                  className={`rounded-full px-4 py-1.5 capitalize transition ${
                    view === v
                      ? 'bg-white text-brand shadow-sm dark:bg-slate-950 dark:text-brand-light'
                      : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
                  }`}
                >
                  {v === 'map' ? '🗺️ Map' : '📚 Discovery'}
                </button>
              ))}
            </div>

            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-5">
        {/* Category filter chips — applied to BOTH views from the same state */}
        <section className="mb-4">
          <CategoryFilter
            categories={availableCategories}
            active={activeCategories}
            onToggle={toggleCategory}
          />
        </section>

        {/* Content area */}
        <section className="relative">
          {loading ? (
            <LoadingState message="Loading kindness stories…" />
          ) : error ? (
            <EmptyState
              title="Unable to load acts right now"
              message="Please try again in a moment. The acts of kindness are still out there!"
              actionLabel="Retry"
              onAction={reload}
            />
          ) : filteredActs.length === 0 ? (
            activeCategories.length > 0 ? (
              <EmptyState
                title="No stories match those filters"
                message="Try clearing a category or two to see more acts of kindness."
                actionLabel="Clear filters"
                onAction={() => setActiveCategories([])}
              />
            ) : (
              <EmptyState
                title="No acts on the map yet"
                message="Be the first to share a ripple of kindness here."
                emoji="🌱"
              />
            )
          ) : view === 'map' ? (
            <KindnessMap
              acts={filteredActs}
              onRipple={handleRipple}
              className="h-[70vh] w-full rounded-2xl border border-slate-200 shadow-sm dark:border-slate-800"
            />
          ) : (
            <DiscoveryList acts={filteredActs} onRipple={handleRipple} />
          )}
        </section>

        <footer className="mt-6 border-t border-slate-200 pt-4 text-center text-xs text-slate-400 dark:border-slate-800 dark:text-slate-500">
          Ripple · Media &amp; Information Literacy · Map data ©
          <a
            href="https://www.openstreetmap.org/copyright"
            target="_blank"
            rel="noreferrer"
            className="text-brand hover:underline dark:text-brand-light"
          >
            StreetMap contributors
          </a>
        </footer>
      </main>
    </div>
  );
}