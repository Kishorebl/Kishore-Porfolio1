import { MoonStar, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

const getPreferredTheme = () => {
  if (typeof window === 'undefined') {
    return 'light';
  }
  const stored = window.localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') {
    return stored;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(getPreferredTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      type="button"
      aria-label="Toggle light and dark mode"
      className="rounded-full border border-white/40 bg-white/70 p-2 text-slate-900 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl dark:border-white/10 dark:bg-white/10 dark:text-white"
      onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
    >
      {theme === 'dark' ? <Sun size={18} /> : <MoonStar size={18} />}
    </button>
  );
};

export default ThemeToggle;
