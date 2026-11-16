import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "./BrandIcons";
import Section, { Reveal } from "./Section";

export default function Contact({ profile }) {
  const links = [
    { label: "GitHub", href: profile.links.github, Icon: GithubIcon },
    { label: "LinkedIn", href: profile.links.linkedin, Icon: LinkedinIcon },
    { label: "LeetCode", href: profile.links.leetcode, Icon: LeetcodeIcon },
  ];

  return (
    <Section id="contact" eyebrow="Contact" title="Let's talk.">
      <Reveal className="max-w-2xl">
        <p className="text-base leading-relaxed text-muted sm:text-lg">
          I'm open to software engineering, backend, AI/ML and data engineering opportunities. The
          best way to reach me is email.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-flex items-center gap-2.5 break-all text-xl font-semibold tracking-tight text-fg transition-opacity hover:opacity-70 sm:text-3xl"
        >
          <Mail size={26} aria-hidden="true" className="shrink-0" />
          {profile.email}
        </a>

        <ul className="mt-10 flex flex-wrap gap-3">
          {links.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-fg transition-colors hover:bg-subtle"
              >
                <Icon size={16} />
                {label}
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
