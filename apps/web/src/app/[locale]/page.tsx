import { getTranslations, setRequestLocale } from "next-intl/server";

import type { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Portfolio site — skeleton. The full one-pager lands in build week 2.",
};

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Home");

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center gap-6 px-6 py-24">
      <p className="font-mono text-sm text-amber">portfolio / apps / web</p>
      <h1 className="font-display text-4xl font-bold tracking-tight text-paper sm:text-5xl">
        {t("title")}
      </h1>
      <p className="max-w-prose text-lg text-paper-dim">
        {t("subtitle")} This is the monorepo skeleton — shared design tokens,
        TypeScript and ESLint config are wired up. The portfolio one-pager is
        built in week&nbsp;2.
      </p>
      <div className="mt-2 flex flex-wrap gap-3 font-mono text-xs text-muted">
        <span className="rounded border border-ink-3 px-2 py-1">
          Next.js 16
        </span>
        <span className="rounded border border-ink-3 px-2 py-1">Turborepo</span>
        <span className="rounded border border-ink-3 px-2 py-1">
          Tailwind v4
        </span>
      </div>
    </main>
  );
}
