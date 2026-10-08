import type { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export function SectionShell({ id, title, children }: SectionShellProps) {
  return (
    <section
      id={id}
      className="scroll-mt-20 px-5 py-16 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          {title}
        </h2>
        <div className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-[1.05rem] sm:leading-8">
          {children}
        </div>
      </div>
    </section>
  );
}
