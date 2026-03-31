"use client";

// Positive-state comparison card showing the guided experience with Afia AI.
import { LineIcon } from "@/components/common/icons/LineIcons";
import { SurfaceCard } from "@/components/common/ui/SurfaceCard";
import { useHomeContent } from "@/content/home/useHomeContent";

import { useInViewOnce } from "./useInViewOnce";

export function WithAiCard() {
  const { ref, hasEntered } = useInViewOnce<HTMLDivElement>();
  const { opportunity } = useHomeContent();

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-[2rem] border border-[color:var(--color-green-soft-border)] bg-[linear-gradient(135deg,rgba(39,174,96,0.04),rgba(45,156,219,0.04))] p-8"
    >
      <div className="mb-4 flex items-center gap-2 text-xs font-semibold text-[#27AE60]">
        <div className="size-2 rounded-full bg-[#27AE60]" />
        {opportunity.withAiLabel}
      </div>
      <div className="text-sm font-semibold text-[#27AE60]">{opportunity.withAiTitle}</div>

      <SurfaceCard className="mt-4 rounded-2xl border-[1.5px] border-[rgba(39,174,96,0.2)] p-4 shadow-[0_4px_20px_rgba(39,174,96,0.08)]">
        <div className="mb-2 flex items-center gap-2">
          <div className="flex size-7 items-center justify-center rounded-full bg-[rgba(39,174,96,0.1)]">
            <LineIcon name="sparkles" className="size-3.5 text-[#27AE60]" />
          </div>
          <span className="text-xs font-semibold leading-none text-[#2D2D2D]">{opportunity.withAiSourceLabel}</span>
        </div>
        <p className="text-sm font-medium leading-snug text-[#2D2D2D]">
          {opportunity.withAiInsight}
        </p>
        <p className="mt-1 text-xs leading-none text-[#9CA3AF]">{opportunity.withAiContext}</p>
        <div className="mt-3 flex items-center gap-2">
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#27AE60]/10">
            <div
              className="h-full rounded-full bg-[#27AE60] transition-[width] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                width: hasEntered ? "74%" : "0%",
                transitionDelay: "180ms",
              }}
            />
          </div>
          <span className="text-xs font-bold leading-none text-[#27AE60]">74</span>
          <span className="text-[9px] leading-none text-[#9CA3AF]">{opportunity.withAiScoreLabel}</span>
        </div>
      </SurfaceCard>

      <div className="mt-4 flex items-center gap-2 text-xs text-[#27AE60]">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-3.5"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
        {opportunity.withAiFooter}
      </div>
    </div>
  );
}
