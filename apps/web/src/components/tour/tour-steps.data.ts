export type TourPlacement = "top" | "bottom" | "left" | "right";

export type TourStep = {
  id: string;
  selector: string | null;
  textKey: string;
  placement?: TourPlacement;
  nextLabelKey?: "start" | "done";
};

export const TOUR_STEPS: TourStep[] = [
  { id: "intro", selector: null, textKey: "intro", nextLabelKey: "start" },
  {
    id: "statusBar",
    selector: "#status-bar",
    textKey: "statusBar",
    placement: "bottom",
  },
  {
    id: "readoutPanel",
    selector: "#readout-panel",
    textKey: "readoutPanel",
    placement: "bottom",
  },
  { id: "tabbar", selector: "#tabbar", textKey: "tabbar", placement: "bottom" },
  {
    id: "langSwitch",
    selector: "#lang-switch",
    textKey: "langSwitch",
    placement: "bottom",
  },
  {
    id: "contactPanel",
    selector: "#contact",
    textKey: "contactPanel",
    placement: "top",
    nextLabelKey: "done",
  },
];
