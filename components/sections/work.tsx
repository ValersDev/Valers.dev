"use client";

import { useLanguage } from "@/components/i18n/language-provider";
import { SectionShell } from "@/components/sections/section-shell";

export function Work() {
  const { t } = useLanguage();

  return (
    <SectionShell id="trabajo" title={t.work.title}>
      <p>{t.work.body}</p>
    </SectionShell>
  );
}
