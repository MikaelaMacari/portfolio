import type { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
  variant?: "default" | "highlighted";
};

export function Tag({ children, variant = "default" }: TagProps) {
  return (
    <span
      className={
        variant === "highlighted"
          ? "rounded-[5px] border border-amber px-2.5 py-1.5 font-mono text-[0.74rem] text-amber"
          : "rounded-[5px] border border-paper/18 px-2.5 py-1.5 font-mono text-[0.74rem] text-paper-dim"
      }
    >
      {children}
    </span>
  );
}
