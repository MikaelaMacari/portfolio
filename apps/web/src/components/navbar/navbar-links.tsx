import { getTranslations } from "next-intl/server";

import { NAV_LINKS } from "./nav-links.data";

export async function NavbarLinks() {
  const t = await getTranslations("Navbar.links");

  return (
    <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
      {NAV_LINKS.map(({ href, key }) => (
        <a
          key={key}
          href={href}
          className="font-mono text-[0.78rem] tracking-[0.04em] text-paper-dim uppercase transition-colors hover:text-paper"
        >
          {t(key)}
        </a>
      ))}
    </nav>
  );
}
