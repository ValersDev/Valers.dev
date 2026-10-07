"use client";

import { useLanguage } from "@/components/i18n/language-provider";
import { SectionShell } from "@/components/sections/section-shell";

export function Projects() {
  const { t } = useLanguage();

  return (
    <SectionShell id="proyectos" title={t.projects.title}>
      <p>{t.projects.intro}</p>
      <p className="mt-4 font-[family-name:var(--font-mono)] text-sm text-lavender">
        {t.projects.placeholder}
      </p>
    </SectionShell>
  );
}
