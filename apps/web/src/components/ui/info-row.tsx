import type { ReactNode } from "react";

type InfoRowProps = {
  label: string;
  value: ReactNode;
};

export function InfoRow({ label, value }: InfoRowProps) {
  return (
    <div className="flex justify-between border-b border-paper/10 py-3.5 font-mono text-[0.82rem] last:border-b-0">
      <span className="text-[0.72rem] tracking-[0.05em] text-muted uppercase">
        {label}
      </span>
      <span className="text-paper">{value}</span>
    </div>
  );
}
