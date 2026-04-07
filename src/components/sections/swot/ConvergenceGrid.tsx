"use client";

// Four-card convergence block that explains why the current market timing is compelling.
import { motion, useReducedMotion } from "motion/react";

import { driftLoop, revealUp } from "@/components/common/motion/motion";
import { useInViewOnce } from "@/components/sections/opportunity/useInViewOnce";
import { convergenceItems } from "@/content/home/swot/SwotContent";

const convergenceCardStyleMap = {
  green: {
    background:
      "linear-gradient(135deg, rgba(39, 174, 96, 0.07), rgba(39, 174, 96, 0.03))",
    border: "1.5px solid rgba(39, 174, 96, 0.24)",
  },
  blue: {
    background:
      "linear-gradient(135deg, rgba(45, 156, 219, 0.07), rgba(45, 156, 219, 0.03))",
    border: "1.5px solid rgba(45, 156, 219, 0.24)",
  },
  pink: {
    background:
      "linear-gradient(135deg, rgba(236, 72, 153, 0.07), rgba(236, 72, 153, 0.03))",
    border: "1.5px solid rgba(236, 72, 153, 0.24)",
  },
  orange: {
    background:
      "linear-gradient(135deg, rgba(245, 158, 11, 0.07), rgba(245, 158, 11, 0.03))",
    border: "1.5px solid rgba(245, 158, 11, 0.24)",
  },
} as const;

type ConvergenceAccent = keyof typeof convergenceCardStyleMap;

const defaultConvergenceCardStyle = {
  background: "white",
  border: "1.5px solid rgba(0, 0, 0, 0.06)",
} as const;

