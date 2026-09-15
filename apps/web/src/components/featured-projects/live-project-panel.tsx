import { getTranslations } from "next-intl/server";

import type { LiveProject } from "./projects.data";

type LiveProjectPanelProps = {
  project: LiveProject;
};

export async function LiveProjectPanel({ project }: LiveProjectPanelProps) {
  const t = await getTranslations("FeaturedProjects");

  return (
    <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
      <div className="relative flex flex-col items-center justify-center gap-3.5 overflow-hidden rounded-[10px] border border-paper/18 bg-ink-3 px-5 py-9">
        <span className="absolute top-3.5 left-3.5 rounded border border-paper/18 px-2 py-0.5 font-mono text-[0.66rem] tracking-[0.06em] text-muted uppercase">
          {project.number} — {t("productLabel")}
        </span>
        <div className="flex aspect-[9/18.5] w-full max-w-[220px] flex-col items-center justify-center rounded-[26px] border-2 border-paper/18 bg-ink-2 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)]">
          <span aria-hidden="true" className="text-[2.6rem] opacity-50">
            {project.glyph}
          </span>
        </div>
      </div>

      <div>
        <h3 className="mb-1.5 font-display text-2xl font-semibold">
          {t(`${project.id}.title`)}
        </h3>
        <p className="mb-4 font-mono text-[0.74rem] tracking-[0.02em] text-teal">
          {project.stack.join(" · ")}
        </p>
        <p className="mb-5 text-[0.95rem] text-paper-dim">
          {t(`${project.id}.description`)}
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-transparent font-mono text-[0.76rem] text-amber hover:border-amber"
          >
            {t("cta.live")}
          </a>
        </div>
      </div>
    </div>
  );
}
