import { DownloadIcon } from "@/components/icons/download-icon";

export const CV_HREF = "/mihaela-macari-cv.pdf";

const VARIANT_CLASSES = {
  filled:
    "border-amber bg-amber px-3.5 py-2 text-[0.8rem] font-semibold text-ink hover:bg-[#f2b25a]",
  outline:
    "w-full border-paper/18 px-4.5 py-2.5 text-[0.76rem] text-paper hover:border-amber sm:w-auto",
} as const;

type CvLinkProps = {
  label: string;
  ariaLabel: string;
  variant: keyof typeof VARIANT_CLASSES;
};

export function CvLink({ label, ariaLabel, variant }: CvLinkProps) {
  return (
    <a
      href={CV_HREF}
      download
      aria-label={ariaLabel}
      className={`inline-flex items-center justify-center gap-2 rounded-md border font-mono tracking-[0.03em] uppercase transition-colors ${VARIANT_CLASSES[variant]}`}
    >
      <DownloadIcon className="h-3.5 w-3.5" />
      {label}
    </a>
  );
}
