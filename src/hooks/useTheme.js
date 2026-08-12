import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'ripple-theme';

/**
 * Resolves the initial theme: saved preference first, then the OS setting.
 */
function getInitialTheme() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'dark' || saved === 'light') return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

/**
 * useTheme — light/dark theme state.
 *
 * Applies the `.dark` class to <html> (Tailwind `darkMode: 'class'`) and
 * persists the user's choice in localStorage so it survives reloads and
 * carries across routes. Falls back to the OS preference on first visit.
 */
export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggleTheme };
}