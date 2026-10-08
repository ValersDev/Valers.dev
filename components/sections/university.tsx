"use client";

import { useLanguage } from "@/components/i18n/language-provider";
import { universityMeta } from "@/lib/content/university";

export function University() {
  const { t } = useLanguage();
  const featured = universityMeta.find((p) => p.featured)!;
  const rest = universityMeta.filter((p) => !p.featured);
  const featuredCopy = t.university.items[featured.id];

  return (
    <section
      id="universidad"
      className="relative scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <header className="max-w-xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {t.university.title}
          </h2>
          <div
            aria-hidden
            className="mt-5 h-1 w-16 rounded-full"
            style={{ background: "var(--brand-gradient)" }}
          />
        </header>

        {/* TFG — featured */}
        <article className="relative mt-12 overflow-hidden border border-line lg:mt-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 55% 70% at 0% 0%, color-mix(in srgb, #c4a6ef 14%, transparent), transparent 55%)",
            }}
          />
          <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-12 lg:p-10">
            <div>
              <div className="flex flex-wrap items-center gap-3 font-[family-name:var(--font-mono)] text-xs tracking-wide text-steel">
                <span>{featured.year}</span>
                <span aria-hidden>·</span>
                <span>
                  {t.university.gradeLabel} {featured.grade}
                </span>
              </div>
              <h3 className="mt-3 bg-[linear-gradient(90deg,#e0b0ff_0%,#b48cff_42%,#4aa8d8_100%)] bg-clip-text font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-transparent sm:text-4xl">
                {featuredCopy.name}
              </h3>
              <p className="mt-2 text-sm text-ink">{featuredCopy.course}</p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:leading-7">
                {featuredCopy.summary}
              </p>
              <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1">
                {featured.stack.map((tech) => (
                  <li
                    key={tech}
                    className="font-[family-name:var(--font-mono)] text-[0.7rem] text-steel"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              {featured.href ? (
                <p className="mt-6">
                  <a
                    href={featured.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-[family-name:var(--font-mono)] text-xs text-lavender underline decoration-lavender/30 underline-offset-4 transition-colors hover:text-[#3ec4f0] hover:decoration-[#3ec4f0]/60"
                  >
                    {t.university.viewRepo}
                  </a>
                </p>
              ) : null}
            </div>
            <ul className="grid gap-2.5 sm:grid-cols-2">
              {featuredCopy.highlights.map((item) => (
                <li
                  key={item}
                  className="work-highlight border border-line/80 bg-paper/40 px-3.5 py-2.5 text-sm leading-snug text-muted transition-[border-color,color,background-color,box-shadow] duration-200 hover:border-lavender/50 hover:bg-lavender/10 hover:text-ink hover:shadow-[0_0_24px_color-mix(in_srgb,var(--lavender)_22%,transparent)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </article>

        {/* Rest — compact grid */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((project) => {
            const copy = t.university.items[project.id];

            return (
              <article
                key={project.id}
                className="flex flex-col border border-line bg-paper/30 p-5 sm:p-6"
              >
                <div className="flex flex-wrap items-center gap-2 font-[family-name:var(--font-mono)] text-xs tracking-wide text-steel">
                  <span>{project.year}</span>
                  <span aria-hidden>·</span>
                  <span>
                    {t.university.gradeLabel} {project.grade}
                  </span>
                </div>
                <h3 className="mt-3 bg-[linear-gradient(90deg,#e0b0ff_0%,#b48cff_42%,#4aa8d8_100%)] bg-clip-text font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-transparent">
                  {copy.name}
                </h3>
                <p className="mt-1 text-xs text-ink/80">{copy.course}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {copy.summary}
                </p>
                <ul className="mt-4 flex flex-col gap-1.5 border-t border-line pt-4">
                  {copy.highlights.map((item) => (
                    <li
                      key={item}
                      className="text-xs leading-snug text-muted before:mr-2 before:text-lavender before:content-['·']"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-1">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="font-[family-name:var(--font-mono)] text-[0.65rem] text-steel"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 font-[family-name:var(--font-mono)] text-xs">
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lavender underline decoration-lavender/30 underline-offset-4 transition-colors hover:text-[#3ec4f0]"
                    >
                      {t.university.viewRepo}
                    </a>
                  ) : project.id === "weout" ? (
                    <span className="text-muted/70">{t.university.privateRepo}</span>
                  ) : null}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
