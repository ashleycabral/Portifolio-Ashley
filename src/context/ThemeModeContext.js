import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const ThemeModeContext = createContext(undefined);

const getInitialMode = () => {
  if (typeof window === 'undefined') return true;
  const saved = window.localStorage.getItem('portfolio-theme');
  if (saved === 'dark') return true;
  if (saved === 'light') return false;
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? true;
};

export const ThemeModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(getInitialMode);

  useEffect(() => {
    window.localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  const value = useMemo(() => ({ darkMode, toggleTheme }), [darkMode]);

  return <ThemeModeContext.Provider value={value}>{children}</ThemeModeContext.Provider>;
};

export const useThemeMode = () => {
  const ctx = useContext(ThemeModeContext);
  if (!ctx) throw new Error('useThemeMode deve ser usado dentro de ThemeModeProvider');
  return ctx;
};

export default ThemeModeContext;
