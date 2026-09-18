import type { TimelineEntry } from "./career-timeline.data";
import type { getTranslations } from "next-intl/server";

type TimelineItemProps = {
  entry: TimelineEntry;
  t: Awaited<ReturnType<typeof getTranslations<"Timeline">>>;
};

export function TimelineItem({ entry, t }: TimelineItemProps) {
  return (
    <li className="grid grid-cols-1 gap-1.5 border-b border-paper/10 py-4 min-[601px]:grid-cols-[140px_1fr] min-[601px]:gap-5 min-[601px]:py-4.5">
      <div
        className={`pt-0.5 font-mono text-[0.72rem] whitespace-nowrap min-[601px]:text-[0.78rem] ${
          entry.current ? "text-paper-dim" : "text-muted"
        }`}
      >
        {entry.current ? t("present") : entry.periodStart} – {entry.periodEnd}
      </div>

      <div>
        <p className="mb-1 text-[0.95rem] font-semibold text-paper">
          {t(`roles.${entry.roleKey}.role`)}
          {entry.current && (
            <span className="ml-2 inline-block rounded-full border border-amber px-2 py-0.5 align-middle font-mono text-[0.6rem] tracking-[0.04em] text-amber uppercase">
              {t("current")}
            </span>
          )}
        </p>
        <p className="m-0 font-mono text-[0.78rem] text-teal">
          {entry.hasPrefix && `${t(`roles.${entry.roleKey}.prefix`)} `}
          <a
            href={entry.href}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-transparent text-teal transition-colors hover:border-teal"
          >
            {entry.company}
          </a>
        </p>
      </div>
    </li>
  );
}
