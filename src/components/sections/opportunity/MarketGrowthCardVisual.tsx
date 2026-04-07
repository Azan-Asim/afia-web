"use client";

// Illustration for the market-growth card in the opportunity highlights section.
import { motion, useReducedMotion } from "motion/react";

import { driftLoop, lineDraw, popIn, revealUp } from "@/components/common/motion/motion";
import { useInViewOnce } from "./useInViewOnce";

const chartLine = "20,72 40,58 60,42 80,24 100,4";

export function MarketGrowthCardVisual() {
  const { ref, hasEntered } = useInViewOnce<HTMLDivElement>();
  const reduceMotion = useReducedMotion();

  return (
    <div ref={ref} className="h-full w-full">
      <svg viewBox="0 0 120 110" fill="none" className="h-full w-full">
        {[20, 45, 70, 95].map((y) => (
          <line
            key={y}
            x1="6"
            y1={y}
            x2="114"
            y2={y}
            stroke="#2D9CDB26"
            strokeWidth="1.25"
            strokeDasharray="3 4"
          />
        ))}

        <motion.polyline
          points={chartLine}
          stroke="#2D9CDB"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial="hidden"
          animate={hasEntered ? "visible" : "hidden"}
          variants={lineDraw(0.18, 1)}
        />

        <motion.rect
          x="92"
          y="4"
          width="16"
          height="96"
          rx="4"
          fill="#2D9CDB"
          initial="hidden"
          animate={hasEntered ? "visible" : "hidden"}
          variants={revealUp(0.34, 28, 0.74)}
          style={{ transformOrigin: "center bottom", transformBox: "fill-box" }}
        />

        <motion.circle
          cx="100"
          cy="4"
          r="4"
          fill="#2D9CDB"
          initial="hidden"
          animate={hasEntered ? "visible" : "hidden"}
          variants={popIn(0.8, 0.25, 0.58)}
        />

        <motion.rect
          x="90.5"
          y="2"
          width="19"
          height="8"
          rx="4"
          fill="#2D9CDB"
          initial={{ opacity: 0 }}
          animate={{ opacity: hasEntered ? 1 : 0 }}
          transition={{ duration: 0.24, delay: 0.92 }}
        />

        <line x1="6" y1="100" x2="114" y2="100" stroke="#2D9CDB42" strokeWidth="1.7" />

        <motion.path
          d="M 20 72 Q 61 46 100 4"
          stroke="#2D9CDB22"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
          animate={
            reduceMotion
              ? undefined
              : {
                  opacity: [0.18, 0.34, 0.18],
                  scale: [0.98, 1.02, 0.98],
                }
          }
          transition={reduceMotion ? undefined : driftLoop(3.6)}
          style={{ transformOrigin: "60px 50px" }}
        />
      </svg>
    </div>
  );
}
