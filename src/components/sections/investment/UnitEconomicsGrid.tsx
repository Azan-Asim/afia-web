"use client";

// Unit economics summary cards that highlight the key investor-facing business metrics.
import { LineIcon } from "@/components/common/icons/LineIcons";
import { accentStyles } from "@/components/common/styles/AccentStyles";
import { useInViewOnce } from "@/components/sections/opportunity/useInViewOnce";
import { useHomeContent } from "@/content/home/useHomeContent";

export function UnitEconomicsGrid() {
  const { ref, hasEntered } = useInViewOnce<HTMLDivElement>();
  const { investment } = useHomeContent();

  return (
    <div ref={ref} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {investment.unitEconomics.map((card, index) => {
        const styles = accentStyles[card.accent];

        return (
          <div
            key={card.id}
            className={`${
              hasEntered
                ? "motion-safe:animate-[investment-metric-card-enter_720ms_cubic-bezier(0.22,1,0.36,1)_both]"
                : "opacity-0"
            }`}
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <div className="group rounded-2xl border-[1.5px] border-black/[0.06] bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]">
              <div
                className={`mb-3 flex size-9 items-center justify-center rounded-xl ${styles.soft} ${styles.text} transition-transform duration-300 group-hover:scale-105`}
              >
                <LineIcon name={card.icon} className="size-5" />
              </div>
              <div className="mb-0.5 text-[1.4rem] font-black tracking-[-0.03em] text-[#2D2D2D]">
                {card.value}
              </div>
              <div className="mb-0.5 text-xs font-semibold text-[#4B5563]">
                {card.title}
              </div>
              <div className="text-[10px] text-[#9CA3AF]">
                {card.description}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
