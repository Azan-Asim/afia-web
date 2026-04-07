"use client";

// Funnel visualization that shows how audience reach converts into monetizable opportunity.
import { motion, useReducedMotion } from "motion/react";

import { LineIcon } from "@/components/common/icons/LineIcons";
import { driftLoop } from "@/components/common/motion/motion";
import { accentStyles } from "@/components/common/styles/AccentStyles";
import { useInViewOnce } from "@/components/sections/opportunity/useInViewOnce";
import { revenueFunnel } from "@/content/home/revenue/RevenueContent";

export function RevenueFunnelCard() {
  const { ref, hasEntered } = useInViewOnce<HTMLDivElement>();
  const reduceMotion = useReducedMotion();

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
                <motion.div
                  className={`flex h-full items-center justify-end rounded-r-xl rounded-l-xl border-r-[1.5px] pr-3 ${styles.softSolid} ${styles.border}`}
                  initial={{ width: "0%", opacity: 0 }}
                  animate={{ width: hasEntered ? stage.width : "0%", opacity: hasEntered ? 1 : 0 }}
                  transition={{ duration: 1, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  <LineIcon name={stage.icon} className={`size-4 ${styles.text}`} />
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex justify-center text-[var(--color-green)]">
        <motion.div
          className="flex origin-center transform-gpu flex-col items-center gap-2 opacity-100 will-change-transform"
          animate={reduceMotion ? undefined : { opacity: [0.78, 1, 0.78], y: [0, -1, 0], scale: [0.9, 1.08, 0.9] }}
          transition={reduceMotion ? undefined : driftLoop(5.2)}
        >
          <div className="h-9 w-[2px] origin-top bg-current/70" />
          <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[rgba(39,174,96,0.08)]">
            <span className="block text-[1.15rem] font-bold leading-none">$</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
