import { setRequestLocale } from "next-intl/server";

import { Hero } from "@/components/hero/hero";

import type { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Mihaela Macari — Frontend Developer specializing in Angular & React. 4+ years building SaaS, B2B and data-driven platforms. Based in Chișinău, remote-ready across the EU.",
};

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex-1">
      <Hero />
    </main>
  );
}
