import { getTranslations } from "next-intl/server";

import { LiveProjectPanel } from "./live-project-panel";
import { ProjectTabs } from "./project-tabs";
import { PROJECTS } from "./projects.data";
import { WipProjectPanel } from "./wip-project-panel";

export async function FeaturedProjects() {
  const t = await getTranslations("FeaturedProjects");

  const panels = PROJECTS.map((project) => ({
    id: project.id,
    number: project.number,
    tabLabel: t(`tabs.${project.id}`),
    content:
      project.kind === "live" ? (
        <LiveProjectPanel project={project} />
      ) : (
        <WipProjectPanel project={project} />
      ),
  }));

  return (
    <section id="projects" className="scroll-mt-17 pt-22">
      <div className="mx-auto max-w-[1120px] px-7">
        <div className="mb-11">
          <span className="mb-2.5 block font-mono text-[0.8rem] tracking-[0.08em] text-amber">
            {t("num")}
          </span>
          <h2 className="font-display text-[clamp(1.7rem,3vw,2.3rem)] font-semibold tracking-[-0.01em]">
            {t("title")}
          </h2>
          <p className="mt-2.5 max-w-[46ch] text-[0.95rem] text-muted">
            {t("sub")}
          </p>
        </div>

        <ProjectTabs panels={panels} />
      </div>
    </section>
  );
}
