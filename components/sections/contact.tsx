"use client";

import { useLanguage } from "@/components/i18n/language-provider";
import { SectionShell } from "@/components/sections/section-shell";
import { contactLinks } from "@/lib/content/contact";

export function Contact() {
  const { t } = useLanguage();

  return (
    <SectionShell id="contacto" title={t.contact.title}>
      <p>{t.contact.intro}</p>
      <ul className="mt-8 flex flex-col gap-3 font-[family-name:var(--font-mono)] text-sm sm:text-base">
        {Object.values(contactLinks).map((link) => (
          <li key={link.labelKey}>
            <a
              href={link.href}
              className="text-ink underline decoration-lavender/40 underline-offset-4 transition-colors hover:decoration-steel"
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
            >
              {t.contact[link.labelKey]}
            </a>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
