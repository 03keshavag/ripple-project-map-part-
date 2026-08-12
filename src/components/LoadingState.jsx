/**
 * LoadingState — shared feedback shown while acts are being fetched.
 */
export default function LoadingState({ message = 'Loading…' }) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-8 text-center dark:border-slate-700 dark:bg-slate-900">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-brand-light border-t-transparent" />
      <p className="mt-4 text-sm font-medium text-slate-500 dark:text-slate-400">
        {message}
      </p>
    </div>
  );
}