"use client";

// Illustration for the wearable adoption card in the opportunity highlights section.
import { motion, useReducedMotion } from "motion/react";

import { popIn, pulseLoop } from "@/components/common/motion/motion";

const waveform = "32,55 40,55 45,38 52,72 59,48 65,55 73,55 79,42 86,55 92,55";

export function WearablesCardVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <svg viewBox="0 0 120 130" fill="none" className="h-full w-full">
      <rect x="44" y="4" width="32" height="16" rx="5" fill="#27AE6058" stroke="#27AE60D8" strokeWidth="2" />
      <rect x="44" y="110" width="32" height="16" rx="5" fill="#27AE6058" stroke="#27AE60D8" strokeWidth="2" />
      <rect x="22" y="19" width="76" height="72" rx="22" fill="white" stroke="#27AE60C8" strokeWidth="2" />
      <rect x="22" y="19" width="76" height="72" rx="22" fill="#27AE6026" />
      <rect x="30" y="27" width="60" height="56" rx="16" fill="#27AE6030" />

      <motion.polyline
        points={waveform}
        stroke="#27AE60"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ opacity: 0.2, pathLength: 0 }}
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
        r="4.2"
        fill="#27AE60"
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
        stroke="#27AE60"
        strokeWidth="1.9"
        fill="none"
        initial={{ opacity: 0.62, scale: 0.94 }}
        animate={reduceMotion ? undefined : { opacity: [0.58, 0.3, 0], scale: [0.94, 1.06, 1.18] }}
        transition={reduceMotion ? undefined : pulseLoop}
        style={{ transformOrigin: "60px 55px" }}
      />

      <motion.circle
        cx="60"
        cy="55"
        r="36"
        stroke="#27AE60"
        strokeWidth="1.8"
        fill="none"
        initial={{ opacity: 0, scale: 0.82 }}
        animate={reduceMotion ? undefined : { opacity: [0, 0.34, 0], scale: [0.82, 1.1, 1.22] }}
        transition={reduceMotion ? undefined : pulseLoop}
        style={{ transformOrigin: "60px 55px" }}
      />

      <motion.circle
        cx="60"
        cy="55"
        r="2.5"
        fill="#27AE60"
        initial="hidden"
        animate="visible"
        variants={popIn(0.1, 0.35, 0.5)}
      />
    </svg>
  );
}
