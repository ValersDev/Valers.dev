"use client";

import { useLanguage } from "@/components/i18n/language-provider";
import { SectionShell } from "@/components/sections/section-shell";

export function About() {
  const { t } = useLanguage();

  return (
    <SectionShell id="sobre-mi" title={t.about.title}>
      <p>{t.about.body}</p>
    </SectionShell>
  );
}
