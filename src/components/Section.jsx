import useReveal from "../hooks/useReveal";

export function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const ref = useReveal();
  return (
    <Tag ref={ref} className={`reveal ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

export default function Section({ id, eyebrow, title, children, tone = "bg" }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={tone === "subtle" ? "bg-subtle" : ""}
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="mb-12 max-w-2xl sm:mb-16">
          <p className="mb-3 text-sm font-medium text-muted">{eyebrow}</p>
          <h2
            id={`${id}-title`}
            className="text-3xl font-semibold tracking-tight text-fg sm:text-5xl"
          >
            {title}
          </h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
