import Image from "next/image";
import { MotionSection } from "../../../common/MotionSection";

export function AboutSection() {
  return (
    <MotionSection delay={0.15}>
      <section
        id="about"
        className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-sm"
      >
        <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-wide text-[var(--muted-foreground)]">
              About
            </p>
            <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--muted)]">
              <Image
                src="/profile.jpg"
                alt="Profile photo"
                width={640}
                height={640}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-5">
            <div className="rounded-2xl border border-dashed border-[var(--border)] p-5">
              <h2 className="text-2xl font-semibold tracking-tight">
                Building interfaces with intent
              </h2>
              <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                Clean UI, quiet color, and repeatable systems guide my work. I keep copy short,
                components reusable, and flows focused.
              </p>
            </div>
            <div className="space-y-3 text-sm text-[var(--muted-foreground)]">
              <p>
                As a 3rd year BSIT student, I explore how motion and system thinking can make
                learning apps clearer.
              </p>
              <p>
                I’m currently prototyping CPU scheduling visualizers and micro sites that
                highlight accessibility and calm typography.
              </p>
              <p>Tools I enjoy: React, Next.js, Tailwind, Framer Motion, and Figma.</p>
            </div>
          </div>
        </div>
      </section>
    </MotionSection>
  );
}

