"use client";

// Revenue stream list that explains the business model across multiple monetization layers.
import { LineIcon } from "@/components/common/icons/LineIcons";
import { accentStyles } from "@/components/common/styles/AccentStyles";
import { useInViewOnce } from "@/components/sections/opportunity/useInViewOnce";
import { revenueStreams } from "@/content/home/revenue/RevenueContent";

export function RevenueStreamsList() {
  const { ref, hasEntered } = useInViewOnce<HTMLDivElement>();

  return (
    <div ref={ref} className="space-y-4">
      {revenueStreams.map((stream, index) => {
        const styles = accentStyles[stream.accent];

        return (
          <div
            key={stream.title}
            className="rounded-[1.5rem] border border-black/5 bg-[var(--color-sand)] p-5"
          >
            <div className="flex items-start gap-3">
              <div
                className={`mt-0.5 flex size-10 items-center justify-center rounded-2xl ${styles.soft} ${styles.text}`}
              >
                <LineIcon name={stream.icon} className="size-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-sm font-semibold text-[var(--color-ink)]">
                    {stream.title}
                  </h3>
                  <span className={`text-sm font-bold ${styles.text}`}>
                    {stream.share}
                  </span>
                </div>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-black/5">
                  <div
                    className={`h-full rounded-full ${styles.solid} transition-[width] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]`}
                    style={{
                      width: hasEntered ? `${stream.percent}%` : "0%",
                      transitionDelay: `${index * 140}ms`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
