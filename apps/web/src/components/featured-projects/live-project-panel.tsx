import { getTranslations } from "next-intl/server";

import type { LiveProject } from "./projects.data";

type LiveProjectPanelProps = {
  project: LiveProject;
};

export async function LiveProjectPanel({ project }: LiveProjectPanelProps) {
  const t = await getTranslations("FeaturedProjects");

  return (
    <div className="rounded-[10px] border border-paper/18 bg-ink-2 px-8 py-12">
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
  );
}
