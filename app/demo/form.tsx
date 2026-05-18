"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const VERTICALS = [
  "NBFC / Collections",
  "Retail & Commerce",
  "Influencer / Creator Growth",
  "Winery / Distributor",
  "Sales Productivity",
  "Customer 360",
  "Other",
];

const ROLES = [
  "CEO / Founder",
  "CDAO / Head of Data",
  "COO / Operations",
  "Business / Function head",
  "Revenue / Sales leadership",
  "Risk / Collections",
  "Other",
];

const CONTACT_EMAIL = "hello@datacentriq.ai";

export function DemoForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = `Demo request · ${data.get("company") || data.get("name") || "DatacentrIQ"}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Company: ${data.get("company")}`,
      `Role: ${data.get("role")}`,
      `Vertical / decision domain: ${data.get("vertical")}`,
      ``,
      `Context:`,
      `${data.get("message")}`,
    ].join("\n");

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
    // small delay so the success state is visible before the mail client opens
    setTimeout(() => {
      window.location.href = mailto;
    }, 150);
  }

  return (
    <div className="card-elev rounded-2xl p-7 sm:p-8 relative">
      <div className="flex items-center justify-between mb-6">
        <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-ink-mute">
          Request a demo
        </span>
        <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] uppercase text-good">
          <span className="size-1.5 rounded-full bg-good" /> Replies within 24h
        </span>
      </div>

      {submitted ? (
        <div className="flex flex-col items-start gap-4 py-6">
          <CheckCircle2 size={28} className="text-good" strokeWidth={1.5} />
          <div>
            <h3 className="font-display text-[24px] tracking-tight text-ink">
              Opening your mail client…
            </h3>
            <p className="mt-2 text-[13.5px] leading-[1.6] text-ink-dim max-w-sm">
              If nothing happens, email us directly at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-brand underline underline-offset-2"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </div>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-2 font-mono text-[11px] tracking-[0.2em] uppercase text-ink-dim hover:text-ink"
          >
            ← Send another request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Field label="Name" name="name" required placeholder="Manjul Pathak" />
          <Field
            label="Work email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
          />
          <Field label="Company" name="company" required placeholder="Acme Capital" />
          <Select label="Role" name="role" options={ROLES} required />
          <Select
            label="Vertical / decision domain"
            name="vertical"
            options={VERTICALS}
            required
          />
          <TextArea
            label="What decision domain is this for?"
            name="message"
            placeholder="e.g., We want to improve recovery in the 30+ DPD bucket across 240 branches…"
            rows={4}
          />

          <button
            type="submit"
            className="mt-2 btn-primary inline-flex items-center justify-center gap-2 h-12 rounded-md font-medium tracking-tight"
          >
            <span>Request a demo</span>
            <Send size={14} strokeWidth={1.75} />
          </button>

          <p className="mt-1 font-mono text-[10px] tracking-[0.2em] uppercase text-ink-mute leading-relaxed">
            Or email us directly ·{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-ink-dim hover:text-ink"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </form>
      )}
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink-mute">
        {label}
        {required && <span className="text-accent ml-1.5">·</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className={inputClass}
      />
    </label>
  );
}

function Select({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink-mute">
        {label}
        {required && <span className="text-accent ml-1.5">·</span>}
      </span>
      <div className="relative">
        <select
          name={name}
          required={required}
          defaultValue=""
          className={cn(inputClass, "appearance-none pr-9")}
        >
          <option value="" disabled>
            Select…
          </option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <span
          aria-hidden
          className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-mute pointer-events-none font-mono text-[10px]"
        >
          ▾
        </span>
      </div>
    </label>
  );
}

function TextArea({
  label,
  name,
  placeholder,
  rows = 4,
}: {
  label: string;
  name: string;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink-mute">
        {label}
      </span>
      <textarea
        name={name}
        rows={rows}
        placeholder={placeholder}
        className={cn(inputClass, "py-3 leading-[1.55] resize-none")}
      />
    </label>
  );
}

const inputClass = cn(
  "w-full h-11 rounded-md bg-bg-elev/60 border border-border px-3.5 text-[14px] text-ink",
  "placeholder:text-ink-mute/70 outline-none transition-colors",
  "focus:border-brand/70 focus:bg-bg-elev/80"
);
