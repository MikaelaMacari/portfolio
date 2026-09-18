"use client";

import { useTranslations } from "next-intl";

import { useTourContext } from "@/components/tour/tour-context";

export function TourTriggerButton() {
  const t = useTranslations("Navbar");
  const { startTour } = useTourContext();

  return (
    <button
      type="button"
      onClick={startTour}
      className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-md border border-paper/18 px-3 py-2.5 font-mono text-[0.76rem] tracking-[0.03em] text-paper uppercase transition-colors hover:border-amber lg:px-4.5"
    >
      {t("tour")}
    </button>
  );
}
