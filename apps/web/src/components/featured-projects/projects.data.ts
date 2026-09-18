export type LiveProject = {
  id: "pharmzenith";
  kind: "live";
  number: string;
  stack: string[];
  liveUrl: string;
};

export type WipProject = {
  id: "regionIntelligence";
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
];
