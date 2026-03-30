"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const skills = [
  { label: "HTML", icon: "⌘" },
  { label: "CSS", icon: "〰" },
  { label: "JavaScript", icon: "{}" },
  { label: "React", icon: "⚛︎" },
  { label: "Next.js", icon: "▢" },
  { label: "Figma", icon: "✏︎" },
];

const fcfsTimeline = [
  { id: "P1", duration: 3, color: "bg-[oklch(0.5106_0.2301_276.9656)]" },
  { id: "P2", duration: 5, color: "bg-[oklch(0.7038_0.1230_182.5025)]" },
  { id: "P3", duration: 2, color: "bg-[oklch(0.7686_0.1647_70.0804)]" },
  { id: "P4", duration: 4, color: "bg-[oklch(0.6559_0.2118_354.3084)]" },
];

const contactLinks = [
  {
    label: "Email",
    value: "montecillomarkdave3@gmail.com",
    href: "mailto:montecillomarkdave3@gmail.com",
    icon: MailIcon,
    external: false,
  },
  {
    label: "GitHub",
    value: "github.com/Mark06-dave",
    href: "https://github.com/Mark06-dave",
    icon: GithubIcon,
    external: true,
  },
];

const MotionSection = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.section
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true, amount: 0.4 }}
    className="space-y-6"
  >
    {children}
  </motion.section>
);

