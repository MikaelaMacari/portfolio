"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { TourContext } from "./tour-context";
import { TourOverlay } from "./tour-overlay";
import { TOUR_STEPS } from "./tour-steps.data";

import type { ReactNode } from "react";

const SCROLL_SETTLE_STABLE_FRAMES = 2;
const SCROLL_SETTLE_GRACE_FRAMES = 3;
const SCROLL_SETTLE_TIMEOUT_MS = 500;
const TOOLTIP_MARGIN = 16;
const TOOLTIP_FALLBACK_WIDTH = 300;
const TOOLTIP_FALLBACK_HEIGHT = 140;

type TooltipPosition = { top: number; left: number };

function placeTooltip(
  rect: DOMRect,
  placement: "top" | "bottom" | "left" | "right" | undefined,
  tooltip: HTMLDivElement | null,
): TooltipPosition {
  const tw = tooltip?.offsetWidth || TOOLTIP_FALLBACK_WIDTH;
  const th = tooltip?.offsetHeight || TOOLTIP_FALLBACK_HEIGHT;

  let top: number;
  let left: number;

  switch (placement) {
    case "top":
      top = rect.top - th - TOOLTIP_MARGIN;
      left = rect.left;
      break;
    case "left":
      top = rect.top;
      left = rect.left - tw - TOOLTIP_MARGIN;
      break;
    case "right":
      top = rect.top;
      left = rect.right + TOOLTIP_MARGIN;
      break;
    default:
      top = rect.bottom + TOOLTIP_MARGIN;
      left = rect.left;
  }

  left = Math.max(
    TOOLTIP_MARGIN,
    Math.min(left, window.innerWidth - tw - TOOLTIP_MARGIN),
  );
  top = Math.max(
    TOOLTIP_MARGIN,
    Math.min(top, window.innerHeight - th - TOOLTIP_MARGIN),
  );

  return { top, left };
}

export function TourProvider({ children }: { children: ReactNode }) {
  const [isActive, setIsActive] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [spotlightRect, setSpotlightRect] = useState<DOMRect | null>(null);
  const [tooltipPosition, setTooltipPosition] =
    useState<TooltipPosition | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const activeTargetRef = useRef<HTMLElement | null>(null);
  const rafIdRef = useRef<number | null>(null);
  const settleTimeoutRef = useRef<number | null>(null);
  const stepIndexRef = useRef(stepIndex);

  const clearHighlight = useCallback(() => {
    activeTargetRef.current?.removeAttribute("data-tour-active");
    activeTargetRef.current = null;
  }, []);

  const cancelPendingReposition = useCallback(() => {
    if (rafIdRef.current !== null) {
      window.cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }
    if (settleTimeoutRef.current !== null) {
      window.clearTimeout(settleTimeoutRef.current);
      settleTimeoutRef.current = null;
    }
  }, []);

  const waitForScrollEnd = useCallback(
    (onSettled: () => void) => {
      let lastY = window.scrollY;
      let lastVH = window.visualViewport?.height ?? window.innerHeight;
      let stableFrames = 0;
      let framesElapsed = 0;
      let settled = false;

      function finish() {
        if (settled) return;
        settled = true;
        cancelPendingReposition();
        onSettled();
      }

      function check() {
        framesElapsed += 1;
        const currentY = window.scrollY;
        const currentVH = window.visualViewport?.height ?? window.innerHeight;
        if (currentY === lastY && currentVH === lastVH) {
          stableFrames += 1;
        } else {
          stableFrames = 0;
          lastY = currentY;
          lastVH = currentVH;
        }

        if (
          framesElapsed > SCROLL_SETTLE_GRACE_FRAMES &&
          stableFrames >= SCROLL_SETTLE_STABLE_FRAMES
        ) {
          finish();
          return;
        }

        rafIdRef.current = window.requestAnimationFrame(check);
      }

      rafIdRef.current = window.requestAnimationFrame(check);
      settleTimeoutRef.current = window.setTimeout(
        finish,
        SCROLL_SETTLE_TIMEOUT_MS,
      );
    },
    [cancelPendingReposition],
  );

  const endTour = useCallback(() => {
    cancelPendingReposition();
    clearHighlight();
    setIsActive(false);
    setStepIndex(0);
    setSpotlightRect(null);
    setTooltipPosition(null);
  }, [cancelPendingReposition, clearHighlight]);

  const goToStep = useCallback(
    (startIndex: number, direction: 1 | -1 = 1) => {
      cancelPendingReposition();

      for (
        let index = startIndex;
        index >= 0 && index < TOUR_STEPS.length;
        index += direction
      ) {
        const step = TOUR_STEPS[index];
        if (!step) break;

        if (!step.selector) {
          clearHighlight();
          setStepIndex(index);
          setSpotlightRect(null);
          setTooltipPosition(null);
          return;
        }

        const target = document.querySelector<HTMLElement>(step.selector);
        if (!target) continue;

        clearHighlight();
        setStepIndex(index);
        target.scrollIntoView({ behavior: "smooth", block: "center" });
        waitForScrollEnd(() => {
          const rect = target.getBoundingClientRect();
          target.setAttribute("data-tour-active", "true");
          activeTargetRef.current = target;
          setSpotlightRect(rect);
          setTooltipPosition(
            placeTooltip(rect, step.placement, tooltipRef.current),
          );
        });
        return;
      }

      endTour();
    },
    [cancelPendingReposition, clearHighlight, endTour, waitForScrollEnd],
  );

  const startTour = useCallback(() => {
    setIsActive(true);
    goToStep(0);
  }, [goToStep]);

  const nextStep = useCallback(() => {
    if (stepIndex < TOUR_STEPS.length - 1) {
      goToStep(stepIndex + 1);
    } else {
      endTour();
    }
  }, [stepIndex, goToStep, endTour]);

  const prevStep = useCallback(() => {
    if (stepIndex > 0) goToStep(stepIndex - 1, -1);
  }, [stepIndex, goToStep]);

  useEffect(() => {
    stepIndexRef.current = stepIndex;
  }, [stepIndex]);

  useEffect(() => {
    if (!isActive) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") endTour();
    }
    function handleResize() {
      goToStep(stepIndexRef.current);
    }

    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    window.visualViewport?.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
      window.visualViewport?.removeEventListener("resize", handleResize);
    };
  }, [isActive, endTour, goToStep]);

  useEffect(() => {
    return () => {
      cancelPendingReposition();
    };
  }, [cancelPendingReposition]);

  return (
    <TourContext.Provider value={{ startTour }}>
      {children}
      {isActive ? (
        <TourOverlay
          stepIndex={stepIndex}
          totalSteps={TOUR_STEPS.length}
          step={TOUR_STEPS[stepIndex]!}
          spotlightRect={spotlightRect}
          tooltipPosition={tooltipPosition}
          tooltipRef={tooltipRef}
          onNext={nextStep}
          onPrev={prevStep}
          onSkip={endTour}
        />
      ) : null}
    </TourContext.Provider>
  );
}
