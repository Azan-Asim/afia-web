"use client";

// Five-year projection chart that compares revenue growth against user growth over time.
import { accentStyles } from "@/components/common/styles/AccentStyles";
import { useInViewOnce } from "@/components/sections/opportunity/useInViewOnce";
import { revenueProjection } from "@/content/home/investment/InvestmentContent";

export function RevenueProjectionCard() {
  const { ref, hasEntered } = useInViewOnce<HTMLDivElement>();

  return (
    <div ref={ref} className="mt-20">
      <div className="rounded-3xl border-[1.5px] border-black/[0.06] bg-white p-8 shadow-[0_4px_32px_rgba(0,0,0,0.04)]">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">
              5-Year Projection
            </div>
            <h3 className="font-[family:var(--font-display)] text-[clamp(18px,3vw,26px)] font-bold tracking-[-0.02em] text-[#2D2D2D]">
              Reaching <span className="text-[rgb(39,174,96)]">$30M ARR</span> by
              Year 5
            </h3>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-black/[0.06] bg-[rgba(39,174,96,0.08)] px-3 py-1.5">
              <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#7B8794]">
                Total ARR (5 Years)
              </span>
              <span className="text-sm font-black text-[rgb(39,174,96)]">
                $53.5M
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-xs text-[#9CA3AF]">
              <div className="size-3 rounded-sm bg-[rgba(39,174,96,0.376)]" />
              Revenue ($M)
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#9CA3AF]">
              <div className="h-1 w-3 rounded-full bg-[#2D9CDB]" />
              Users (K)
            </div>
          </div>
        </div>

        <div className="flex h-44 items-end gap-4">
          {revenueProjection.map((entry, index) => {
            const styles = accentStyles[entry.accent];
            // Larger bars can comfortably host the revenue label inside the fill.
            const showInsideBar = ["Y3", "Y4", "Y5"].includes(entry.year);

            return (
              <div
                key={entry.year}
                className="flex flex-1 flex-col items-center gap-1"
              >
                <div className="flex h-40 w-full items-end justify-center gap-1">
                  <div className="relative h-full flex-1">
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-0 rounded-t-xl border-[1.5px] ${styles.softSolid} ${styles.border} ${
                        hasEntered
                          ? "motion-safe:animate-[investment-revenue-bar-grow_880ms_cubic-bezier(0.22,1,0.36,1)_both]"
                          : "opacity-0"
                      }`}
                      style={{
                        animationDelay: `${index * 130}ms`,
                        ["--investment-bar-height" as string]: entry.revenueHeight,
                      }}
                    />
                    <span
                      className={`absolute left-1/2 -translate-x-1/2 text-[9px] font-bold ${
                        showInsideBar ? styles.text : "text-[rgb(39,174,96)]"
                      } ${
                        hasEntered
                          ? "motion-safe:animate-[investment-revenue-label-enter_420ms_ease-out_both]"
                          : "opacity-0"
                      }`}
                      style={{
                        bottom: showInsideBar
                          ? "10px"
                          : `calc(${entry.revenueHeight} + 4px)`,
                        animationDelay: `${300 + index * 130}ms`,
                      }}
                    >
                      {entry.revenue}
                    </span>
                  </div>

                  <div className="relative h-full w-2">
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-0 rounded-t-lg border border-[rgba(45,156,219,0.376)] bg-[rgba(45,156,219,0.25)] ${
                        hasEntered
                          ? "motion-safe:animate-[investment-revenue-bar-grow_760ms_cubic-bezier(0.22,1,0.36,1)_both]"
                          : "opacity-0"
                      }`}
                      style={{
                        animationDelay: `${120 + index * 130}ms`,
                        ["--investment-bar-height" as string]: entry.userHeight,
                      }}
                    />
                  </div>
                </div>

                <div className="mt-0.5 text-[10px] font-semibold text-[#9CA3AF]">
                  {entry.year}
                </div>
                <div className="text-[9px] text-[#BFBFBF]">{entry.users}</div>
              </div>
            );
          })}
        </div>

        <div className="mt-4 flex flex-wrap gap-6 border-t border-black/[0.04] pt-4">
          <div>
            <div className="text-[10px] text-[#9CA3AF]">ARR Year 1</div>
            <div className="text-xs font-bold text-[rgb(39,174,96)]">
              $0.5M
            </div>
          </div>
          <div>
            <div className="text-[10px] text-[#9CA3AF]">ARR Year 2</div>
            <div className="text-xs font-bold text-[rgb(39,174,96)]">
              $2M
            </div>
          </div>
          <div>
            <div className="text-[10px] text-[#9CA3AF]">ARR Year 3</div>
            <div className="text-xs font-bold text-[rgb(45,156,219)]">
              $6M
            </div>
          </div>
          <div>
            <div className="text-[10px] text-[#9CA3AF]">ARR Year 4</div>
            <div className="text-xs font-bold text-[rgb(45,156,219)]">
              $15M
            </div>
          </div>
          <div>
            <div className="text-[10px] text-[#9CA3AF]">ARR Year 5</div>
            <div className="text-xs font-bold text-[rgb(139,92,246)]">
              $30M
            </div>
          </div>
          <div>
            <div className="text-[10px] text-[#9CA3AF]">Total ARR(5Year)</div>
            <div className="text-xs font-bold text-[rgb(139,92,246)]">
              $53.5M
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
