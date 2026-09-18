import { IconBase } from "./icon-base";

import type { SVGProps } from "react";

export function DownloadIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <line x1="12" y1="4" x2="12" y2="18" />
      <polyline points="6 12 12 18 18 12" />
    </IconBase>
  );
}
