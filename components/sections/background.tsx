"use client";

import { useLanguage } from "@/components/i18n/language-provider";
import { SectionShell } from "@/components/sections/section-shell";

export function Background() {
  const { t } = useLanguage();

  return (
    <SectionShell id="trayectoria" title={t.background.title}>
      <p>{t.background.body}</p>
    </SectionShell>
  );
}