function GrowthVisual({ color }: { color: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <svg viewBox="0 0 120 110" fill="none" className="h-full w-full">
      {[20, 45, 70, 95].map((y) => (
        <line
          key={y}
          x1="6"
          y1={y}
          x2="114"
          y2={y}
          stroke={`${color}32`}
          strokeWidth="1.2"
          strokeDasharray="3 4"
        />
      ))}

      <motion.rect
        x="92"
        y="4"
        width="16"
        height="96"
        rx="4"
        fill={color}
        initial={{ opacity: 0, scaleY: 0 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.74, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "center bottom", transformBox: "fill-box" }}
      />

      <motion.polyline
        points="20,72 40,58 60,42 80,24 100,4"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ opacity: 0.25, pathLength: 0 }}
        whileInView={{ opacity: 1, pathLength: 1 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 1, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.circle
        cx="100"
        cy="4"
        r="4"
        fill={color}
        initial={{ opacity: 0, scale: 0.25 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.58, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />

      <line x1="6" y1="100" x2="114" y2="100" stroke={`${color}48`} strokeWidth="1.7" />

      <motion.path
        d="M 20 72 Q 61 46 100 4"
        stroke={`${color}22`}
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
        animate={reduceMotion ? undefined : { opacity: [0.18, 0.34, 0.18], scale: [0.98, 1.02, 0.98] }}
        transition={reduceMotion ? undefined : driftLoop(3.6)}
        style={{ transformOrigin: "60px 50px" }}
      />
    </svg>
  );
}

function WatchVisual({ color }: { color: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <svg viewBox="0 0 120 130" fill="none" className="h-full w-full">
      <rect
        x="44"
        y="4"
        width="32"
        height="16"
        rx="5"
        fill={`${color}2C`}
        stroke={`${color}68`}
        strokeWidth="1.7"
      />
      <rect
        x="44"
        y="110"
        width="32"
        height="16"
        rx="5"
        fill={`${color}2C`}
        stroke={`${color}68`}
        strokeWidth="1.7"
      />
      <rect
        x="22"
        y="19"
        width="76"
        height="72"
        rx="22"
        fill="white"
        stroke={`${color}4A`}
        strokeWidth="1.7"
      />
      <rect x="22" y="19" width="76" height="72" rx="22" fill={`${color}10`} />
      <rect x="30" y="27" width="60" height="56" rx="16" fill={`${color}14`} />

      <motion.polyline
        points="32,55 40,55 45,38 52,72 59,48 65,55 73,55 79,42 86,55 92,55"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ opacity: 0.18, pathLength: 0 }}
        animate={
          reduceMotion
            ? { opacity: 0.95, pathLength: 1 }
            : { opacity: [0.18, 0.95, 0.95, 0.18], pathLength: [0, 1, 1, 0] }
        }
        transition={
          reduceMotion
            ? { duration: 0.4 }
            : { duration: 5.8, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }
        }
      />

      <motion.circle
        cx="92"
        cy="55"
        r="3.5"
        fill={color}
        initial={{ opacity: 0, scale: 0.3 }}
        animate={
          reduceMotion
            ? { opacity: 0.95, scale: 1 }
            : { opacity: [0, 0, 0.95, 0.55, 0], scale: [0, 0, 1, 1.22, 0.52] }
        }
        transition={
          reduceMotion
            ? { duration: 0.3 }
            : { duration: 5.8, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }
        }
      />

      <motion.circle
        cx="60"
        cy="55"
        r="18"
        stroke={color}
        strokeWidth="1.4"
        fill="none"
        initial={{ opacity: 0.34, scale: 0.94 }}
        animate={reduceMotion ? undefined : { opacity: [0.3, 0.16, 0], scale: [0.94, 1.06, 1.18] }}
        transition={reduceMotion ? undefined : { duration: 5.8, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
        style={{ transformOrigin: "60px 55px" }}
      />

      <motion.circle
        cx="60"
        cy="55"
        r="36"
        stroke={color}
        strokeWidth="1.3"
        fill="none"
        initial={{ opacity: 0, scale: 0.82 }}
        animate={reduceMotion ? undefined : { opacity: [0, 0.16, 0], scale: [0.82, 1.1, 1.22] }}
        transition={reduceMotion ? undefined : { duration: 5.8, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
        style={{ transformOrigin: "60px 55px" }}
      />
    </svg>
  );
}

function NetworkVisual() {
  const reduceMotion = useReducedMotion();
  const nodes = [
    { x: 16, y: 24, delay: 0 },
    { x: 16, y: 55, delay: 0.24 },
    { x: 16, y: 86, delay: 0.48 },
    { x: 60, y: 14, delay: 0.72 },
    { x: 60, y: 55, delay: 0.96 },
    { x: 60, y: 96, delay: 1.2 },
    { x: 104, y: 36, delay: 1.44 },
    { x: 104, y: 74, delay: 1.68 },
  ] as const;
  const lines = [
    [16, 24, 60, 14],
    [16, 24, 60, 55],
    [16, 24, 60, 96],
    [16, 55, 60, 14],
    [16, 55, 60, 55],
    [16, 55, 60, 96],
    [16, 86, 60, 14],
    [16, 86, 60, 55],
    [16, 86, 60, 96],
    [60, 14, 104, 36],
    [60, 14, 104, 74],
    [60, 55, 104, 36],
    [60, 55, 104, 74],
    [60, 96, 104, 36],
    [60, 96, 104, 74],
  ] as const;

  return (
    <svg viewBox="0 0 120 110" fill="none" className="h-full w-full">
      {lines.map(([x1, y1, x2, y2], index) => (
        <motion.line
          key={`${x1}-${y1}-${x2}-${y2}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#EC489962"
          strokeWidth="1.2"
          animate={reduceMotion ? undefined : { opacity: [0.36, 0.82, 0.36] }}
          transition={
            reduceMotion
              ? undefined
              : { duration: 2.8, delay: index * 0.08, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }
          }
        />
      ))}

      {nodes.map((node) => (
        <motion.circle
          key={`${node.x}-${node.y}`}
          cx={node.x}
          cy={node.y}
          r="7"
          fill="#EC489924"
          stroke="#EC489988"
          strokeWidth="1.7"
          animate={reduceMotion ? undefined : { r: [7, 8.2, 7], opacity: [0.64, 1, 0.64] }}
          transition={
            reduceMotion
              ? undefined
              : { duration: 3.1, delay: node.delay, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }
          }
        />
      ))}

      <motion.circle
        cx="60"
        cy="55"
        r="7"
        fill="#EC4899"
        animate={reduceMotion ? undefined : { r: [7, 9.2, 7], opacity: [0.35, 0.95, 0.35] }}
        transition={reduceMotion ? undefined : { duration: 2.5, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
      />
    </svg>
  );
}

function GapVisual({ accent }: { accent: "orange" | "purple" }) {
  const reduceMotion = useReducedMotion();
  const color = accent === "orange" ? "#F59E0B" : "#8B5CF6";

  return (
    <svg viewBox="0 0 120 110" fill="none" className="h-full w-full">
      {[24, 55, 86].map((y, index) => (
        <g key={`left-${accent}-${y}`}>
          <line
            x1="26"
            y1={y}
            x2="50"
            y2="55"
            stroke={`${color}A0`}
            strokeWidth="1.45"
            strokeDasharray="4 3"
            opacity={index === 1 ? 0.76 : 0.84}
          />
          <motion.circle
            cx="18"
            cy={y}
            r="8"
            fill={`${color}38`}
            stroke={`${color}C8`}
            strokeWidth="1.9"
            animate={reduceMotion ? undefined : { opacity: [0.45, 0.95, 0.45], scale: [0.92, 1.1, 0.92] }}
            transition={
              reduceMotion
                ? undefined
                : { duration: 4.2 + index * 0.45, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }
            }
            style={{ transformOrigin: `18px ${y}px` }}
          />
        </g>
      ))}

      <motion.circle
        cx="60"
        cy="55"
        r="24"
        fill={accent === "orange" ? "rgba(245,158,11,0.12)" : "rgba(139,92,246,0.08)"}
        stroke={`${color}E0`}
        strokeWidth="2.1"
        strokeDasharray="6 4"
        animate={reduceMotion ? undefined : { opacity: [0.82, 1, 0.82], scale: [0.92, 1.06, 0.92] }}
        transition={reduceMotion ? undefined : { duration: 4.8, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
        style={{ transformOrigin: "60px 55px" }}
      />

      <motion.text
        x="60"
        y="62"
        textAnchor="middle"
        fill={`${color}FF`}
        style={{ fontSize: 22, fontWeight: 800, fontFamily: "Inter, sans-serif" }}
        animate={reduceMotion ? undefined : { opacity: [0.82, 1, 0.82] }}
        transition={reduceMotion ? undefined : { duration: 4.8, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
      >
        ?
      </motion.text>

      {[24, 55, 86].map((y, index) => (
        <g key={`right-${accent}-${y}`}>
          <line
            x1="70"
            y1="55"
            x2="94"
            y2={y}
            stroke={`${color}A0`}
            strokeWidth="1.45"
            strokeDasharray="4 3"
            opacity={index === 1 ? 0.7 : 0.62}
          />
          <motion.circle
            cx="102"
            cy={y}
            r="8"
            fill={`${color}18`}
            stroke={`${color}88`}
            strokeWidth="1.9"
            strokeDasharray="4 3"
            animate={
              reduceMotion
                ? undefined
                : {
                    opacity: [0.48 + index * 0.05, 0.78 + index * 0.08, 0.48 + index * 0.05],
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

function ConvergenceVisual({ index }: { index: number }) {
  if (index === 0) {
    return <GrowthVisual color="#27AE60" />;
  }

  if (index === 1) {
    return <WatchVisual color="#2D9CDB" />;
  }

  if (index === 2) {
    return <NetworkVisual />;
  }

  return <GapVisual accent="orange" />;
}

export function ConvergenceGrid() {
  const { ref, hasEntered } = useInViewOnce<HTMLDivElement>();

  return (
    <div ref={ref} className="mt-10 grid grid-cols-2 gap-3.5 md:grid-cols-4">
      {convergenceItems.map((item, index) => {
        const cardStyle =
          convergenceCardStyleMap[item.accent as ConvergenceAccent] ??
          defaultConvergenceCardStyle;

        return (
          <motion.div
            key={item.label}
            className="mx-auto flex w-full max-w-[17.5rem] flex-col items-center rounded-[1.5rem] px-4 pb-1.5 pt-4 text-center shadow-[0_6px_20px_rgba(0,0,0,0.05)]"
            initial="hidden"
            animate={hasEntered ? "visible" : "hidden"}
            variants={revealUp(index * 0.12, 26, 0.76)}
            style={cardStyle}
          >
            <div className="mb-2 flex h-11 w-full justify-center">
              <ConvergenceVisual index={index} />
            </div>
            <div className="mb-1 text-[1.35rem] font-bold text-[#2D2D2D]">{item.value}</div>
            <div className="text-[0.8rem] font-medium text-[#64748B]">{item.label}</div>
          </motion.div>
        );
      })}
    </div>
  );
}
