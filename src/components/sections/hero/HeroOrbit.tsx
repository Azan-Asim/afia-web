"use client";

// Orbiting hero illustration layer that visualizes connected signals around the core product.
import { motion, useReducedMotion } from "motion/react";

import { driftLoop } from "@/components/common/motion/motion";
import { heroOrbitNodes } from "@/components/sections/hero/HeroVisualData";

const heroOrbitPairs = [
  [heroOrbitNodes[0], heroOrbitNodes[3]],
  [heroOrbitNodes[1], heroOrbitNodes[4]],
  [heroOrbitNodes[2], heroOrbitNodes[5]],
] as const;

function createOpacityFrames(baseOpacity: number, reverse = false) {
  const lowOpacity = Math.max(0.18, baseOpacity * 0.68);
  const midOpacity = Math.min(0.92, baseOpacity * 0.92);
  const highOpacity = Math.min(1, baseOpacity + 0.18);

  return reverse
    ? [highOpacity, midOpacity, lowOpacity, midOpacity, highOpacity]
    : [lowOpacity, midOpacity, highOpacity, midOpacity, lowOpacity];
}

function createRadiusFrames(scale: number, reverse = false) {
  const baseRadius = 3.35 * scale;
  const smallRadius = baseRadius * 0.82;
  const largeRadius = baseRadius * 1.22;

  return reverse
    ? [largeRadius, baseRadius, smallRadius, baseRadius, largeRadius]
    : [smallRadius, baseRadius, largeRadius, baseRadius, smallRadius];
}

export function HeroOrbit() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center">
      <motion.div
        className="relative h-36 w-36"
        initial={{ rotate: 3.90736, scale: 1 }}
        animate={reduceMotion ? { rotate: 3.90736, scale: 1 } : { rotate: [3.90736, 5.8, 3.90736], scale: [1, 1.035, 1] }}
        transition={reduceMotion ? undefined : driftLoop(6.4)}
      >
        <svg viewBox="0 0 120 120" fill="none" className="h-full w-full">
          <motion.circle
            cx="60"
            cy="60"
            r="55"
            stroke="url(#ringGrad)"
            strokeWidth="1"
            strokeDasharray="8 4"
            initial={{ rotate: 248.472 }}
            animate={reduceMotion ? { rotate: 248.472 } : { rotate: [248.472, 608.472] }}
            transition={
              reduceMotion
                ? undefined
                : { duration: 24, ease: "linear", repeat: Number.POSITIVE_INFINITY }
            }
            style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}
          />
          <circle cx="60" cy="60" r="38" fill="url(#coreGrad)" opacity="0.15" />
          <circle cx="60" cy="60" r="28" fill="url(#coreGrad)" opacity="0.25" />
          <circle cx="60" cy="60" r="20" fill="url(#coreGrad)" />

          <motion.g
            animate={reduceMotion ? undefined : { rotate: [0, -14, 0] }}
            transition={reduceMotion ? undefined : { duration: 10.8, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
            style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}
          >
            {heroOrbitPairs.map(([forwardNode, reverseNode], pairIndex) => (
              <g key={`${forwardNode.x}-${reverseNode.x}`}>
                <motion.line
                  x1="60"
                  y1="60"
                  x2={forwardNode.x}
                  y2={forwardNode.y}
                  stroke="#27AE60"
                  strokeWidth="0.8"
                  initial={{ opacity: forwardNode.lineOpacity }}
                  animate={reduceMotion ? undefined : { opacity: createOpacityFrames(forwardNode.lineOpacity) }}
                  transition={
                    reduceMotion
                      ? undefined
                      : { duration: 6.8, ease: "easeInOut", delay: pairIndex * 0.12, repeat: Number.POSITIVE_INFINITY }
                  }
                />
                <motion.circle
                  cx={forwardNode.x}
                  cy={forwardNode.y}
                  r={3.35 * forwardNode.scale}
                  fill="#27AE60"
                  initial={{ opacity: forwardNode.dotOpacity }}
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          r: createRadiusFrames(forwardNode.scale),
                          opacity: createOpacityFrames(forwardNode.dotOpacity),
                        }
                  }
                  transition={
                    reduceMotion
                      ? undefined
                      : { duration: 6.8, ease: "easeInOut", delay: pairIndex * 0.12, repeat: Number.POSITIVE_INFINITY }
                  }
                />

                <motion.line
                  x1="60"
                  y1="60"
                  x2={reverseNode.x}
                  y2={reverseNode.y}
                  stroke="#27AE60"
                  strokeWidth="0.8"
                  initial={{ opacity: reverseNode.lineOpacity }}
                  animate={reduceMotion ? undefined : { opacity: createOpacityFrames(reverseNode.lineOpacity, true) }}
                  transition={
                    reduceMotion
                      ? undefined
                      : { duration: 6.8, ease: "easeInOut", delay: pairIndex * 0.12, repeat: Number.POSITIVE_INFINITY }
                  }
                />
                <motion.circle
                  cx={reverseNode.x}
                  cy={reverseNode.y}
                  r={3.35 * reverseNode.scale}
                  fill="#27AE60"
                  initial={{ opacity: reverseNode.dotOpacity }}
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          r: createRadiusFrames(reverseNode.scale, true),
                          opacity: createOpacityFrames(reverseNode.dotOpacity, true),
                        }
                  }
                  transition={
                    reduceMotion
                      ? undefined
                      : { duration: 6.8, ease: "easeInOut", delay: pairIndex * 0.12, repeat: Number.POSITIVE_INFINITY }
                  }
                />
              </g>
            ))}
          </motion.g>

          <defs>
            <linearGradient id="coreGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#27AE60" />
              <stop offset="100%" stopColor="#2D9CDB" />
            </linearGradient>
            <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#27AE60" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#2D9CDB" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-bold text-white">Afia AI</span>
        </div>
      </motion.div>
    </div>
  );
}