export default function Home() {
  const fcfsTotal = fcfsTimeline.reduce((acc, slot) => acc + slot.duration, 0);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto flex max-w-5xl flex-col gap-20 px-6 py-10 sm:px-10 lg:px-12">
        <motion.header
          className="sticky top-4 z-10 rounded-2xl border border-[var(--border)] bg-[var(--card)]/75 backdrop-blur shadow-sm"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <nav className="flex flex-col items-start justify-between gap-4 p-5 text-sm font-medium uppercase tracking-wide text-[var(--muted-foreground)] md:flex-row md:items-center">
            <div className="flex items-center gap-2 text-[var(--foreground)]">
              <SparkIcon />
              <span>Mark Dave Montecillo</span>
            </div>
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
            </div>
          </nav>
        </motion.header>

        <main className="space-y-24">
          <MotionSection delay={0.1}>
            <section
              id="hero"
              className="grid gap-8 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-sm lg:grid-cols-[2fr_1fr]"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-20 w-20 overflow-hidden rounded-2xl border border-[var(--border)] shadow-sm sm:h-28 sm:w-28">
                    <Image
                      src="/profile.jpg"
                      alt="Mark Dave Montecillo"
                      width={160}
                      height={160}
                      className="h-full w-full object-cover"
                      priority
                    />
                  </div>
                  <div className="text-sm text-[var(--muted-foreground)]">
                    <p className="text-xs uppercase tracking-wide">Mark Dave</p>
                    <p>Montecillo · BSIT 3rd Year Student</p>
                  </div>
                </div>
                <p className="text-xs uppercase tracking-wide text-[var(--muted-foreground)]">
                  BS Information Technology · 3rd Year
                </p>
                <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                  Designing calm, minimal experiences with reliable code.
                </h1>
                <p className="max-w-2xl text-base text-[var(--muted-foreground)]">
                  I’m Mark Dave Montecillo, a BSIT student focused on front-end
                  engineering and thoughtful product systems. I enjoy crafting
                  fluid interfaces with Next.js, React, and clean design tokens.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <Link
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-[var(--primary-foreground)] transition hover:opacity-90"
                  >
                    View Projects
                    <ArrowIcon />
                  </Link>
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 text-[var(--foreground)] transition hover:border-[var(--primary)]"
                  >
                    Connect
                    <DotIcon />
                  </Link>
                  <Link
                    href="/projects/fcfs"
                    className="inline-flex items-center gap-2 rounded-full border border-dashed border-[var(--border)] px-6 py-3 text-[var(--foreground)] transition hover:border-[var(--primary)]"
                  >
                    FCFS Simulator
                    <ArrowIcon />
                  </Link>
                  <button
                    type="button"
                    onClick={() =>
                      window.open("/resume.pdf", "_blank", "noopener,noreferrer")
                    }
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 text-[var(--foreground)] transition hover:border-[var(--primary)]"
                  >
                    View Résumé
                    <ArrowIcon />
                  </button>
                </div>
              </div>
              <div className="grid gap-4 rounded-2xl border border-dashed border-[var(--border)] p-6 text-sm text-[var(--muted-foreground)]">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wide">Current focus</p>
                  <p className="text-base text-[var(--foreground)]">
                    Minimal portfolio systems & FCFS visualizations
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wide">Stack</p>
                  <p>React · Next.js · Tailwind · Framer Motion · Figma</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wide">Availability</p>
                  <p>Open for collaboration · First come, first served</p>
                </div>
              </div>
            </section>
          </MotionSection>

          <MotionSection delay={0.15}>
            <section
              id="about"
              className="grid gap-8 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 md:grid-cols-2"
            >
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-wide text-[var(--muted-foreground)]">
                  About me
                </p>
                <h2 className="text-2xl font-semibold tracking-tight">
                  Building interfaces with intent
                </h2>
                <p className="text-sm text-[var(--muted-foreground)]">
                  Clean UI, quiet color, and repeatable systems guide my work.
                  I keep copy short, components reusable, and flows focused.
                </p>
              </div>
              <div className="space-y-4 text-sm text-[var(--muted-foreground)]">
                <p>
                  As a 3rd year BSIT student, I explore how motion and system
                  thinking can make learning apps clearer. My tools of choice are
                  React, Next.js, CSS, and Figma for rapid experiments.
                </p>
                <p>
                  I’m currently prototyping CPU scheduling visualizers and micro
                  sites that highlight accessibility and calm typography.
                </p>
              </div>
            </section>
          </MotionSection>

          <MotionSection delay={0.2}>
            <section
              id="skills"
              className="space-y-6 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8"
            >
              <div className="flex flex-col gap-2">
                <p className="text-xs uppercase tracking-wide text-[var(--muted-foreground)]">
                  Skill set
                </p>
                <h2 className="text-2xl font-semibold tracking-tight">
                  Calm, minimal toolkit
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {skills.map((skill) => (
                  <div
                    key={skill.label}
                    className="flex items-center gap-3 rounded-2xl border border-dashed border-[var(--border)] px-4 py-3 text-sm"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--muted)] text-base font-semibold text-[var(--foreground)]">
                      {skill.icon}
                    </span>
                    <span>{skill.label}</span>
                  </div>
                ))}
              </div>
            </section>
          </MotionSection>

          <MotionSection delay={0.25}>
            <section
              id="projects"
              className="space-y-6 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8"
            >
              <div className="flex flex-col gap-2">
                <p className="text-xs uppercase tracking-wide text-[var(--muted-foreground)]">
                  Projects
                </p>
                <h2 className="text-2xl font-semibold tracking-tight">
                  First Come First Serve CPU Scheduling
                </h2>
              </div>
              <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="space-y-4">
                  <p className="text-sm text-[var(--muted-foreground)]">
                    A scheduling visualizer that highlights FCFS execution with a
                    responsive Gantt chart. Built in Next.js with React state,
                    emphasizing readable timelines and zero-noise interactions.
                  </p>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    Each process bar scales according to burst time, giving a
                    quick scan of completion order while staying minimal.
                  </p>
                  <Link
                    href="/projects/fcfs"
                    className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--border)] px-5 py-2 text-xs font-medium uppercase tracking-tight text-[var(--foreground)] transition hover:border-[var(--primary)]"
                  >
                    Open interactive page
                    <ArrowIcon />
                  </Link>
                </div>
                <div className="rounded-2xl border border-dashed border-[var(--border)] p-4">
                  <p className="text-xs uppercase tracking-wide text-[var(--muted-foreground)]">
                    Gantt chart
                  </p>
                  <div className="mt-4 flex flex-col gap-3 text-xs font-mono text-[var(--muted-foreground)]">
                    <div className="flex items-center gap-2 text-[var(--foreground)]">
                      <LayersIcon />
                      <span>FCFS order · First come, first served</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex gap-2 rounded-full bg-[var(--muted)] p-2">
                        {fcfsTimeline.map((slot) => (
                          <div
                            key={slot.id}
                            className={`flex items-center justify-center rounded-full px-3 py-2 text-xs font-semibold text-[var(--foreground)] ${slot.color}`}
                            style={{
                              flex: slot.duration,
                            }}
                          >
                            {slot.id}
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between text-[var(--muted-foreground)]">
                        <span>0</span>
                        <span>{fcfsTotal}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </MotionSection>

          <MotionSection delay={0.3}>
            <section
              id="contact"
              className="space-y-6 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8"
            >
              <div className="flex flex-col gap-2">
                <p className="text-xs uppercase tracking-wide text-[var(--muted-foreground)]">
                  Contact
                </p>
                <h2 className="text-2xl font-semibold tracking-tight">
                  Let’s build something minimal
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {contactLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    className="group flex flex-col gap-2 rounded-2xl border border-[var(--border)] p-4 transition hover:border-[var(--primary)]"
                  >
                    <div className="flex items-center gap-2 text-sm uppercase tracking-tight text-[var(--muted-foreground)]">
                      <item.icon />
                      {item.label}
                    </div>
                    <p className="text-base font-medium text-[var(--foreground)] group-hover:text-[var(--primary)]">
                      {item.value}
                    </p>
                  </a>
                ))}
              </div>
            </section>
          </MotionSection>
        </main>

        <footer className="pb-8 text-center text-xs text-[var(--muted-foreground)]">
          © {new Date().getFullYear()} Mark Dave Montecillo · Minimal systems,
          clear stories.
        </footer>
      </div>
    </div>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-3.87a3.37 3.37 0 0 0-.94-2.6c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 4.77 5.07 5.07 0 0 0 18.91 1S17.73.65 15 2.48a13.38 13.38 0 0 0-6 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 8.53c0 5.42 3.3 6.61 6.44 7a3.38 3.38 0 0 0-.95 2.61V22" />
    </svg>
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
    <svg
      aria-hidden="true"
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16.5 9.4 12 12 7.5 9.4" />
      <path d="M3 9l9-5 9 5-9 5-9-5z" />
      <path d="M3 15l9 5 9-5" />
    </svg>
  );
}
