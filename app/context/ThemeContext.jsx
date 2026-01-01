"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

const ThemeContext = createContext(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

const getInitialTheme = () => {
  if (typeof window === "undefined") return false;
  const savedTheme = localStorage.getItem("theme");
  return savedTheme === "dark";
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => getInitialTheme());

  const applyTheme = useCallback((dark) => {
    const html = document.documentElement;
    if (dark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, []);

  useEffect(() => {
    applyTheme(isDarkMode);
  }, [isDarkMode, applyTheme]);

  const toggleTheme = useCallback(() => {
    setIsDarkMode((prev) => !prev);
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
