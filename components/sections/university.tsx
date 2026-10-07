"use client";

import { useLanguage } from "@/components/i18n/language-provider";
import { SectionShell } from "@/components/sections/section-shell";

export function University() {
  const { t } = useLanguage();

  return (
    <SectionShell id="universidad" title={t.university.title}>
      <p>{t.university.intro}</p>
      <p className="mt-4 font-[family-name:var(--font-mono)] text-sm text-lavender">
        {t.university.placeholder}
      </p>
    </SectionShell>
  );
}
