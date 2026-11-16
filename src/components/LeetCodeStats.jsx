import { ArrowUpRight } from "lucide-react";
import { LeetcodeIcon } from "./BrandIcons";
import { Reveal } from "./Section";

const R = 54;
const C = 2 * Math.PI * R;

// Muted, accessible difficulty colours (work on white and black).
const TIERS = [
  { key: "easy", label: "Easy", color: "#34a37b" },
  { key: "medium", label: "Medium", color: "#d9962b" },
  { key: "hard", label: "Hard", color: "#d1495b" },
];

export default function LeetCodeStats({ stats, profileUrl }) {
  const total = stats.easy + stats.medium + stats.hard;
  const gap = 4; // visual gap between ring segments, in px of circumference
  let offset = 0;

  const segments = TIERS.map((t) => {
    const len = (stats[t.key] / total) * C;
    const seg = { ...t, dash: Math.max(len - gap, 0), offset };
    offset += len;
    return seg;
  });

  return (
    <Reveal className="rounded-2xl border border-line bg-surface p-6 sm:p-9">
      <div className="mb-8 flex items-center justify-between gap-4">
        <h3 className="flex items-center gap-2.5 text-lg font-semibold text-fg">
          <LeetcodeIcon size={20} />
          LeetCode
        </h3>
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-opacity hover:opacity-70"
        >
          View profile
          <ArrowUpRight size={15} aria-hidden="true" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>

      <div className="grid items-center gap-10 md:grid-cols-[auto_1fr] md:gap-14">
        <div className="relative mx-auto h-44 w-44 sm:h-52 sm:w-52">
          <svg
            viewBox="0 0 128 128"
            className="h-full w-full -rotate-90"
            role="img"
            aria-label={`${stats.solved} problems solved: ${stats.easy} easy, ${stats.medium} medium, ${stats.hard} hard`}
          >
            <circle cx="64" cy="64" r={R} fill="none" stroke="var(--line)" strokeWidth="9" />
            {segments.map((s) => (
              <circle
                key={s.key}
                cx="64"
                cy="64"
                r={R}
                fill="none"
                stroke={s.color}
                strokeWidth="9"
                strokeLinecap="round"
                strokeDasharray={`${s.dash} ${C}`}
                strokeDashoffset={-s.offset - gap / 2}
              />
            ))}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
              {stats.solved}
            </span>
            <span className="text-xs text-muted">solved</span>
          </div>
        </div>

        <div>
          <ul className="space-y-4">
            {segments.map((s) => (
              <li key={s.key}>
                <div className="mb-1.5 flex items-baseline justify-between text-sm">
                  <span className="flex items-center gap-2 font-medium text-fg">
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 rounded-full"
                      style={{ background: s.color }}
                    />
                    {s.label}
                  </span>
                  <span className="tabular-nums text-muted">{stats[s.key]}</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-subtle" aria-hidden="true">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${(stats[s.key] / total) * 100}%`, background: s.color }}
                  />
                </div>
              </li>
            ))}
          </ul>

          <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line">
            <div className="flex flex-col-reverse bg-surface p-4">
              <dt className="mt-0.5 text-xs text-muted">Peak contest rating</dt>
              <dd className="text-2xl font-semibold tracking-tight text-fg">{stats.peakRating}</dd>
            </div>
            <div className="flex flex-col-reverse bg-surface p-4">
              <dt className="mt-0.5 text-xs text-muted">Submissions in the past year</dt>
              <dd className="text-2xl font-semibold tracking-tight text-fg">
                {stats.submissionsPastYear}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </Reveal>
  );
}
