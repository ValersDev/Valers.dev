"use client";

import { useLanguage } from "@/components/i18n/language-provider";

export function Background() {
  const { t } = useLanguage();

  return (
    <section
      id="trayectoria"
      className="relative scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(12rem,0.32fr)_minmax(0,1fr)] lg:items-start lg:gap-16">
        <div className="lg:sticky lg:top-28">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {t.background.title}
          </h2>
          <div
            aria-hidden
            className="mt-5 h-1 w-16 rounded-full"
            style={{ background: "var(--brand-gradient)" }}
          />
        </div>

        <ol className="relative max-w-2xl border-l border-lavender/25 pl-6 sm:pl-10">
          {t.background.entries.map((entry) => {
            const linkLabel =
              "linkKey" in entry && entry.linkKey
                ? t.background[entry.linkKey]
                : null;

            return (
              <li key={entry.period + entry.title} className="relative pb-12 last:pb-0">
                <span
                  aria-hidden
                  className="absolute top-1.5 -left-6 size-2.5 -translate-x-1/2 rounded-full bg-lavender sm:-left-10"
                />
                <p className="font-[family-name:var(--font-mono)] text-xs tracking-wide text-steel">
                  {entry.period}
                </p>
                <h3 className="mt-2 bg-[linear-gradient(90deg,#e0b0ff_0%,#b48cff_42%,#4aa8d8_100%)] bg-clip-text font-[family-name:var(--font-display)] text-xl font-medium tracking-tight text-transparent sm:text-2xl">
                  {entry.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted sm:leading-7">
                  {entry.body}
                </p>
                {"highlights" in entry && entry.highlights ? (
                  <ul className="mt-4 flex flex-col gap-2">
                    {entry.highlights.map((item) => (
                      <li
                        key={item}
                        className="border-l border-line pl-3 text-sm leading-relaxed text-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {"href" in entry && entry.href && linkLabel ? (
                  <p className="mt-4">
                    <a
                      href={entry.href}
                      className="font-[family-name:var(--font-mono)] text-xs text-lavender underline decoration-lavender/30 underline-offset-4 transition-colors hover:text-[#3ec4f0] hover:decoration-[#3ec4f0]/60"
                    >
                      {linkLabel}
                    </a>
                  </p>
                ) : null}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
