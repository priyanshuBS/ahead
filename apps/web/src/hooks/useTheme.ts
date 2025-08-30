import { useEffect, useState } from "react";

export type ThemeMode = "light" | "dark" | "system";

function useTheme() {
  const [theme, setTheme] = useState<ThemeMode>("system");

  const applyTheme = (mode: ThemeMode) => {
    const root = document.documentElement;

    if (mode === "system") {
      localStorage.removeItem("theme");
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      root.classList.toggle("dark", prefersDark);
    } else {
      localStorage.setItem("theme", mode);
      root.classList.toggle("dark", mode === "dark");
    }
  };

  const changeTheme = (mode: ThemeMode) => {
    setTheme(mode);
    applyTheme(mode);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as ThemeMode | null;

    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      setTheme("system");
      applyTheme("system");
    }
  }, []);

  return { theme, changeTheme };
}

export default useTheme;
