"use client";

// Unit economics summary cards that highlight the key investor-facing business metrics.
import { motion } from "motion/react";

import { LineIcon } from "@/components/common/icons/LineIcons";
import { revealUp } from "@/components/common/motion/motion";
import { accentStyles } from "@/components/common/styles/AccentStyles";
import { useInViewOnce } from "@/components/sections/opportunity/useInViewOnce";
import { unitEconomics } from "@/content/home/investment/InvestmentContent";

export function UnitEconomicsGrid() {
  const { ref, hasEntered } = useInViewOnce<HTMLDivElement>();

  return (
    <div ref={ref} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {unitEconomics.map((card, index) => {
        const styles = accentStyles[card.accent];

        return (
          <motion.div
            key={card.title}
            initial="hidden"
            animate={hasEntered ? "visible" : "hidden"}
            variants={revealUp(index * 0.12, 26, 0.72)}
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
          </motion.div>
        );
      })}
    </div>
  );
}
