"use client";

import { useRef, useState } from "react";

import type { KeyboardEvent, ReactNode } from "react";

export type TabPanel = {
  id: string;
  number: string;
  tabLabel: string;
  content: ReactNode;
};

type ProjectTabsProps = {
  panels: TabPanel[];
};

export function ProjectTabs({ panels }: ProjectTabsProps) {
  const [activeId, setActiveId] = useState(panels[0]?.id);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  function scrollTabIntoView(index: number) {
    tabRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "nearest",
      block: "nearest",
    });
  }

  function selectTab(index: number) {
    const panel = panels[index];
    if (!panel) return;

    setActiveId(panel.id);
    scrollTabIntoView(index);
  }

  function focusTab(index: number) {
    const count = panels.length;
    const nextIndex = (index + count) % count;
    if (!panels[nextIndex]) return;

    selectTab(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  }

  function handleKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    switch (event.key) {
      case "ArrowRight":
        event.preventDefault();
        focusTab(index + 1);
        break;
      case "ArrowLeft":
        event.preventDefault();
        focusTab(index - 1);
        break;
      case "Home":
        event.preventDefault();
        focusTab(0);
        break;
      case "End":
        event.preventDefault();
        focusTab(panels.length - 1);
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <div
        id="tabbar"
        role="tablist"
        className="scrollbar-hide mb-9 flex flex-nowrap gap-1.5 overflow-x-auto border-b border-paper/18"
      >
        {panels.map((panel, index) => {
          const isActive = panel.id === activeId;

          return (
            <button
              key={panel.id}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              id={`tab-${panel.id}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${panel.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => selectTab(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className={`relative flex shrink-0 items-center gap-2 px-4 py-3 font-mono text-[0.8rem] whitespace-nowrap tracking-[0.02em] ${
                isActive
                  ? "text-paper after:absolute after:right-4 after:bottom-[-1px] after:left-4 after:h-0.5 after:bg-amber"
                  : "text-muted hover:text-paper"
              }`}
            >
              <span className="text-amber">{panel.number}</span>
              {panel.tabLabel}
            </button>
          );
        })}
      </div>

      {panels.map((panel) => (
        <div
          key={panel.id}
          id={`panel-${panel.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${panel.id}`}
          hidden={panel.id !== activeId}
        >
          {panel.content}
        </div>
      ))}
    </div>
  );
}
