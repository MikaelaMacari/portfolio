import { getTranslations } from "next-intl/server";

import { InfoRow } from "@/components/ui/info-row";

const ROW_KEYS = [
  "focus",
  "experience",
  "education",
  "location",
  "eligibility",
  "languages",
] as const;

export async function About() {
  const t = await getTranslations("About");

  return (
    <section id="about" className="scroll-mt-17 py-22">
      <div className="mx-auto max-w-[1120px] px-7">
        <div className="mb-11">
          <span className="mb-2.5 block font-mono text-[0.8rem] tracking-[0.08em] text-amber">
            {t("num")}
          </span>
          <h2 className="font-display text-[clamp(1.7rem,3vw,2.3rem)] font-semibold tracking-[-0.01em]">
            {t("title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="mb-4 text-[0.98rem] text-paper-dim">{t("p1")}</p>
            <p className="mb-4 text-[0.98rem] text-paper-dim">{t("p2")}</p>
            <p className="text-[0.98rem] text-paper-dim">{t("p3")}</p>
          </div>

          <div className="flex flex-col border-t border-paper/10">
            {ROW_KEYS.map((key) => (
              <InfoRow
                key={key}
                label={t(`rows.${key}`)}
                value={t(`rows.${key}Value`)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
