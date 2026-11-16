import Section, { Reveal } from "./Section";

export default function About({ about }) {
  return (
    <Section id="about" eyebrow="About" title="Building reliable systems, from data to models.">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
        <Reveal className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>
        <Reveal>
          <h3 className="mb-4 text-sm font-medium text-muted">Looking for roles in</h3>
          <ul className="divide-y divide-line border-y border-line">
            {about.interests.map((i) => (
              <li key={i} className="py-3.5 text-base font-medium text-fg">
                {i}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
