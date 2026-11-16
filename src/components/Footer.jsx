export default function Footer({ name }) {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {name}
        </p>
        <a href="#top" className="transition-colors hover:text-fg">
          Back to top
        </a>
      </div>
    </footer>
  );
}
