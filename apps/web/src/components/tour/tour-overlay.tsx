"use client";

import { useTranslations } from "next-intl";
import { useEffect } from "react";

import type { TourStep } from "./tour-steps.data";
import type { KeyboardEvent, RefObject } from "react";

type TooltipPosition = { top: number; left: number };

type TourOverlayProps = {
  step: TourStep;
  stepIndex: number;
  totalSteps: number;
  spotlightRect: DOMRect | null;
  tooltipPosition: TooltipPosition | null;
  tooltipRef: RefObject<HTMLDivElement | null>;
  onNext: () => void;
  onPrev: () => void;
  onSkip: () => void;
};

export function TourOverlay({
  step,
  stepIndex,
  totalSteps,
  spotlightRect,
  tooltipPosition,
  tooltipRef,
  onNext,
  onPrev,
  onSkip,
}: TourOverlayProps) {
  const t = useTranslations("Tour");
  const isCentered = tooltipPosition === null;
  const isFirstStep = stepIndex === 0;

  useEffect(() => {
    tooltipRef.current?.focus();
  }, [step, tooltipRef]);

  function trapFocus(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "Tab") return;

    const focusable = tooltipRef.current?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    if (!focusable || focusable.length === 0) return;

    const first = focusable[0]!;
    const last = focusable[focusable.length - 1]!;

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return (
    <>
      <div
        aria-hidden
        className="fixed inset-0 z-200"
        style={
          spotlightRect ? undefined : { backgroundColor: "rgba(8,11,14,0.72)" }
        }
      />

      {spotlightRect ? (
        <div
          aria-hidden
          className="fixed z-201 rounded-[10px] pointer-events-none transition-[top,left,width,height] duration-300 ease-out"
          style={{
            top: spotlightRect.top - 6,
            left: spotlightRect.left - 6,
            width: spotlightRect.width + 12,
            height: spotlightRect.height + 12,
            boxShadow:
              "0 0 0 4px var(--color-amber), 0 0 0 9999px rgba(8,11,14,0.72)",
          }}
        />
      ) : null}

      <div
        ref={tooltipRef}
        role="dialog"
        aria-modal="true"
        aria-label={t(`steps.${step.textKey}`)}
        tabIndex={-1}
        onKeyDown={trapFocus}
        className={
          isCentered
            ? "fixed top-1/2 left-1/2 z-202 w-85 max-w-[calc(100vw-32px)] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-paper/18 bg-ink-2 p-5 text-center shadow-[0_24px_48px_-12px_rgba(0,0,0,0.7)] focus:outline-none"
            : "fixed z-202 w-75 max-w-[calc(100vw-32px)] rounded-xl border border-paper/18 bg-ink-2 p-5 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.7)] transition-[top,left] duration-300 ease-out focus:outline-none"
        }
        style={
          isCentered
            ? undefined
            : {
                top: tooltipPosition?.top ?? 0,
                left: tooltipPosition?.left ?? 0,
              }
        }
      >
        <div className="mb-2.5 flex items-center justify-between gap-2.5 font-mono text-[0.68rem] tracking-[0.06em] text-amber uppercase">
          <span>
            {t("stepLabel", { current: stepIndex + 1, total: totalSteps })}
          </span>
          <button
            type="button"
            onClick={onSkip}
            className="shrink-0 cursor-pointer font-mono text-[0.68rem] text-muted normal-case tracking-normal underline hover:text-paper"
          >
            {t("skip")}
          </button>
        </div>

        <div className="mb-4 h-0.75 overflow-hidden rounded-full bg-paper/18">
          <div
            className="h-full rounded-full bg-amber transition-[width] duration-300 ease-out"
            style={{ width: `${((stepIndex + 1) / totalSteps) * 100}%` }}
          />
        </div>

        <p className="mb-4.5 text-[0.9rem] leading-relaxed text-paper-dim">
          {t(`steps.${step.textKey}`)}
        </p>

        <div
          className={
            isCentered
              ? "flex items-center justify-center gap-2"
              : isFirstStep
                ? "flex items-center justify-end gap-2"
                : "flex items-center justify-between gap-2"
          }
        >
          {!isFirstStep ? (
            <button
              type="button"
              onClick={onPrev}
              className="cursor-pointer rounded-md border border-paper/18 px-4 py-2.25 font-mono text-[0.78rem] text-paper-dim transition-colors hover:border-teal hover:text-paper"
            >
              {t("back")}
            </button>
          ) : null}
          <button
            type="button"
            onClick={onNext}
            className="cursor-pointer rounded-md border border-amber bg-amber px-4 py-2.25 font-mono text-[0.78rem] font-semibold text-ink transition-colors hover:bg-[#f2b25a]"
          >
            {t(step.nextLabelKey ?? "next")}
          </button>
        </div>
      </div>
    </>
  );
}
