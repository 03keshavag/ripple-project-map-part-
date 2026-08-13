import { useCallback, useEffect, useState } from 'react';
import { getMapActs } from '../api/mapActs';

/**
 * Loads the acts for the map & discovery views and tracks loading/error state.
 * Components stay dumb: they receive { acts, loading, error } as props.
 */
export function useMapActs() {
  const [acts, setActs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const reload = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getMapActs();
      setActs(data);
    } catch (err) {
      if (import.meta.env.DEV) {
        // eslint-disable-next-line no-console
        console.error('[useMapActs] Failed to load acts:', err);
      }
      setError('Unable to load acts right now. Please try again.');
      setActs([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    reload();
  }, [reload]);

  return { acts, loading, error, reload };
}