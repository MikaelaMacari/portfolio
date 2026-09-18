import { getTranslations } from "next-intl/server";

import { Tag } from "@/components/ui/tag";

const STACK = [
  { label: "Angular", variant: "highlighted" },
  { label: "React", variant: "highlighted" },
  { label: "TypeScript", variant: "highlighted" },
  { label: "RxJS", variant: "default" },
  { label: "Chart.js", variant: "default" },
  { label: "Leaflet", variant: "default" },
  { label: "Next.js", variant: "default" },
] as const;

export async function StackReadoutCard() {
  const t = await getTranslations("Hero.panel");

  return (
    <div
      id="readout-panel"
      className="rounded-[10px] border border-paper/18 bg-ink-2 p-5.5"
    >
      <div className="mb-4 flex justify-between font-mono text-[0.7rem] tracking-[0.08em] text-muted uppercase">
        <span>{t("title")}</span>
        <span>{t("version")}</span>
      </div>

      <div className="flex flex-wrap gap-2">
        {STACK.map(({ label, variant }) => (
          <Tag key={label} variant={variant}>
            {label}
          </Tag>
        ))}
      </div>

      <div className="mt-4.5 border-t border-paper/10 pt-3.5">
        <div className="flex justify-between border-b border-dashed border-paper/10 py-1.75 font-mono text-[0.78rem] text-paper-dim max-[600px]:flex-col max-[600px]:items-start max-[600px]:gap-1.5">
          <span>{t("experience")}</span>
          <span className="text-paper max-[600px]:text-left">
            {t("experienceValue")}
          </span>
        </div>
        <div className="flex justify-between border-b border-dashed border-paper/10 py-1.75 font-mono text-[0.78rem] text-paper-dim max-[600px]:flex-col max-[600px]:items-start max-[600px]:gap-1.5">
          <span>{t("eligibility")}</span>
          <span className="text-paper max-[600px]:text-left">
            {t("eligibilityValue")}
          </span>
        </div>
        <div className="flex justify-between border-b border-dashed border-paper/10 py-1.75 font-mono text-[0.78rem] text-paper-dim max-[600px]:flex-col max-[600px]:items-start max-[600px]:gap-1.5">
          <span>{t("languages")}</span>
          <span className="text-paper max-[600px]:text-left">
            {t("languagesValue")}
          </span>
        </div>
        <div className="flex justify-between py-1.75 font-mono text-[0.78rem] text-paper-dim max-[600px]:flex-col max-[600px]:items-start max-[600px]:gap-1.5">
          <span>{t("background")}</span>
          <span className="text-paper max-[600px]:text-left">
            {t("backgroundValue")}
          </span>
        </div>
      </div>
    </div>
  );
}
