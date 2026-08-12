import { useParams, Link } from 'react-router-dom';
import { useMapActs } from '../hooks/useMapActs';
import ThemeToggle from '../components/ThemeToggle';

/**
 * RippleStubPage — placeholder for the Challenge screen.
 *
 * This screen is owned by Nitya (frontend) & Bhavitha (backend). We only
 * provide a functional stub so the "I Want to Ripple" flow can be demoed
 * end-to-end. It greets the user with the act they chose and a "back to map"
 * link.
 */
export default function RippleStubPage() {
  const { actId } = useParams();
  const { acts, loading } = useMapActs();
  const act = acts.find((a) => a.id === actId);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-50 px-4 transition-colors dark:bg-slate-950">
      <div className="absolute right-4 top-4">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-light/15 text-3xl">
          🤝
        </div>
        <h1 className="text-2xl font-bold text-brand dark:text-brand-light">
          I Want to Ripple
        </h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          You’re about to accept a challenge inspired by a story you discovered.
        </p>

        <div className="mt-5 rounded-xl bg-slate-50 p-4 text-left dark:bg-slate-800">
          {loading ? (
            <p className="text-sm text-slate-400 dark:text-slate-500">
              Loading story…
            </p>
          ) : act ? (
            <>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand dark:text-brand-light">
                Inspired by
              </p>
              <p className="mt-1 font-semibold text-slate-900 dark:text-slate-100">
                {act.title}
              </p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {act.summary}
              </p>
            </>
          ) : (
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Act <span className="font-mono">{actId}</span>
            </p>
          )}
        </div>

        <div className="mt-5 rounded-xl border border-dashed border-brand-light bg-brand-light/5 p-4 text-xs text-slate-500 dark:text-slate-400">
          ✨ <span className="font-semibold text-brand dark:text-brand-light">
            Challenge screen coming soon
          </span>{' '}
          — owned by Nitya &amp; Bhavitha. This is a stub so the flow can be
          demoed now.
        </div>

        <Link
          to="/"
          className="mt-6 inline-block rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark"
        >
          ← Back to the Kindness Map
        </Link>
      </div>
    </div>
  );
}