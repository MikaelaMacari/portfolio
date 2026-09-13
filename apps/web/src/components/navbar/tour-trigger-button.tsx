import { getTranslations } from "next-intl/server";

export async function TourTriggerButton() {
  const t = await getTranslations("Navbar");

  return (
    <button
      type="button"
      disabled
      aria-disabled="true"
      className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-md border border-paper/18 px-3 py-2.5 font-mono text-[0.76rem] tracking-[0.03em] text-paper uppercase opacity-50 lg:px-4.5"
    >
      {t("tour")}
    </button>
  );
}
