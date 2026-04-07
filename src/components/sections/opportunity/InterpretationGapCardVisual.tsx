"use client";

// Illustration for the interpretation-gap card in the opportunity highlights section.
import { motion, useReducedMotion } from "motion/react";

import { driftLoop, pulseLoopFast } from "@/components/common/motion/motion";

const leftNodes = [24, 55, 86] as const;
const rightNodes = [24, 55, 86] as const;

export function InterpretationGapCardVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <svg viewBox="0 0 120 110" fill="none" className="h-full w-full">
      {leftNodes.map((y, index) => (
        <g key={`left-${y}`}>
          <line
            x1="26"
            y1={y}
            x2="50"
            y2="55"
            stroke="#8B5CF66E"
            strokeWidth="1.25"
            strokeDasharray="4 3"
            opacity={index === 1 ? 0.52 : 0.6}
          />
          <motion.circle
            cx="18"
            cy={y}
            r="8"
            fill="#8B5CF62A"
            stroke="#8B5CF688"
            strokeWidth="1.7"
            animate={reduceMotion ? undefined : { opacity: [0.45, 0.95, 0.45], scale: [0.92, 1.1, 0.92] }}
            transition={reduceMotion ? undefined : { ...pulseLoopFast, delay: index * 0.14 }}
            style={{ transformOrigin: `18px ${y}px` }}
          />
        </g>
      ))}

      <motion.circle
        cx="60"
        cy="55"
        r="24"
        fill="rgba(139,92,246,0.08)"
        stroke="#8B5CF688"
        strokeWidth="1.8"
        strokeDasharray="6 4"
        animate={reduceMotion ? undefined : { opacity: [0.5, 0.9, 0.5], scale: [0.92, 1.06, 0.92] }}
        transition={reduceMotion ? undefined : { ...driftLoop(4.8), repeatType: "mirror" }}
        style={{ transformOrigin: "60px 55px" }}
      />

      <motion.text
        x="60"
        y="62"
        textAnchor="middle"
        fill="#8B5CF6D0"
        style={{ fontSize: 22, fontWeight: 800, fontFamily: "Inter, sans-serif" }}
        animate={reduceMotion ? undefined : { opacity: [0.65, 1, 0.65] }}
        transition={reduceMotion ? undefined : { duration: 4.8, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
      >
        ?
      </motion.text>

      {rightNodes.map((y, index) => (
        <g key={`right-${y}`}>
          <line
            x1="70"
            y1="55"
            x2="94"
            y2={y}
            stroke="#8B5CF652"
            strokeWidth="1.25"
            strokeDasharray="4 3"
            opacity={index === 1 ? 0.48 : 0.42}
          />
          <motion.circle
            cx="102"
            cy={y}
            r="8"
            fill="rgba(139,92,246,0.06)"
            stroke="rgba(139,92,246,0.34)"
            strokeWidth="1.7"
            strokeDasharray="4 3"
            animate={
              reduceMotion
                ? undefined
                : {
                    opacity: [0.28 + index * 0.04, 0.52 + index * 0.08, 0.28 + index * 0.04],
                    scale: [0.88, 1.1, 0.88],
                  }
            }
            transition={
              reduceMotion
                ? undefined
                : { duration: 4.6 + index * 0.35, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }
            }
            style={{ transformOrigin: `102px ${y}px` }}
          />
        </g>
      ))}
    </svg>
  );
}
