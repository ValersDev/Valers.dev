"use client";

import { useLanguage } from "@/components/i18n/language-provider";

export function Work() {
  const { t } = useLanguage();

  return (
    <section
      id="trabajo"
      className="relative scroll-mt-20 border-t border-line px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <header className="max-w-xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {t.work.title}
          </h2>
          <div
            aria-hidden
            className="mt-5 h-1 w-16 rounded-full"
            style={{ background: "var(--brand-gradient)" }}
          />
        </header>

        <div className="mt-12 flex flex-col gap-8 lg:mt-16 lg:gap-10">
          {t.work.roles.map((role, index) => (
            <article
              key={role.company}
              className="relative overflow-hidden border border-line"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    index === t.work.roles.length - 1
                      ? "radial-gradient(ellipse 60% 80% at 100% 0%, color-mix(in srgb, #4aa8d8 16%, transparent), transparent 55%)"
                      : "radial-gradient(ellipse 60% 80% at 0% 0%, color-mix(in srgb, #c4a6ef 14%, transparent), transparent 55%)",
                }}
              />

              <div className="relative grid items-start gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] lg:gap-12 lg:p-10">
                <div>
                  <p className="font-[family-name:var(--font-mono)] text-xs tracking-wide text-steel">
                    {role.period}
                  </p>
                  <h3 className="mt-3 bg-[linear-gradient(90deg,#e0b0ff_0%,#b48cff_42%,#4aa8d8_100%)] bg-clip-text font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">
                    {role.company}
                  </h3>
                  <p className="mt-3 text-base font-medium text-ink">{role.role}</p>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-muted sm:leading-7">
                    {role.summary}
                  </p>
                </div>

                <ul
                  className={
                    role.highlights.length > 3
                      ? "grid gap-2.5 sm:grid-cols-2"
                      : "flex max-w-md flex-col gap-2.5"
                  }
                >
                  {role.highlights.map((item) => (
                    <li
                      key={item}
                      className="work-highlight border border-line/80 bg-paper/40 px-3.5 py-2.5 text-sm leading-snug text-muted transition-[border-color,color,background-color,box-shadow] duration-200 hover:border-lavender/50 hover:bg-lavender/10 hover:text-ink hover:shadow-[0_0_24px_color-mix(in_srgb,var(--lavender)_22%,transparent)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
