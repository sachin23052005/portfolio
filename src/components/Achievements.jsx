import { Award, ArrowUpRight, FileText } from "lucide-react";
import Section, { Reveal } from "./Section";
import LeetCodeStats from "./LeetCodeStats";

export default function Achievements({ leetcode, achievements, leetcodeUrl }) {
  const { ieee, certification } = achievements;

  return (
    <Section id="achievements" eyebrow="Achievements" title="Problem solving and publications." tone="subtle">
      <div className="space-y-6">
        <LeetCodeStats stats={leetcode} profileUrl={leetcodeUrl} />

        <div className="grid gap-6 md:grid-cols-2">
          <Reveal className="flex flex-col rounded-2xl border border-line bg-surface p-6 sm:p-9">
            <FileText size={22} aria-hidden="true" className="mb-5 text-muted" />
            <h3 className="text-lg font-semibold text-fg">{ieee.title}</h3>
            <p className="mt-2 flex-1 text-base leading-relaxed text-muted">{ieee.description}</p>
            {ieee.url ? (
              <a
                href={ieee.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent transition-opacity hover:opacity-70"
              >
                Read the paper
                <ArrowUpRight size={15} aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ) : (
              <p className="mt-6 text-sm text-muted">Publication link coming soon.</p>
            )}
          </Reveal>

          <Reveal className="flex flex-col rounded-2xl border border-line bg-surface p-6 sm:p-9">
            <Award size={22} aria-hidden="true" className="mb-5 text-muted" />
            <h3 className="text-lg font-semibold text-fg">{certification.title}</h3>
            <p className="mt-1 text-sm text-muted">{certification.issuer}</p>
            <p className="mt-2 flex-1 text-base leading-relaxed text-muted">
              {certification.description}
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
