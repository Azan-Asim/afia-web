"use client";

import type { Transition, Variants } from "motion/react";

export const easeOutExpo = [0.22, 1, 0.36, 1] as const;
export const easeInOutSmooth = [0.37, 0, 0.2, 1] as const;

export const revealUp = (
  delay = 0,
  distance = 24,
  duration = 0.78,
): Variants => ({
  hidden: { opacity: 0, y: distance, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay, duration, ease: easeOutExpo },
  },
});

export const revealSide = (
  delay = 0,
  distance = 28,
  duration = 0.76,
): Variants => ({
  hidden: { opacity: 0, x: distance, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { delay, duration, ease: easeOutExpo },
  },
});

export const scaleIn = (
  delay = 0,
  from = 0.24,
  duration = 0.82,
): Variants => ({
  hidden: { opacity: 0, scale: from },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay, duration, ease: easeOutExpo },
  },
});

export const fadeIn = (delay = 0, duration = 0.52): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay, duration, ease: "easeOut" },
  },
});

export const lineDraw = (
  delay = 0,
  duration = 0.9,
): Variants => ({
  hidden: { opacity: 0.2, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { delay, duration, ease: easeOutExpo },
  },
});

export const popIn = (
  delay = 0,
  from = 0.45,
  duration = 0.64,
): Variants => ({
  hidden: { opacity: 0, scale: from },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay, duration, ease: easeOutExpo },
  },
});

export const pulseLoop: Transition = {
  duration: 5.8,
  ease: "easeInOut",
  repeat: Number.POSITIVE_INFINITY,
  repeatType: "mirror",
};

export const pulseLoopFast: Transition = {
  duration: 3.2,
  ease: "easeInOut",
  repeat: Number.POSITIVE_INFINITY,
  repeatType: "mirror",
};

export const driftLoop = (duration: number, delay = 0): Transition => ({
  duration,
  delay,
  ease: "easeInOut",
  repeat: Number.POSITIVE_INFINITY,
  repeatType: "mirror",
});
