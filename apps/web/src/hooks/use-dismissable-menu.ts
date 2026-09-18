"use client";

import { useEffect, useRef } from "react";

import type { Dispatch, RefObject, SetStateAction } from "react";

export function useDismissableMenu<T extends HTMLElement>(
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
): RefObject<T | null> {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  return ref;
}
