"use client";

// Floating signal card used inside the hero visual to represent wearable-derived insights.
import { motion, useReducedMotion } from "motion/react";

import { LineIcon } from "@/components/common/icons/LineIcons";
import { easeOutExpo } from "@/components/common/motion/motion";
import {
  heroSignalConfigs,
  heroSignalStyles,
} from "@/components/sections/hero/HeroVisualData";
import type { FloatingSignal } from "@/types/home/Home";

type HeroSignalCardProps = FloatingSignal;

export function HeroSignalCard({
  label,
  value,
  icon,
  accent,
}: HeroSignalCardProps) {
  const styles = heroSignalStyles[accent];
  const config = heroSignalConfigs[label as keyof typeof heroSignalConfigs];
  const reduceMotion = useReducedMotion();
  const baseOffset = Number.parseFloat(config.floatOffset);
  const nextOffset =
    config.floatDirection === "up" ? baseOffset - 9 : baseOffset + 9;
  const entryDelay = Number.parseFloat(config.entryDelay);

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 z-10"
      initial={{ opacity: 0, x: 0, y: 0, scale: 0.94 }}
      animate={{
        opacity: 1,
        x: Number.parseFloat(config.positionX),
        y: Number.parseFloat(config.positionY),
        scale: 1,
      }}
      transition={{ duration: 1.32, delay: entryDelay, ease: easeOutExpo }}
      style={{ willChange: "transform, opacity", backfaceVisibility: "hidden" }}
    >
      
      <motion.div
        className={`flex min-w-[122px] items-center gap-2.5 rounded-[0.95rem] border-[1.5px] bg-white px-4 py-2.5 shadow-[0_14px_30px_rgba(17,24,39,0.14)] ${styles.border}`}
        initial={{ y: baseOffset, opacity: 0.98, scale: 1 }}
        animate={
          reduceMotion
            ? { y: baseOffset, opacity: 1, scale: 1 }
            : {
                y: [baseOffset, nextOffset, baseOffset],
                opacity: [0.98, 1, 0.98],
                scale: [1, 1.018, 1],
              }
        }
        transition={
          reduceMotion
            ? undefined
            : {
                delay: entryDelay + 1.32,
                duration: config.floatDuration,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
              }
        }
        style={{ willChange: "transform" }}
      >
        <div
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${styles.iconSurface} ${styles.iconText}`}
        >
          <LineIcon name={icon} className="size-4" />
        </div>
        <div>
          <div className="text-[10px] leading-none text-[#7A8699]">{label}</div>
          <div className="text-[13px] font-semibold leading-snug text-[#2D2D2D]">
            {value}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
