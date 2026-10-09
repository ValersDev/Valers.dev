"use client";

import { ContactIcon } from "@/components/icons/contact";
import { useLanguage } from "@/components/i18n/language-provider";
import { contactLinks } from "@/lib/content/contact";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="contacto"
      className="relative scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(12rem,0.32fr)_minmax(0,1fr)] lg:items-start lg:gap-16">
          <header className="lg:sticky lg:top-28">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {t.contact.title}
            </h2>
            <div
              aria-hidden
              className="mt-5 h-1 w-16 rounded-full"
              style={{ background: "var(--brand-gradient)" }}
            />
            <p className="mt-8 max-w-xs text-base leading-relaxed text-muted sm:leading-7">
              {t.contact.intro}
            </p>
          </header>

          <ul className="relative border-t border-line">
            {contactLinks.map((link) => (
              <li key={link.id} className="group border-b border-line">
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="relative flex items-center justify-between gap-6 py-5 transition-colors sm:py-6"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 -left-3 w-px origin-top scale-y-0 bg-[linear-gradient(180deg,#e0b0ff_0%,#4aa8d8_100%)] transition-transform duration-300 group-hover:scale-y-100 sm:-left-5"
                  />
                  <span className="flex min-w-0 items-center gap-4 sm:gap-5">
                    <ContactIcon
                      id={link.id}
                      className="size-5 shrink-0 text-steel transition-colors group-hover:text-lavender sm:size-6"
                    />
                    <span className="min-w-0">
                      <span className="block font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-ink transition-colors group-hover:text-lavender sm:text-2xl">
                        {t.contact[link.id]}
                      </span>
                      <span className="mt-0.5 block truncate font-[family-name:var(--font-mono)] text-sm text-muted transition-colors group-hover:text-ink/80">
                        {link.handle}
                      </span>
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="shrink-0 font-[family-name:var(--font-display)] text-xl text-lavender/50 transition-all duration-300 group-hover:translate-x-1 group-hover:text-steel sm:text-2xl"
                  >
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
