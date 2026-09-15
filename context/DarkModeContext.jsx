import {createContext, useContext, useEffect, useSyncExternalStore} from 'react';

const DarkModeContext = createContext();
let memoryTheme;

/** Reads a saved choice, falling back to the operating system preference. */
function readTheme() {
  if (memoryTheme !== undefined) return memoryTheme;
  try {
    const saved = localStorage.getItem('isDarkMode');
    if (saved !== null) return saved === 'true';
  } catch { /* The theme remains usable when browser storage is unavailable. */ }
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

/** Keeps open tabs and system preference changes synchronized. */
function subscribeTheme(notify) {
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  // A change from another tab takes precedence over the local in-memory choice.
  const onStorage = () => { memoryTheme = undefined; notify(); };
  window.addEventListener('storage', onStorage);
  window.addEventListener('portfolio-theme', notify);
  media.addEventListener('change', notify);
  return () => {
    window.removeEventListener('storage', onStorage);
    window.removeEventListener('portfolio-theme', notify);
    media.removeEventListener('change', notify);
  };
}

/** Supplies a stable server snapshot to avoid hydration differences. */
function serverTheme() { return false; }

/** Persists appearance preferences while keeping server rendering predictable. */
export function DarkModeProvider({children}) {
  const storedDark = useSyncExternalStore(subscribeTheme, readTheme, serverTheme);
  useEffect(() => {
    document.documentElement.classList.toggle('dark', storedDark);
  }, [storedDark]);

  /** Stores an explicit selection and notifies this window immediately. */
  function toggleDarkMode() {
    memoryTheme = !storedDark;
    try {
      localStorage.setItem('isDarkMode', JSON.stringify(!storedDark));
    } catch { /* Keep the in-memory choice when storage is unavailable. */ }
    window.dispatchEvent(new Event('portfolio-theme'));
  }
  return <DarkModeContext.Provider value={{isDarkMode: storedDark, toggleDarkMode}}>{children}</DarkModeContext.Provider>;
}

/** Exposes the shared appearance controls. */
export const useDarkMode = () => useContext(DarkModeContext);
