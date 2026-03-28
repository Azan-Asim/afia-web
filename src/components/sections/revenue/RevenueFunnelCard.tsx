"use client";

import { LineIcon } from "@/components/common/icons/LineIcons";
import { accentStyles } from "@/components/common/styles/AccentStyles";
import { useInViewOnce } from "@/components/sections/opportunity/useInViewOnce";
import { revenueFunnel } from "@/content/home/revenue/RevenueContent";

export function RevenueFunnelCard() {
  const { ref, hasEntered } = useInViewOnce<HTMLDivElement>();

  return (
    <div ref={ref} className="pt-5 lg:pr-4">
      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-subtle)]">
        Revenue Funnel
      </div>
      <div className="mt-8 space-y-4">
        {revenueFunnel.map((stage, index) => {
          const styles = accentStyles[stage.accent];

          return (
            <div key={stage.label} className="flex items-center gap-4">
              <div className="w-28 text-right text-sm font-medium text-[var(--color-subtle)]">
                {stage.label}
              </div>
              <div className="h-8 flex-1 overflow-hidden rounded-xl bg-black/[0.035]">
                <div
                  className={`flex h-full items-center justify-end rounded-r-xl rounded-l-xl border-r-[1.5px] pr-3 ${styles.softSolid} ${styles.border} transition-[width,opacity] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]`}
                  style={{
                    width: hasEntered ? stage.width : "0%",
                    opacity: hasEntered ? 1 : 0,
                    transitionDelay: `${index * 120}ms`,
                  }}
                >
                  <LineIcon name={stage.icon} className={`size-4 ${styles.text}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex justify-center text-[var(--color-green)]">
        <div className="flex flex-col items-center gap-2">
          <div className="h-9 w-[2px] origin-top bg-current animate-[revenue-dollar-line-blink_2.8s_ease-in-out_infinite]" />
          <LineIcon
            name="dollar"
            className="size-[1.35rem] animate-[revenue-dollar-icon-blink_2.8s_ease-in-out_infinite]"
            style={{ animationDelay: "220ms" }}
          />
        </div>
      </div>
    </div>
  );
}
