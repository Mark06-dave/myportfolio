import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-4 z-10 rounded-2xl border border-[var(--border)] bg-[var(--card)]/75 backdrop-blur shadow-sm">
      <nav className="flex flex-col items-start justify-between gap-4 p-5 text-sm font-medium uppercase tracking-wide text-[var(--muted-foreground)] md:flex-row md:items-center">
        <Link href="/" className="flex items-center gap-2 text-[var(--foreground)]">
          <SparkIcon />
          <span>Mark Dave Montecillo</span>
        </Link>

        <div className="flex flex-wrap items-center gap-3">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-[var(--primary)]"
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

function SparkIcon() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  );
}

