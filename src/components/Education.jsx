import { GraduationCap } from "lucide-react";
import Section, { Reveal } from "./Section";

export default function Education({ education }) {
  return (
    <Section id="education" eyebrow="Education" title="Where I study.">
      <Reveal className="grid gap-8 rounded-2xl border border-line bg-surface p-6 sm:grid-cols-[1fr_auto] sm:items-end sm:p-9">
        <div>
          <GraduationCap size={24} aria-hidden="true" className="mb-5 text-muted" />
          <h3 className="text-xl font-semibold tracking-tight text-fg sm:text-2xl">
            {education.school}
          </h3>
          <p className="mt-2 text-base text-muted">{education.degree}</p>
          <p className="mt-1 text-sm text-muted">
            {education.city} · {education.period}
          </p>
        </div>
        <div className="sm:text-right">
          <p className="text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
            {education.cgpa}
          </p>
          <p className="mt-1 text-sm text-muted">CGPA</p>
        </div>
      </Reveal>
    </Section>
  );
}
