import { getTranslations } from "next-intl/server";

import type { WipProject } from "./projects.data";

type WipProjectPanelProps = {
  project: WipProject;
};

export async function WipProjectPanel({ project }: WipProjectPanelProps) {
  const t = await getTranslations("FeaturedProjects");

  return (
    <div className="flex flex-col items-center justify-center gap-3.5 rounded-[10px] border border-dashed border-paper/18 bg-ink-2 px-8 py-16 text-center">
      <span className="rounded-full border border-paper/18 px-2.5 py-[3px] font-mono text-[0.62rem] tracking-[0.06em] text-muted uppercase">
        {t("wip.pill")}
      </span>
      <h3 className="text-lg font-semibold text-paper-dim">
        {t(`tabs.${project.id}`)}
      </h3>
      <p className="max-w-[34ch] text-[0.88rem] text-muted">{t("wip.text")}</p>
      <span className="mt-1.5 font-mono text-[0.72rem] tracking-[0.04em] text-muted">
        {project.stack.join(" · ")}
      </span>
    </div>
  );
}
