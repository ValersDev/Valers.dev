"use client";

import { useLanguage } from "@/components/i18n/language-provider";
import { projectsMeta, statusColors } from "@/lib/content/projects";

export function Projects() {
  const { t } = useLanguage();

  return (
    <section
      id="proyectos"
      className="relative scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(12rem,0.32fr)_minmax(0,1fr)] lg:items-start lg:gap-16">
          <header className="lg:sticky lg:top-28">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {t.projects.title}
            </h2>
            <div
              aria-hidden
              className="mt-5 h-1 w-16 rounded-full"
              style={{ background: "var(--brand-gradient)" }}
            />
            <ul className="mt-8 flex flex-col gap-3 font-[family-name:var(--font-mono)] text-xs tracking-wide text-muted">
              <li className="inline-flex items-center gap-2.5">
                <span
                  aria-hidden
                  className="inline-block size-2 shrink-0 rounded-full"
                  style={{
                    backgroundColor: statusColors.ongoing,
                    boxShadow: `0 0 10px ${statusColors.ongoing}99`,
                  }}
                />
                {t.projects.statusOngoing}
              </li>
              <li className="inline-flex items-center gap-2.5">
                <span
                  aria-hidden
                  className="inline-block size-2 shrink-0 rounded-full"
                  style={{
                    backgroundColor: statusColors.done,
                    boxShadow: `0 0 10px ${statusColors.done}99`,
                  }}
                />
                {t.projects.statusDone}
              </li>
            </ul>
          </header>

          <div className="grid gap-6 sm:grid-cols-2">
            {projectsMeta.map((project) => {
              const copy = t.projects.items[project.id];
              const statusLabel =
                project.status === "ongoing"
                  ? t.projects.statusOngoing
                  : t.projects.statusDone;
              const color = statusColors[project.status];

              return (
                <article
                  key={project.id}
                  className="flex flex-col border border-line border-t-2 bg-paper/30 p-6 sm:p-7"
                  style={{ borderTopColor: color }}
                >
                  <p
                    className="inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-xs tracking-wide"
                    style={{ color }}
                  >
                    <span
                      aria-hidden
                      className="inline-block size-2 shrink-0 rounded-full"
                      style={{
                        backgroundColor: color,
                        boxShadow: `0 0 10px ${color}99`,
                      }}
                    />
                    {statusLabel}
                  </p>

                  <h3 className="mt-4 bg-[linear-gradient(90deg,#e0b0ff_0%,#b48cff_42%,#4aa8d8_100%)] bg-clip-text font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-transparent sm:text-3xl">
                    {copy.name}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-base sm:leading-7">
                    {copy.summary}
                  </p>

                  <ul className="mt-5 flex flex-col gap-2 border-t border-line pt-5">
                    {copy.highlights.map((item) => (
                      <li
                        key={item}
                        className="text-sm leading-snug text-muted before:mr-2 before:text-lavender before:content-['·']"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                    <ul className="flex flex-wrap gap-x-3 gap-y-1">
                      {project.stack.map((tech) => (
                        <li
                          key={tech}
                          className="font-[family-name:var(--font-mono)] text-[0.7rem] text-steel"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-[family-name:var(--font-mono)] text-xs text-lavender underline decoration-lavender/30 underline-offset-4 transition-colors hover:text-[#3ec4f0] hover:decoration-[#3ec4f0]/60"
                      >
                        {t.projects.viewRepo}
                      </a>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
