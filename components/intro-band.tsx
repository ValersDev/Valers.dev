import type { ReactNode } from "react";

/** Shared nebula wash behind hero + about (galactic narrative). */
export function IntroBand({ children }: { children: ReactNode }) {
  return (
    <div className="relative isolate">
      <div
        aria-hidden
        className="intro-atmosphere pointer-events-none absolute inset-0 z-0"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
