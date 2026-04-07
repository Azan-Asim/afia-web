"use client";

// Custom SVG visuals that give each platform capability card a distinct illustration.
import type { ReactElement } from "react";
import { motion, useReducedMotion } from "motion/react";

type PlatformCapabilityTitle =
  | "Device Agnostic"
  | "AI Interpretation"
  | "Family Intelligence"
  | "Privacy First";

function DeviceAgnosticVisual() {
  const reduceMotion = useReducedMotion();
  const nodes = [
    { x: 60, y: 14, delay: 0 },
    { x: 100, y: 38, delay: 0.45 },
    { x: 100, y: 72, delay: 0.9 },
    { x: 60, y: 96, delay: 1.35 },
    { x: 20, y: 72, delay: 1.8 },
    { x: 20, y: 38, delay: 2.25 },
  ] as const;

  return (
    <svg viewBox="0 0 120 110" fill="none" className="h-full w-full">
      {nodes.map((node) => (
        <g key={`${node.x}-${node.y}`}>
          <motion.line
            x1="60"
            y1="55"
            x2={node.x}
            y2={node.y}
            stroke="#27AE6068"
            strokeWidth="1.5"
            strokeDasharray="4 3"
            animate={reduceMotion ? undefined : { opacity: [0.5, 0.9, 0.5] }}
            transition={
              reduceMotion
                ? undefined
                : { duration: 3.4, delay: node.delay, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }
            }
          />
          <motion.circle
            cx={node.x}
            cy={node.y}
            r="9"
            fill="#27AE6022"
            stroke="#27AE6076"
            strokeWidth="1.7"
            animate={reduceMotion ? undefined : { r: [9, 10.2, 9], opacity: [0.65, 1, 0.65] }}
            transition={
              reduceMotion
                ? undefined
                : { duration: 3.4, delay: node.delay, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }
            }
          />
        </g>
      ))}

      <circle cx="60" cy="55" r="16" fill="#27AE6028" stroke="#27AE607A" strokeWidth="1.7" />
      <motion.circle
        cx="60"
        cy="55"
        r="16"
        stroke="#27AE60"
        strokeWidth="1.7"
        fill="none"
        animate={reduceMotion ? undefined : { opacity: [0, 0.55, 0], r: [16, 20, 21.5] }}
        transition={reduceMotion ? undefined : { duration: 2.8, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
      />
    </svg>
  );
}

function AiInterpretationVisual() {
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
          stroke="#2D9CDB62"
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
          fill="#2D9CDB24"
          stroke="#2D9CDB88"
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
        fill="#2D9CDB"
        animate={reduceMotion ? undefined : { r: [7, 9.2, 7], opacity: [0.35, 0.95, 0.35] }}
        transition={reduceMotion ? undefined : { duration: 2.5, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
      />
    </svg>
  );
}

function FamilyIntelligenceVisual() {
  const reduceMotion = useReducedMotion();
  const faces = [
    {
      x: 28,
      y: 38,
      r: 16,
      eye: 5.12,
      mouth: "M19.2,42.48 Q28,49.52 36.8,42.48",
      delay: 0,
    },
    {
      x: 92,
      y: 38,
      r: 16,
      eye: 5.12,
      mouth: "M83.2,42.48 Q92,49.52 100.8,42.48",
      delay: 0.6,
    },
    {
      x: 60,
      y: 82,
      r: 12,
      eye: 3.84,
      mouth: "M53.4,85.36 Q60,90.64 66.6,85.36",
      delay: 1.2,
    },
  ] as const;

  return (
    <svg viewBox="0 0 120 110" fill="none" className="h-full w-full">
      <motion.circle
        cx="60"
        cy="55"
        r="20"
        fill="#8B5CF618"
        stroke="#8B5CF642"
        strokeWidth="1.2"
        animate={reduceMotion ? undefined : { opacity: [0.6, 0.9, 0.6] }}
        transition={reduceMotion ? undefined : { duration: 4.6, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
      />

      <motion.line
        x1="28"
        y1="38"
        x2="92"
        y2="38"
        stroke="#8B5CF672"
        strokeWidth="1.6"
        strokeDasharray="4 3"
        animate={reduceMotion ? undefined : { opacity: [0.5, 0.92, 0.5] }}
        transition={reduceMotion ? undefined : { duration: 4, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.line
        x1="28"
        y1="38"
        x2="60"
        y2="82"
        stroke="#8B5CF672"
        strokeWidth="1.6"
        strokeDasharray="4 3"
        animate={reduceMotion ? undefined : { opacity: [0.5, 0.92, 0.5] }}
        transition={reduceMotion ? undefined : { duration: 4, delay: 0.3, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.line
        x1="92"
        y1="38"
        x2="60"
        y2="82"
        stroke="#8B5CF672"
        strokeWidth="1.6"
        strokeDasharray="4 3"
        animate={reduceMotion ? undefined : { opacity: [0.5, 0.92, 0.5] }}
        transition={reduceMotion ? undefined : { duration: 4, delay: 0.6, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
      />

      {faces.map((face) => (
        <motion.g
          key={`${face.x}-${face.y}`}
          animate={reduceMotion ? undefined : { scale: [0.96, 1.06, 0.96] }}
          transition={reduceMotion ? undefined : { duration: 4, delay: face.delay, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
          style={{ transformOrigin: `${face.x}px ${face.y}px` }}
        >
          <motion.circle
            cx={face.x}
            cy={face.y}
            r={face.r}
            fill="#8B5CF626"
            stroke="#8B5CF688"
            strokeWidth="1.7"
            animate={reduceMotion ? undefined : { opacity: [0.62, 1, 0.62] }}
            transition={reduceMotion ? undefined : { duration: 4, delay: face.delay, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.circle
            cx={face.x}
            cy={face.y - face.r * 0.3}
            r={face.eye}
            fill="#8B5CF68C"
            animate={reduceMotion ? undefined : { opacity: [0.55, 1, 0.55] }}
            transition={reduceMotion ? undefined : { duration: 4, delay: face.delay, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.path
            d={face.mouth}
            stroke="#8B5CF69A"
            strokeWidth="1.7"
            fill="none"
            strokeLinecap="round"
            animate={reduceMotion ? undefined : { opacity: [0.52, 0.92, 0.52] }}
            transition={reduceMotion ? undefined : { duration: 4, delay: face.delay, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.g>
      ))}
    </svg>
  );
}

function PrivacyFirstVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <svg viewBox="0 0 120 110" fill="none" className="h-full w-full">
      {[20, 40, 60].map((radius, index) => (
        <motion.circle
          key={radius}
          cx="60"
          cy="58"
          r={radius}
          stroke={index === 0 ? "#F59E0BA0" : index === 1 ? "#F59E0B72" : "#F59E0B48"}
          strokeWidth="1.25"
          fill="none"
          strokeDasharray="5 4"
          animate={
            reduceMotion
              ? undefined
              : {
                  r: [radius * 0.97, radius * 1.04, radius * 0.97],
                  opacity: [0.52 + index * 0.1, 0.96, 0.52 + index * 0.1],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : { duration: 3.2 + index * 0.4, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }
          }
        />
      ))}

      <motion.path
        d="M60,10 L90,24 L90,56 Q90,80 60,92 Q30,80 30,56 L30,24 Z"
        fill="#F59E0B20"
        stroke="#F59E0B88"
        strokeWidth="1.7"
        animate={reduceMotion ? undefined : { opacity: [0.72, 1, 0.72] }}
        transition={reduceMotion ? undefined : { duration: 3.4, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
      />
      <rect x="50" y="52" width="20" height="15" rx="4" fill="#F59E0B40" stroke="#F59E0BA0" strokeWidth="1.7" />
      <path
        d="M53,52 L53,46 Q53,40 60,40 Q67,40 67,46 L67,52"
        stroke="#F59E0BAA"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <motion.circle
        cx="60"
        cy="59.5"
        r="2.5"
        fill="#F59E0BDD"
        animate={reduceMotion ? undefined : { opacity: [0.45, 1, 0.45] }}
        transition={reduceMotion ? undefined : { duration: 2.6, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
      />
    </svg>
  );
}

const capabilityVisualMap: Record<PlatformCapabilityTitle, () => ReactElement> = {
  "Device Agnostic": DeviceAgnosticVisual,
  "AI Interpretation": AiInterpretationVisual,
  "Family Intelligence": FamilyIntelligenceVisual,
  "Privacy First": PrivacyFirstVisual,
};

// Match each capability title to a dedicated visual while keeping fallback rendering safe.
export function PlatformCapabilityVisual({ title }: { title: string }) {
  const Visual = capabilityVisualMap[title as PlatformCapabilityTitle] ?? PrivacyFirstVisual;

  return <Visual />;
}
