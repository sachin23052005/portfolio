import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import useActiveSection from "../hooks/useActiveSection";

export const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "education", label: "Education" },
  { id: "learning", label: "Learning" },
  { id: "contact", label: "Contact" },
];

const IDS = NAV.map((n) => n.id);

export default function Navbar({ name, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(IDS);

  const linkClass = (id) =>
    `text-sm transition-colors ${active === id ? "text-fg" : "text-muted hover:text-fg"}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-xl">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-md focus:bg-fg focus:px-3 focus:py-1.5 focus:text-sm focus:text-bg"
      >
        Skip to content
      </a>
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a href="#top" className="text-sm font-semibold tracking-tight text-fg">
          {name}
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                className={linkClass(n.id)}
                aria-current={active === n.id ? "true" : undefined}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-subtle hover:text-fg md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-bg md:hidden">
          <ul className="mx-auto max-w-6xl px-5 py-3 sm:px-8">
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-3 text-base text-fg last:border-b-0"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
