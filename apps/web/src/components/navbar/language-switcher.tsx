"use client";

import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

import { ChevronDownIcon } from "@/components/icons/chevron-down-icon";
import { useDismissableMenu } from "@/hooks/use-dismissable-menu";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

import type { Locale } from "@/i18n/routing";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("Navbar");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useDismissableMenu<HTMLDivElement>(isOpen, setIsOpen);

  function selectLocale(localeOption: Locale) {
    router.replace(pathname, { locale: localeOption });
    setIsOpen(false);
  }

  return (
    <>
      <div ref={dropdownRef} className="relative sm:hidden">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-label={t("languageLabel")}
          onClick={() => setIsOpen((value) => !value)}
          className="flex items-center gap-1 rounded-md border border-paper/18 px-2.5 py-1 font-mono text-[0.72rem] text-paper uppercase"
        >
          {locale}
          <ChevronDownIcon className="h-3 w-3" />
        </button>

        {isOpen ? (
          <ul
            role="listbox"
            aria-label={t("languageLabel")}
            className="absolute top-full right-0 z-10 mt-1.5 min-w-full overflow-hidden rounded-md border border-paper/18 bg-ink font-mono text-[0.72rem]"
          >
            {routing.locales.map((localeOption) => {
              const isActive = localeOption === locale;

              return (
                <li key={localeOption} role="option" aria-selected={isActive}>
                  <button
                    type="button"
                    onClick={() => selectLocale(localeOption)}
                    className={
                      isActive
                        ? "block w-full px-3.5 py-1.5 text-center font-semibold text-ink uppercase bg-amber"
                        : "block w-full px-3.5 py-1.5 text-center text-paper-dim uppercase transition-colors hover:bg-paper/10 hover:text-paper"
                    }
                  >
                    {localeOption.toUpperCase()}
                  </button>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>

      <div
        role="group"
        aria-label={t("languageLabel")}
        className="hidden gap-0.5 rounded-[20px] border border-paper/18 p-0.75 font-mono text-[0.72rem] sm:flex"
      >
        {routing.locales.map((localeOption) => {
          const isActive = localeOption === locale;

          return (
            <button
              key={localeOption}
              type="button"
              aria-pressed={isActive}
              aria-label={t(`locales.${localeOption}`)}
              onClick={() => router.replace(pathname, { locale: localeOption })}
              className={
                isActive
                  ? "rounded-2xl bg-amber px-3.5 py-1 font-semibold tracking-[0.04em] text-ink"
                  : "rounded-2xl px-3.5 py-1 tracking-[0.04em] text-muted transition-colors hover:text-paper hover:cursor-pointer"
              }
            >
              {localeOption.toUpperCase()}
            </button>
          );
        })}
      </div>
    </>
  );
}
