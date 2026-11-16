import { useCallback, useEffect, useState } from "react";

// Light is the default. Dark is only used when the visitor explicitly toggles it.
export default function useTheme() {
  const [theme, setTheme] = useState(() =>
    typeof document !== "undefined" && document.documentElement.classList.contains("dark")
      ? "dark"
      : "light"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#000000" : "#fbfbfd");
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* storage unavailable — ignore */
    }
  }, [theme]);

  const toggle = useCallback(() => setTheme((t) => (t === "dark" ? "light" : "dark")), []);
  return { theme, toggle };
}
