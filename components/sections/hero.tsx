"use client";

import { useLanguage } from "@/components/i18n/language-provider";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="inicio"
      className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 15% 20%, color-mix(in srgb, var(--lavender) 22%, transparent), transparent 55%), radial-gradient(ellipse 70% 50% at 85% 10%, color-mix(in srgb, var(--steel) 18%, transparent), transparent 50%)",
        }}
      />

      <div className="mx-auto max-w-5xl">
        <p className="font-[family-name:var(--font-display)] text-5xl font-semibold tracking-tight text-ink sm:text-6xl md:text-7xl">
          {t.hero.brand}
        </p>
        <h1 className="mt-5 max-w-xl text-xl font-medium leading-snug text-ink sm:text-2xl">
          {t.hero.headline}
        </h1>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
          {t.hero.support}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-md bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-90"
          >
            {t.hero.ctaContact}
          </a>
          <a
            href="#trabajo"
            className="inline-flex items-center justify-center rounded-md border border-line bg-paper/60 px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-lavender/50"
          >
            {t.hero.ctaWork}
          </a>
        </div>
        <div
          aria-hidden
          className="mt-14 h-px w-24"
          style={{ background: "var(--brand-gradient)" }}
        />
      </div>
    </section>
  );
}
