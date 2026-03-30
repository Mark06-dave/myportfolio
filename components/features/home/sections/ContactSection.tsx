"use client";

import { useMemo, useState } from "react";
import { MotionSection } from "../../../common/MotionSection";
import { contactLinks } from "../homeData";

export function ContactSection() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const mailtoHref = useMemo(() => {
    const subject = `Portfolio inquiry from ${contactForm.name || "Someone"}`;
    const body = [
      `Name: ${contactForm.name || "-"}`,
      `Email: ${contactForm.email || "-"}`,
      "",
      contactForm.message || "",
    ].join("\n");

    return `mailto:montecillomarkdave3@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }, [contactForm.email, contactForm.message, contactForm.name]);

  return (
    <MotionSection delay={0.3}>
      <section
        id="contact"
        className="space-y-6 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-sm"
      >
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-wide text-[var(--muted-foreground)]">
            Contact
          </p>
          <h2 className="text-2xl font-semibold tracking-tight">Message me</h2>
        </div>

        <form
          className="space-y-4 rounded-2xl border border-[var(--border)] p-5"
          onSubmit={(event) => {
            event.preventDefault();
            window.open(mailtoHref, "_self");
          }}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Field
              label="Name"
              value={contactForm.name}
              onChange={(value) => setContactForm((prev) => ({ ...prev, name: value }))}
              placeholder="Your name"
            />
            <Field
              label="Email"
              value={contactForm.email}
              onChange={(value) => setContactForm((prev) => ({ ...prev, email: value }))}
              placeholder="you@example.com"
              type="email"
            />
          </div>
          <Field
            label="Message"
            value={contactForm.message}
            onChange={(value) => setContactForm((prev) => ({ ...prev, message: value }))}
            placeholder="What would you like to build?"
            multiline
          />
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-2xl bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-[var(--primary-foreground)] transition hover:opacity-90"
            >
              Send <ArrowIcon />
            </button>
            <p className="text-xs text-[var(--muted-foreground)]">
              This opens your email app (no backend yet).
            </p>
          </div>
        </form>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {contactLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              className="group flex items-center justify-between gap-3 rounded-2xl border border-[var(--border)] px-4 py-4 transition hover:border-[var(--primary)]"
            >
              <div className="flex items-center gap-2">
                <MailIcon />
                <span className="text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)]">
                  {item.label}
                </span>
              </div>
              <span className="text-xs text-[var(--muted-foreground)] group-hover:text-[var(--primary)]">
                {item.external ? "↗" : "→"}
              </span>
            </a>
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

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  multiline = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  multiline?: boolean;
}) {
  const baseClass =
    "w-full rounded-2xl border border-[var(--border)] bg-transparent px-4 py-3 text-sm text-[var(--foreground)] outline-none transition focus:border-[var(--primary)]";

  return (
    <div className="grid gap-2">
      <label className="text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)]">
        {label}
      </label>
      {multiline ? (
        <textarea
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          rows={5}
          className={`${baseClass} resize-y`}
        />
      ) : (
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          type={type}
          className={baseClass}
        />
      )}
    </div>
  );
}

