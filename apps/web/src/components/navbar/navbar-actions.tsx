import { CvDownloadLink } from "./cv-download-link";
import { LanguageSwitcher } from "./language-switcher";
import { MobileMenu } from "./mobile-menu";
// import { TourTriggerButton } from "./tour-trigger-button";

export function NavbarActions() {
  return (
    <div className="flex items-center gap-3 lg:gap-4.5">
      <LanguageSwitcher />
      <div className="hidden items-center gap-4.5 lg:flex">
        {/* <TourTriggerButton /> */}
        <CvDownloadLink />
      </div>
      <MobileMenu>
        {/* <TourTriggerButton /> */}
        <CvDownloadLink />
      </MobileMenu>
    </div>
  );
}
