// Lightweight card wrapper used where sections need a consistent elevated surface style.
import type { ReactNode } from "react";

type SurfaceCardProps = {
  children: ReactNode;
  className?: string;
};

export function SurfaceCard({
  children,
  className = "",
}: SurfaceCardProps) {
  return (
    <div
      className={`rounded-[2rem] border border-black/6 bg-white shadow-[0_10px_32px_rgba(17,24,39,0.05)] ${className}`}
    >
      {children}
    </div>
  );
}
