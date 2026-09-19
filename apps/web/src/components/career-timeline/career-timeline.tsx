import { getTranslations } from "next-intl/server";

import { CvLink } from "@/components/ui/cv-link";

import { TIMELINE_ENTRIES } from "./career-timeline.data";
import { TimelineItem } from "./timeline-item";

const LINKEDIN_URL = "https://www.linkedin.com/in/mihaela-macari-ba105518a";

export async function CareerTimeline() {
  const t = await getTranslations("Timeline");
  const tContact = await getTranslations("Contact");

  return (
    <section className="border-y border-paper/10 bg-ink-2 py-22">
      <div className="mx-auto max-w-280 px-7">
        <div className="mb-11">
          <span className="mb-2.5 block font-mono text-[0.8rem] tracking-[0.08em] text-amber">
            {t("num")}
          </span>
          <h2 className="font-display text-[clamp(1.7rem,3vw,2.3rem)] font-semibold tracking-[-0.01em]">
            {t("title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 items-start gap-14 min-[860px]:grid-cols-[1.4fr_1fr]">
          <ol className="max-w-160 border-t border-paper/10">
            {TIMELINE_ENTRIES.map((entry) => (
              <TimelineItem key={entry.id} entry={entry} t={t} />
            ))}
          </ol>

          <div
            id="contact"
            className="scroll-mt-17 flex flex-col items-start gap-5.5 rounded-[10px] border border-paper/18 p-7 sm:p-8"
          >
            <div>
              <h3 className="mb-2.5 font-display text-[clamp(1.4rem,6vw,1.8rem)] font-semibold">
                {tContact("title")}
              </h3>
              <p className="text-[0.95rem] text-paper-dim">{tContact("sub")}</p>
            </div>

            <div className="flex w-full flex-col gap-3.5">
              <a
                href="mailto:mikaela.malanici@gmail.com"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-amber bg-amber px-4.5 py-2.5 font-mono text-[0.76rem] font-semibold tracking-[0.03em] text-ink uppercase transition-colors hover:bg-[#f2b25a]"
              >
                {tContact("email")}
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={tContact("linkedinLabel")}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-paper/18 px-4.5 py-2.5 font-mono text-[0.76rem] tracking-[0.03em] text-paper uppercase transition-colors hover:border-amber"
              >
                {tContact("linkedin")}
              </a>
              <CvLink
                label={tContact("cv")}
                ariaLabel={tContact("cvLabel")}
                variant="outline"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
