import Section, { Reveal } from "./Section";

export default function Skills({ groups }) {
  return (
    <Section id="skills" eyebrow="Technical Skills" title="The tools I work with." tone="subtle">
      <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
        {groups.map((g) => (
          <Reveal key={g.title} className="border-t border-line pt-6">
            <h3 className="mb-4 text-base font-semibold text-fg">{g.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line bg-surface px-3 py-1 text-sm text-fg"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
