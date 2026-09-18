import { getTranslations } from "next-intl/server";

import { LiveClock } from "./live-clock";
import { StackReadoutCard } from "./stack-readout-card";

export async function Hero() {
  const t = await getTranslations("Hero");

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-paper/10 py-24 pb-19"
    >
      <div
        aria-hidden
        className="bg-grid-fade pointer-events-none absolute inset-0"
      />

      <div className="relative mx-auto max-w-280 px-7">
        <div
          id="status-bar"
          className="mb-11 flex w-fit flex-wrap items-center gap-5.5 rounded-lg border border-paper/18 bg-paper/3 px-4 py-2.5 font-mono text-[0.76rem] tracking-[0.02em] text-paper-dim"
        >
          <span>
            <span
              className="mr-2 inline-block h-2 w-2 rounded-full bg-teal motion-safe:animate-status-pulse"
              style={{
                boxShadow:
                  "0 0 0 3px color-mix(in srgb, var(--color-teal) 18%, transparent)",
              }}
            />
            {t("status")}
          </span>
          <span className="text-paper/18">/</span>
          <span>{t("location")}</span>
          <span className="text-paper/18">/</span>
          <LiveClock />
        </div>

        <div className="grid grid-cols-1 items-end gap-14 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="mb-4.5 font-mono text-[0.78rem] tracking-[0.12em] text-amber uppercase">
              {t("eyebrow")}
            </p>
            <h1 className="mb-3.5 font-display text-[clamp(2.6rem,5.4vw,4.4rem)] leading-[1.02] font-semibold tracking-[-0.01em]">
              Mihaela Macari
            </h1>
            <p className="mb-7.5 font-display text-[clamp(1rem,1.4vw,1.2rem)] font-normal text-paper-dim">
              {t.rich("role", {
                b: (chunks) => (
                  <b className="font-semibold text-paper">{chunks}</b>
                ),
              })}
            </p>
            <p className="mb-9 max-w-[52ch] text-base text-paper-dim">
              {t("copy")}
            </p>
            <div className="flex flex-wrap gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md border border-amber bg-amber px-4.5 py-2.5 font-mono text-[0.76rem] font-semibold tracking-[0.03em] text-ink uppercase transition-colors hover:bg-[#f2b25a]"
              >
                {t("ctaProjects")}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-paper/18 px-4.5 py-2.5 font-mono text-[0.76rem] tracking-[0.03em] text-paper uppercase transition-colors hover:border-amber"
              >
                {t("ctaContact")}
              </a>
            </div>
          </div>

          <StackReadoutCard />
        </div>
      </div>
    </section>
  );
}
