import { getTranslations } from "next-intl/server";

import { DownloadIcon } from "@/components/icons/download-icon";

export async function CvDownloadLink() {
  const t = await getTranslations("Navbar");

  return (
    <a
      href="/mihaela-macari-cv.pdf"
      download
      aria-label={t("cvDownloadLabel")}
      className="inline-flex items-center gap-2 rounded-md border border-amber bg-amber px-3.5 py-2 font-mono text-[0.8rem] font-semibold tracking-[0.03em] text-ink uppercase transition-colors hover:bg-[#f2b25a]"
    >
      <DownloadIcon className="h-3.5 w-3.5" />
      {t("cv")}
    </a>
  );
}
