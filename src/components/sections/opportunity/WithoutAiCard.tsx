"use client";

// Problem-state comparison card showing the fragmented experience without Afia AI.
import { motion, useReducedMotion } from "motion/react";

import { accentStyles } from "@/components/common/styles/AccentStyles";
import { driftLoop, pulseLoopFast, revealUp } from "@/components/common/motion/motion";
import type { Accent } from "@/types/home/Home";

const currentSignals: Array<[string, string, Accent]> = [
  ["HRV", "42ms", "red"],
  ["SpO2", "97%", "orange"],
  ["Steps", "8,240", "orange"],
  ["Sleep", "7h 20m", "pink"],
  ["Stress", "34", "red"],
  ["Calories", "1,840", "orange"],
];

export function WithoutAiCard() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="relative overflow-hidden rounded-[2rem] border border-[color:var(--color-red-soft-border)] bg-[rgba(239,68,68,0.12)] px-8 py-7"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={revealUp(0, 20, 0.72)}
    >
      <div className="mb-4 flex items-center gap-2 text-xs font-semibold text-[#FF6B6B]">
        <div className="size-2 rounded-full bg-red-400" />
        Without AI
      </div>
      <div className="text-[1.05rem] font-semibold text-[#FF4D4F]">Raw Data Overload</div>
      <div className="mt-5 grid grid-cols-3 gap-2.5">
        {currentSignals.map(([label, value, accent], index) => {
          const styles = accentStyles[accent];

          return (
            <motion.div
              key={label}
              className={`flex min-h-[3.7rem] flex-col items-center justify-center rounded-[0.95rem] border px-3 py-2 text-center ${styles.border}`}
              style={{
                background:
                  accent === "orange"
                    ? "rgba(249,115,22,0.08)"
                    : accent === "pink"
                      ? "rgba(236,72,153,0.08)"
                      : "rgba(239,68,68,0.08)",
              }}
              animate={
                reduceMotion
                  ? undefined
                  : { rotate: index < 3 ? [0, 1.85, 0] : [0, -1.85, 0] }
              }
              transition={reduceMotion ? undefined : driftLoop(5.4, index * 0.08)}
            >
              <div className="text-[10px] leading-none text-[#64748B]">{label}</div>
              <div className={`mt-1.5 text-[1.02rem] font-bold leading-none ${styles.text}`}>{value}</div>
            </motion.div>
          );
        })}
      </div>
      <div className="mt-5 flex items-center gap-2 text-xs text-[#FF6B6B]">
        <motion.div
          className="size-2 rounded-full bg-red-400"
          animate={reduceMotion ? undefined : { opacity: [0.35, 1, 0.35], scale: [0.85, 1.15, 0.85] }}
          transition={reduceMotion ? undefined : pulseLoopFast}
        />
        No guidance provided
      </div>
    </motion.div>
  );
}
