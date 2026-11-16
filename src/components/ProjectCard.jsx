import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { Reveal } from "./Section";

export default function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <Reveal as="article" className="rounded-2xl border border-line bg-surface p-6 transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] sm:p-9 dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
      <p className="mb-4 font-mono text-xs text-muted">
        {String(index + 1).padStart(2, "0")}
      </p>
      <h3 className="max-w-2xl text-xl font-semibold leading-snug tracking-tight text-fg sm:text-2xl">
        {project.title}
      </h3>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{project.description}</p>

      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
        {project.tech.map((t) => (
          <li key={t} className="rounded-full bg-subtle px-3 py-1 text-xs font-medium text-fg">
            {t}
          </li>
        ))}
      </ul>

      <div className="expand" data-open={open}>
        <div id={panelId} aria-hidden={!open} inert={!open}>
          <ul className="mt-7 space-y-3 border-t border-line pt-6">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm leading-relaxed text-muted sm:text-base">
                <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-fg" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={panelId}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-opacity hover:opacity-70"
        >
          {open ? "Hide technical highlights" : "Technical highlights"}
          <ChevronDown
            size={16}
            aria-hidden="true"
            className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </button>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} on GitHub (opens in a new tab)`}
          className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-fg transition-colors hover:bg-subtle"
        >
          <GithubIcon size={16} />
          View on GitHub
        </a>
      </div>
    </Reveal>
  );
}
