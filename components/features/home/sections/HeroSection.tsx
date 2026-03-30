import Image from "next/image";
import Link from "next/link";
import { MotionSection } from "../../../common/MotionSection";

export function HeroSection() {
  return (
    <MotionSection delay={0.1}>
      <section id="hero" className="space-y-6">
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-sm">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.35fr]">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-24 w-24 overflow-hidden rounded-2xl border border-[var(--border)] shadow-sm sm:h-32 sm:w-32">
                  <Image
                    src="/profile.jpg"
                    alt="Mark Dave Montecillo"
                    width={200}
                    height={200}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-wide text-[var(--muted-foreground)]">
                    BSIT · 3rd year
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/#projects"
                      className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-5 py-2 text-xs font-semibold uppercase tracking-wide text-[var(--primary-foreground)] transition hover:opacity-90"
                    >
                      Projects
                    </Link>
                    <Link
                      href="/resume.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-[var(--border)] px-5 py-2 text-xs font-semibold uppercase tracking-wide text-[var(--foreground)] transition hover:border-[var(--primary)]"
                    >
                      Résumé
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <p className="text-xs uppercase tracking-wide text-[var(--muted-foreground)]">
                Home
              </p>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Calm UI. Solid engineering.
              </h1>
              <p className="max-w-2xl text-base text-[var(--muted-foreground)]">
                I&apos;m Mark Dave Montecillo. I build minimal interfaces with Next.js + React and
                keep systems consistent with clean design tokens.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/#about"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 text-sm text-[var(--foreground)] transition hover:border-[var(--primary)]"
                >
                  About <DotIcon />
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-dashed border-[var(--border)] px-6 py-3 text-sm text-[var(--foreground)] transition hover:border-[var(--primary)]"
                >
                  Contact <ArrowIcon />
                </Link>
                <Link
                  href="/projects/fcfs"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 text-sm text-[var(--foreground)] transition hover:border-[var(--primary)]"
                >
                  FCFS Simulator <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
          <div className="grid gap-4 lg:grid-cols-[1fr_1fr_1fr]">
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "React", value: "UI" },
                { label: "Next.js", value: "App" },
                { label: "Figma", value: "Design" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-dashed border-[var(--border)] bg-[var(--muted)] px-4 py-4"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--muted-foreground)]">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-[var(--border)] p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--muted-foreground)]">
                Featured project
              </p>
              <p className="mt-2 text-lg font-semibold tracking-tight">
                FCFS Scheduling Visualizer
              </p>
              <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                A simple way to see execution order, waiting, and turnaround with a responsive
                Gantt chart.
              </p>
              <Link
                href="/projects/fcfs"
                className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--secondary)] px-5 py-2 text-xs font-semibold uppercase tracking-wide text-[var(--secondary-foreground)] transition hover:opacity-90"
              >
                Open <ArrowIcon />
              </Link>
            </div>

            <div className="rounded-2xl border border-[var(--border)] p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--muted-foreground)]">
                Quick info
              </p>
              <div className="mt-3 space-y-2 text-sm text-[var(--muted-foreground)]">
                <p>
                  <span className="text-[var(--foreground)]">Focus:</span> front-end systems +
                  visual learning tools
                </p>
                <p>
                  <span className="text-[var(--foreground)]">Stack:</span> React · Next.js ·
                  Tailwind · Motion
                </p>
                <p>
                  <span className="text-[var(--foreground)]">Status:</span> open for
                  collaboration
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MotionSection>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );
}

function DotIcon() {
  return (
    <svg aria-hidden="true" width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

