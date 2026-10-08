"use client";

import { useLanguage } from "@/components/i18n/language-provider";

export function About() {
  const { t } = useLanguage();
  const [opening, middle, closing] = t.about.paragraphs;

  return (
    <section
      id="sobre-mi"
      className="about relative scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(12rem,0.32fr)_minmax(0,1fr)] lg:gap-16 lg:items-start">
        <div className="lg:sticky lg:top-28">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {t.about.title}
          </h2>
          <div
            aria-hidden
            className="mt-5 h-1 w-16 rounded-full"
            style={{ background: "var(--brand-gradient)" }}
          />
        </div>

        <div className="relative max-w-2xl border-l border-lavender/25 pl-6 sm:pl-10">
          <p className="font-[family-name:var(--font-display)] text-xl font-medium leading-snug tracking-tight text-ink sm:text-2xl sm:leading-snug">
            {opening}
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-[1.05rem] sm:leading-8">
            {middle}
          </p>
          <p className="mt-8">
            <a
              href="#contacto"
              className="font-[family-name:var(--font-display)] text-lg font-medium text-lavender underline decoration-lavender/30 underline-offset-4 transition-colors hover:text-[#3ec4f0] hover:decoration-[#3ec4f0]/60"
            >
              {closing}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
