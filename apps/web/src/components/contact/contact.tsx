import { getTranslations } from "next-intl/server";

import { CvLink } from "@/components/ui/cv-link";

const LINKEDIN_URL = "https://www.linkedin.com/in/mihaela-macari-ba105518a";

export async function Contact() {
  const t = await getTranslations("Contact");

  return (
    <section
      id="contact"
      className="scroll-mt-17 border-y border-paper/10 bg-ink-2 py-22"
    >
      <div className="mx-auto max-w-280 px-7">
        <div
          id="contact-panel"
          className="flex flex-wrap items-center justify-between gap-7 rounded-[10px] border border-paper/18 p-7 sm:p-12"
        >
          <div>
            <h2 className="mb-2.5 font-display text-[clamp(1.4rem,6vw,1.8rem)] font-semibold">
              {t("title")}
            </h2>
            <p className="text-[0.95rem] text-paper-dim">{t("sub")}</p>
          </div>

          <div className="flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row sm:flex-wrap">
            <a
              href="mailto:mikaela.malanici@gmail.com"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-amber bg-amber px-4.5 py-2.5 font-mono text-[0.76rem] font-semibold tracking-[0.03em] text-ink uppercase transition-colors hover:bg-[#f2b25a] sm:w-auto"
            >
              {t("email")}
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("linkedinLabel")}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-paper/18 px-4.5 py-2.5 font-mono text-[0.76rem] tracking-[0.03em] text-paper uppercase transition-colors hover:border-amber sm:w-auto"
            >
              {t("linkedin")}
            </a>
            <CvLink
              label={t("cv")}
              ariaLabel={t("cvLabel")}
              variant="outline"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
