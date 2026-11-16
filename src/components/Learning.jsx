import { BookOpen } from "lucide-react";
import Section, { Reveal } from "./Section";

export default function Learning({ learning }) {
  return (
    <Section id="learning" eyebrow="Currently Learning" title="What's next." tone="subtle">
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal className="rounded-2xl border border-line bg-surface p-6 sm:p-9">
          <div className="mb-5 flex items-center justify-between gap-3">
            <h3 className="text-lg font-semibold text-fg">{learning.aws.title}</h3>
            <span className="rounded-full border border-line px-3 py-1 text-xs font-medium text-muted">
              Currently learning
            </span>
          </div>
          <ul className="flex flex-wrap gap-2" aria-label="AWS topics">
            {learning.aws.items.map((i) => (
              <li key={i} className="rounded-full bg-subtle px-3 py-1 text-sm font-medium text-fg">
                {i}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-muted">{learning.aws.note}</p>
        </Reveal>

        <Reveal className="rounded-2xl border border-line bg-surface p-6 sm:p-9">
          <h3 className="mb-5 flex items-center gap-2 text-lg font-semibold text-fg">
            <BookOpen size={18} aria-hidden="true" className="text-muted" />
            Other interests
          </h3>
          <ul className="divide-y divide-line">
            {learning.interests.map((i) => (
              <li key={i} className="py-3 text-base text-fg first:pt-0 last:pb-0">
                {i}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
