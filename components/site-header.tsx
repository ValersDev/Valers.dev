"use client";

import { useLanguage } from "@/components/i18n/language-provider";

const navItems = [
  { href: "#sobre-mi", key: "about" as const },
  { href: "#trayectoria", key: "background" as const },
  { href: "#trabajo", key: "work" as const },
  { href: "#proyectos", key: "projects" as const },
  { href: "#universidad", key: "university" as const },
  { href: "#contacto", key: "contact" as const },
];

export function SiteHeader() {
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto max-w-5xl px-5 py-3.5 sm:px-8">
        <div className="flex items-center justify-between gap-4">
          <a
            href="#inicio"
            className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-ink"
          >
            ValersDev
          </a>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-5 text-sm text-muted lg:flex"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-ink"
              >
                {t.nav[item.key]}
              </a>
            ))}
          </nav>

          <div
            className="flex items-center gap-1 font-[family-name:var(--font-mono)] text-xs tracking-wide"
            role="group"
            aria-label="Language"
          >
            <button
              type="button"
              onClick={() => setLang("es")}
              className={`rounded px-1.5 py-0.5 transition-colors ${
                lang === "es" ? "text-ink" : "text-muted hover:text-ink"
              }`}
              aria-pressed={lang === "es"}
            >
              ES
            </button>
            <span className="text-line" aria-hidden>
              |
            </span>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`rounded px-1.5 py-0.5 transition-colors ${
                lang === "en" ? "text-ink" : "text-muted hover:text-ink"
              }`}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
          </div>
        </div>

        <nav
          aria-label="Sections"
          className="mt-3 flex gap-4 overflow-x-auto pb-0.5 text-sm text-muted lg:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 transition-colors hover:text-ink"
            >
              {t.nav[item.key]}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
