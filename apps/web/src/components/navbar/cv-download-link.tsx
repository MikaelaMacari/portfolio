import { getTranslations } from "next-intl/server";

import { CvLink } from "@/components/ui/cv-link";

export async function CvDownloadLink() {
  const t = await getTranslations("Navbar");

  return (
    <CvLink label={t("cv")} ariaLabel={t("cvDownloadLabel")} variant="filled" />
  );
}
