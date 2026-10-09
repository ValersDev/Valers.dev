import type { ReactNode } from "react";

const twinkleStars = [
  { left: "8%", top: "12%", delay: "0s", duration: "2.8s", size: 2 },
  { left: "18%", top: "28%", delay: "0.7s", duration: "3.6s", size: 2 },
  { left: "27%", top: "8%", delay: "1.4s", duration: "2.4s", size: 3 },
  { left: "36%", top: "42%", delay: "0.3s", duration: "4.1s", size: 2 },
  { left: "44%", top: "16%", delay: "2.1s", duration: "3.2s", size: 2 },
  { left: "52%", top: "58%", delay: "1.1s", duration: "2.9s", size: 3 },
  { left: "61%", top: "22%", delay: "0.5s", duration: "3.8s", size: 2 },
  { left: "69%", top: "48%", delay: "1.8s", duration: "2.6s", size: 2 },
  { left: "76%", top: "11%", delay: "0.9s", duration: "3.4s", size: 3 },
  { left: "84%", top: "36%", delay: "2.4s", duration: "2.7s", size: 2 },
  { left: "91%", top: "64%", delay: "0.2s", duration: "3.9s", size: 2 },
  { left: "12%", top: "72%", delay: "1.6s", duration: "3.1s", size: 2 },
  { left: "23%", top: "88%", delay: "2.8s", duration: "2.5s", size: 3 },
  { left: "48%", top: "78%", delay: "0.4s", duration: "4.2s", size: 2 },
  { left: "58%", top: "90%", delay: "1.3s", duration: "3.3s", size: 2 },
  { left: "73%", top: "82%", delay: "2.0s", duration: "2.8s", size: 3 },
  { left: "88%", top: "88%", delay: "0.6s", duration: "3.7s", size: 2 },
  { left: "33%", top: "64%", delay: "2.6s", duration: "3.0s", size: 2 },
  { left: "95%", top: "18%", delay: "1.9s", duration: "2.3s", size: 2 },
  { left: "5%", top: "48%", delay: "3.1s", duration: "3.5s", size: 3 },
] as const;

/** Full-page nebula wash (galactic narrative). */
export function IntroBand({ children }: { children: ReactNode }) {
  return (
    <div className="relative isolate">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
      >
        <div className="intro-atmosphere absolute inset-0" />
        <div className="intro-stars absolute inset-0">
          {twinkleStars.map((star, i) => (
            <span
              key={i}
              className="intro-star"
              style={{
                left: star.left,
                top: star.top,
                width: star.size,
                height: star.size,
                animationDelay: star.delay,
                animationDuration: star.duration,
              }}
            />
          ))}
        </div>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
