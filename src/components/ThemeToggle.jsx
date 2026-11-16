import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-subtle hover:text-fg"
    >
      {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
    </button>
  );
}
