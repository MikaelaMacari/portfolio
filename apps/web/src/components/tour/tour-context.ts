"use client";

import { createContext, useContext } from "react";

type TourContextValue = {
  startTour: () => void;
};

export const TourContext = createContext<TourContextValue | null>(null);

export function useTourContext(): TourContextValue {
  const context = useContext(TourContext);
  if (!context) {
    throw new Error("useTourContext must be used within a TourProvider");
  }
  return context;
}
