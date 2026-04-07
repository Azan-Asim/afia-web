"use client";

// Supporting moat bullet list that explains why the platform is difficult to replicate.
import { motion } from "motion/react";

import { LineIcon } from "@/components/common/icons/LineIcons";
import { revealSide } from "@/components/common/motion/motion";
import { accentStyles } from "@/components/common/styles/AccentStyles";
import { useInViewOnce } from "@/components/sections/opportunity/useInViewOnce";
import { moatItems } from "@/content/home/moat/MoatContent";

export function MoatFeatureList() {
  const { ref, hasEntered } = useInViewOnce<HTMLDivElement>();

  return (
    <div ref={ref} className="space-y-5">
      {moatItems.map((item, index) => {
        const styles = accentStyles[item.accent];

        return (
          <motion.div
            key={item.title}
            className="flex gap-4"
            initial="hidden"
            animate={hasEntered ? "visible" : "hidden"}
            variants={revealSide(index * 0.12, -28, 0.76)}
          >
            <div
              className={`flex size-10 shrink-0 items-center justify-center rounded-[1.15rem] ${styles.soft} ${styles.text}`}
            >
              <LineIcon name={item.icon} className="size-5" />
            </div>
            <div>
              <h3 className="text-[1.02rem] font-semibold text-[var(--color-ink)]">
                {item.title}
              </h3>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
