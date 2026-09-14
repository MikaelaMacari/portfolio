import { ibmPlexMono, ibmPlexSans, spaceGrotesk } from "@repo/tokens/fonts";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";

import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { routing } from "@/i18n/routing";

import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mihaela Macari — Frontend Developer",
    template: "%s — Mihaela Macari",
  },
  description:
    "Frontend developer with four years' experience building data-dense web platforms with React, Next.js and Angular.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
