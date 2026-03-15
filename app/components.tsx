"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";

type CardItem = {
  title: string;
  description?: string;
  bio?: string;
  photo?: string;
};

type StepItem = {
  title: string;
  description: string;
};

type Option = {
  value: string;
  label: string;
};

type InputField = {
  name: string;
  label: string;
  type?: string;
  placeholder: string;
};

type TextareaField = {
  name: string;
  label: string;
  placeholder: string;
  rows?: number;
};

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <NavBar />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0f1722]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Campfire Adventures logo" width={42} height={42} className="h-10 w-10 rounded-full bg-white/90 object-contain p-1" />
          <div>
            <p className="font-heading text-sm font-bold uppercase tracking-[0.22em] text-white">Campfire Adventures</p>
            <p className="text-xs text-white/70">Acquiring Communities Worth Keeping</p>
          </div>
        </Link>
        <nav className="flex items-center gap-5 text-sm font-medium text-white/80">
          <Link href="/" className="transition hover:text-[#e87d2b]">Home</Link>
          <Link href="/about" className="transition hover:text-[#e87d2b]">About</Link>
          <Link href="/investors" className="transition hover:text-[#e87d2b]">Investors</Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#101923]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="Campfire Adventures logo" width={56} height={56} className="h-14 w-14 object-contain" />
          <div>
            <p className="font-heading text-lg font-bold text-white">Campfire Adventures</p>
            <p className="text-sm text-white/70">Acquiring Communities Worth Keeping</p>
          </div>
        </div>
        <div className="flex gap-5 text-sm text-white/70">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/investors">Investors</Link>
        </div>
      </div>
    </footer>
  );
}

export function HeroSection({
  title,
  subtitle,
  cta,
  ctaHref,
  backgroundClass,
}: {
  title: string;
  subtitle: string;
  cta?: string;
  ctaHref?: string;
  backgroundClass: string;
}) {
  return (
    <section className={`relative overflow-hidden ${backgroundClass}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(232,125,43,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(42,122,107,0.2),transparent_26%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
        <Image src="/logo.png" alt="Campfire Adventures badge logo" width={220} height={220} priority className="mb-8 h-auto w-[160px] sm:w-[220px]" />
        <h1 className="max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">{subtitle}</p>
        {cta && ctaHref ? (
          <a href={ctaHref} className="mt-8 rounded-full bg-[#e87d2b] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#ff9345]">
            {cta}
          </a>
        ) : null}
      </div>
    </section>
  );
}

export function Section({ title, eyebrow, children }: { title: string; eyebrow?: string; children: ReactNode }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#e87d2b]">{eyebrow}</p> : null}
      <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}

export function CriteriaGrid({ items }: { items: CardItem[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((item) => (
        <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
          <div className="mb-4 h-1.5 w-14 rounded-full bg-[#e87d2b]" />
          <h3 className="text-2xl font-bold text-white">{item.title}</h3>
          {item.description ? <p className="mt-3 text-sm leading-7 text-white/70">{item.description}</p> : null}
        </div>
      ))}
    </div>
  );
}

export function StepsGrid({ steps }: { steps: StepItem[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {steps.map((step, index) => (
        <div key={step.title} className="rounded-3xl border border-white/10 bg-[#13202d] p-6">
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#2a7a6b] text-lg font-bold text-white">{index + 1}</div>
          <h3 className="text-xl font-bold text-white">{step.title}</h3>
          <p className="mt-3 text-sm leading-7 text-white/75">{step.description}</p>
        </div>
      ))}
    </div>
  );
}

export function InfoGrid({ items }: { items: CardItem[] }) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-bold text-white">{item.title}</h3>
          {item.description ? <p className="mt-3 text-sm leading-7 text-white/75">{item.description}</p> : null}
        </div>
      ))}
    </div>
  );
}

export function TeamGrid({ members }: { members: CardItem[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {members.map((member) => (
        <div key={member.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="mb-4">
            {member.photo ? (
              <Image
                src={member.photo}
                alt={member.title}
                width={72}
                height={72}
                className="h-18 w-18 rounded-full object-cover"
              />
            ) : (
              <div className="h-16 w-16 rounded-full bg-[#2a7a6b]/30" />
            )}
          </div>
          <h3 className="text-xl font-bold text-white">{member.title}</h3>
          {member.description ? <p className="mt-2 text-sm font-semibold text-[#e87d2b]">{member.description}</p> : null}
          {member.bio ? <p className="mt-3 text-sm leading-7 text-white/70">{member.bio}</p> : null}
        </div>
      ))}
    </div>
  );
}

export function LeadForm({
  title,
  description,
  fields,
  textarea,
  select,
  submitLabel,
  successMessage,
}: {
  title: string;
  description: string;
  fields: InputField[];
  textarea: TextareaField;
  select?: {
    name: string;
    label: string;
    options: Option[];
  };
  submitLabel: string;
  successMessage: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="rounded-[2rem] border border-white/10 bg-[#111c27] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.24)] sm:p-8">
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-white/75">{description}</p>

      {submitted ? (
        <div className="mt-8 rounded-2xl border border-[#2a7a6b] bg-[#2a7a6b]/15 p-6 text-white">
          <p className="font-semibold">Thank you.</p>
          <p className="mt-2 text-sm text-white/80">{successMessage}</p>
        </div>
      ) : (
        <form
          className="mt-8 grid gap-5 md:grid-cols-2"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          {fields.map((field) => (
            <label key={field.name} className="flex flex-col gap-2 text-sm text-white/80">
              {field.label}
              <input
                required
                type={field.type ?? "text"}
                name={field.name}
                placeholder={field.placeholder}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/35 outline-none transition focus:border-[#e87d2b]"
              />
            </label>
          ))}

          {select ? (
            <label className="flex flex-col gap-2 text-sm text-white/80">
              {select.label}
              <select
                required
                name={select.name}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[#e87d2b]"
                defaultValue=""
              >
                <option value="" disabled className="text-slate-900">
                  Select one
                </option>
                {select.options.map((option) => (
                  <option key={option.value} value={option.value} className="text-slate-900">
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          ) : null}

          <label className="flex flex-col gap-2 text-sm text-white/80 md:col-span-2">
            {textarea.label}
            <textarea
              required
              name={textarea.name}
              rows={textarea.rows ?? 5}
              placeholder={textarea.placeholder}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/35 outline-none transition focus:border-[#e87d2b]"
            />
          </label>

          <div className="md:col-span-2">
            <button type="submit" className="rounded-full bg-[#e87d2b] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#ff9345]">
              {submitLabel}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
