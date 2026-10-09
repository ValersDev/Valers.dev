"use client";

import { ContactIcon } from "@/components/icons/contact";
import { useLanguage } from "@/components/i18n/language-provider";
import { contactLinks } from "@/lib/content/contact";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-line/80 px-5 py-10 sm:px-8 sm:py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <a
            href="#inicio"
            className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-ink transition-colors hover:text-lavender"
          >
            ValersDev
          </a>
          <p className="mt-2 font-[family-name:var(--font-mono)] text-xs tracking-wide text-muted">
            {t.footer.location}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            {t.footer.note}
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:items-end">
          <ul className="flex flex-wrap gap-3">
            {contactLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  aria-label={t.contact[link.id]}
                  className="inline-flex size-9 items-center justify-center text-steel transition-colors hover:text-lavender"
                >
                  <ContactIcon id={link.id} className="size-4" />
                </a>
              </li>
            ))}
          </ul>
          <p className="font-[family-name:var(--font-mono)] text-xs text-muted">
            © 2026 · ValersDev
          </p>
        </div>
      </div>
    </footer>
  );
}
