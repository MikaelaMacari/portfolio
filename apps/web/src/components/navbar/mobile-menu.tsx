"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

import { CloseIcon } from "@/components/icons/close-icon";
import { MenuIcon } from "@/components/icons/menu-icon";
import { useDismissableMenu } from "@/hooks/use-dismissable-menu";

import { NAV_LINKS } from "./nav-links.data";

import type { ReactNode } from "react";

export function MobileMenu({ children }: { children?: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useDismissableMenu<HTMLDivElement>(isOpen, setIsOpen);
  const t = useTranslations("Navbar");
  const tLinks = useTranslations("Navbar.links");

  return (
    <div ref={panelRef} className="lg:hidden flex items-center">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-nav-panel"
        aria-label={isOpen ? t("menuClose") : t("menuOpen")}
        onClick={() => setIsOpen((value) => !value)}
        className="text-paper"
      >
        {isOpen ? (
          <CloseIcon className="h-5.5 w-5.5" />
        ) : (
          <MenuIcon className="h-5.5 w-5.5" />
        )}
      </button>

      <nav
        id="mobile-nav-panel"
        aria-label="Primary"
        className={`absolute inset-x-0 top-full ${isOpen ? "flex" : "hidden"} flex-col gap-1 border-b border-paper/10 bg-ink px-7 py-4`}
      >
        {NAV_LINKS.map(({ href, key }) => (
          <a
            key={key}
            href={href}
            onClick={() => setIsOpen(false)}
            className="rounded-md px-2 py-2.5 font-mono text-[0.78rem] tracking-[0.04em] text-paper-dim uppercase transition-colors hover:text-paper"
          >
            {tLinks(key)}
          </a>
        ))}
        {children ? (
          <div className="mt-2 flex items-center justify-between gap-3 border-t border-paper/10 pt-3">
            {children}
          </div>
        ) : null}
      </nav>
    </div>
  );
}
