import { NavbarActions } from "./navbar-actions";
import { NavbarBrand } from "./navbar-brand";
import { NavbarLinks } from "./navbar-links";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-paper/10 bg-ink/86 backdrop-blur-[10px]">
      <div className="mx-auto flex h-17 w-full items-center justify-between px-4 lg:px-7">
        <NavbarBrand />
        <NavbarLinks />
        <NavbarActions />
      </div>
    </header>
  );
}
