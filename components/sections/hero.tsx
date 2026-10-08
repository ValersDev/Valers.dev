"use client";

import { useLanguage } from "@/components/i18n/language-provider";
import { stackGroups } from "@/lib/content/stack";

export function Hero() {
  const { t } = useLanguage();
  const [firstName, ...rest] = t.hero.name.split(" ");
  const lastName = rest.join(" ");

  const groupLabels = {
    core: t.hero.stackCore,
    infra: t.hero.stackInfra,
  } as const;

  return (
    <section
      id="inicio"
      className="hero relative flex min-h-[calc(100dvh-4.5rem)] flex-col justify-center px-5 py-16 sm:px-8 sm:py-20"
    >
      <div className="hero-enter relative mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(14rem,0.55fr)] lg:items-end lg:gap-16">
        <div>
          <h1 className="hero-name font-[family-name:var(--font-display)] text-[clamp(5.5rem,22vw,14rem)] font-semibold leading-[0.84] tracking-[-0.05em]">
            <span className="hero-name-line hero-name-line--a block">
              {firstName}
            </span>
            <span className="hero-name-line hero-name-line--b block">
              {lastName}
            </span>
          </h1>

          <div className="mt-8 flex flex-wrap items-baseline gap-x-3 gap-y-1 sm:mt-10">
            <span className="font-[family-name:var(--font-mono)] text-sm text-lavender sm:text-base">
              {t.hero.handle}
            </span>
            <span className="text-line" aria-hidden>
              /
            </span>
            <span className="text-base font-medium text-ink sm:text-lg">
              {t.hero.headline}
            </span>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-md bg-lavender px-6 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-90"
            >
              {t.hero.ctaContact}
            </a>
            <a
              href="#trabajo"
              className="inline-flex items-center justify-center rounded-md border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-lavender/50"
            >
              {t.hero.ctaWork}
            </a>
          </div>
        </div>

        <aside className="border-t border-line pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
          <ul className="flex flex-col gap-8">
            {stackGroups.map((group) => (
              <li key={group.id}>
                <p className="font-[family-name:var(--font-mono)] text-xs text-muted">
                  {groupLabels[group.id]}
                </p>
                <ul className="mt-3 flex flex-col gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <span className="inline-block cursor-default font-[family-name:var(--font-display)] text-xl font-medium tracking-tight text-ink transition-[color,transform] duration-200 ease-out hover:translate-x-1 hover:text-[#3ec4f0] sm:text-2xl motion-reduce:transition-colors motion-reduce:hover:translate-x-0">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
