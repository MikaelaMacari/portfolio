export type LiveProject = {
  id: "pharmzenith";
  kind: "live";
  number: string;
  stack: string[];
  liveUrl: string;
};

export type WipProject = {
  id:
    | "regionIntelligence"
    | "liveAssetTracker"
    | "alertsPreferences"
    | "mediaPage"
    | "onboardingFlow";
  kind: "wip";
  number: string;
  stack: string[];
};

export type Project = LiveProject | WipProject;

export const PROJECTS: Project[] = [
  {
    id: "pharmzenith",
    kind: "live",
    number: "01",
    stack: ["Angular", "TypeScript"],
    liveUrl: "https://www.pharmzenith.com/",
  },
  {
    id: "regionIntelligence",
    kind: "wip",
    number: "02",
    stack: ["Angular", "TypeScript", "NestJS", "REST"],
  },
  {
    id: "liveAssetTracker",
    kind: "wip",
    number: "03",
    stack: ["React", "React Admin", "React Leaflet"],
  },
  {
    id: "alertsPreferences",
    kind: "wip",
    number: "04",
    stack: ["Angular", "Reactive Forms", "Signals"],
  },
  {
    id: "mediaPage",
    kind: "wip",
    number: "05",
    stack: ["Angular", "RxJS", "Audio API"],
  },
  {
    id: "onboardingFlow",
    kind: "wip",
    number: "06",
    stack: ["Angular", "Video.js"],
  },
];
