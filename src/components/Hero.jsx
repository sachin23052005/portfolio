import { useState } from "react";
import { ArrowDown, Download, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "./BrandIcons";
import { Reveal } from "./Section";

function Photo({ src, name }) {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .join("");

  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-line bg-subtle">
      {failed ? (
        <div
          role="img"
          aria-label={`${name} — photo placeholder`}
          className="flex h-full w-full items-center justify-center text-6xl font-semibold tracking-tight text-muted"
        >
          {initials}
        </div>
      ) : (
        <img
          src={src}
          alt={`Portrait of ${name}`}
          width="480"
          height="600"
          fetchPriority="high"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover object-top"
        />
      )}
    </div>
  );
}

export default function Hero({ profile, stats }) {
  const social = [
    { label: "GitHub", href: profile.links.github, Icon: GithubIcon },
    { label: "LinkedIn", href: profile.links.linkedin, Icon: LinkedinIcon },
    { label: "LeetCode", href: profile.links.leetcode, Icon: LeetcodeIcon },
  ];

  return (
    <section id="top" aria-labelledby="hero-title" className="pt-14">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[1.25fr_1fr] lg:gap-16 lg:pb-28 lg:pt-28">
        <Reveal className="order-2 lg:order-1">
          <p className="mb-5 inline-flex items-center gap-1.5 text-sm font-medium text-muted">
            <MapPin size={15} aria-hidden="true" />
            {profile.location}
          </p>
          <h1
            id="hero-title"
            className="text-5xl font-semibold leading-[1.05] tracking-tight text-fg sm:text-7xl"
          >
            {profile.name}
          </h1>
          <p className="mt-5 text-lg font-medium text-fg sm:text-xl">{profile.headline}</p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.intro}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-80"
            >
              <Download size={16} aria-hidden="true" />
              Download Resume
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:bg-subtle"
            >
              <Mail size={16} aria-hidden="true" />
              Get in touch
            </a>
          </div>

          <ul className="mt-8 flex items-center gap-1" aria-label="Social links">
            {social.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} (opens in a new tab)`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:bg-subtle hover:text-fg"
                >
                  <Icon size={20} />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="order-1 lg:order-2">
          <Photo src={profile.photo} name={profile.name} />
        </Reveal>
      </div>

      <Reveal className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-20">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col-reverse bg-surface px-5 py-6 sm:px-6 sm:py-7"
            >
              <dt className="mt-1 text-xs text-muted sm:text-sm">{s.label}</dt>
              <dd className="text-2xl font-semibold tracking-tight text-fg sm:text-4xl">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
        <a
          href="#about"
          className="mt-10 hidden items-center gap-2 text-sm text-muted transition-colors hover:text-fg sm:inline-flex"
        >
          <ArrowDown size={16} aria-hidden="true" />
          Scroll to explore
        </a>
      </Reveal>
    </section>
  );
}
