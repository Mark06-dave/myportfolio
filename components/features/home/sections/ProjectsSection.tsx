import Link from "next/link";
import { MotionSection } from "../../../common/MotionSection";
import { homeProjects } from "../homeData";

export function ProjectsSection() {
  return (
    <MotionSection delay={0.25}>
      <section
        id="projects"
        className="space-y-6 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-sm"
      >
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-wide text-[var(--muted-foreground)]">
            Projects
          </p>
          <h2 className="text-2xl font-semibold tracking-tight">Selected</h2>
          <div className="h-px w-full bg-[var(--border)]" />
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {homeProjects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 transition hover:border-[var(--primary)]"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-base font-semibold tracking-tight">{project.title}</p>
                <span className="rounded-full bg-[var(--muted)] px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-[var(--muted-foreground)]">
                  {project.badge}
                </span>
              </div>
              <p className="mt-2 text-sm text-[var(--muted-foreground)]">{project.description}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[var(--foreground)]">
                Open <ArrowIcon />
              </div>
            </Link>
          ))}
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

