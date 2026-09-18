export type TimelineEntry = {
  id: string;
  roleKey: "i1" | "i2" | "i3" | "i4" | "i5";
  current: boolean;
  hasPrefix: boolean;
  periodStart?: string;
  periodEnd: string;
  company: string;
  href: string;
};

export const TIMELINE_ENTRIES: TimelineEntry[] = [
  {
    id: "aerdrya",
    roleKey: "i5",
    current: true,
    hasPrefix: true,
    periodEnd: "01/2025",
    company: "Aerdrya",
    href: "https://www.aerdrya.com/",
  },
  {
    id: "developmentaid",
    roleKey: "i4",
    current: true,
    hasPrefix: true,
    periodEnd: "04/2023",
    company: "DevelopmentAid",
    href: "https://www.developmentaid.org/",
  },
  {
    id: "powerit",
    roleKey: "i3",
    current: false,
    hasPrefix: false,
    periodStart: "04/2023",
    periodEnd: "11/2022",
    company: "Powerit",
    href: "https://powerit.dev/",
  },
  {
    id: "powerit-internship",
    roleKey: "i2",
    current: false,
    hasPrefix: false,
    periodStart: "11/2022",
    periodEnd: "07/2022",
    company: "Powerit",
    href: "https://powerit.dev/",
  },
  {
    id: "fusion-works",
    roleKey: "i1",
    current: false,
    hasPrefix: false,
    periodStart: "06/2022",
    periodEnd: "03/2022",
    company: "Fusion Works",
    href: "https://fusion.works/",
  },
];
