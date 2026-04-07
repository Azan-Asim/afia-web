"use client";

// Step-by-step platform flow diagram that explains how signals turn into decisions.
import { motion, useReducedMotion } from "motion/react";

import { LineIcon } from "@/components/common/icons/LineIcons";
import { accentStyles } from "@/components/common/styles/AccentStyles";
import { driftLoop, revealSide } from "@/components/common/motion/motion";
import { useInViewOnce } from "@/components/sections/opportunity/useInViewOnce";
import { platformSteps } from "@/content/home/platform/PlatformContent";

export function PlatformFlow() {
  const { ref, hasEntered } = useInViewOnce<HTMLDivElement>();
  const reduceMotion = useReducedMotion();

  return (
    <div ref={ref} className="mt-10">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        {platformSteps.map((step, index) => {
          const styles = accentStyles[step.accent];

          return (
            <div
              key={step.title}
              className="flex w-full flex-col items-center gap-4 md:flex-1 md:flex-row"
            >
              <motion.div
                className={`relative w-full min-w-0 flex-1 rounded-[1.75rem] p-6 text-center shadow-[0_6px_20px_rgba(0,0,0,0.06)] ${
                  step.featured
                    ? "border-[1.5px] border-[rgba(139,92,246,0.36)] bg-[linear-gradient(135deg,rgba(139,92,246,0.12),rgba(139,92,246,0.05))] shadow-[0_8px_32px_rgba(139,92,246,0.12)]"
                    : "border-[1.5px] border-black/10 bg-white"
                }`}
                initial="hidden"
                animate={hasEntered ? "visible" : "hidden"}
                variants={revealSide(index * 0.34, -40, 0.76)}
              >
                {step.featured ? (
                  <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-[1.75rem] bg-[linear-gradient(90deg,transparent,rgba(139,92,246,1),transparent)]" />
                ) : null}

                <div
                  className={`mx-auto mb-3 flex size-12 items-center justify-center rounded-xl ${styles.soft} ${styles.text}`}
                >
                  <LineIcon name={step.icon} className="size-6" />
                </div>
                <h3 className="text-xs font-semibold text-[#2D2D2D]">
                  {step.title}
                </h3>
                <p className="mt-1 text-[10px] text-[#64748B]">
                  {step.subtitle}
                </p>

                {step.featured ? (
                  <motion.div
                    className="mt-2 inline-flex rounded-full bg-[rgba(139,92,246,0.16)] px-2 py-0.5 text-[9px] font-bold text-[var(--color-purple)]"
                    animate={reduceMotion ? undefined : { scale: [1, 1.05, 1], opacity: [0.92, 1, 0.92] }}
                    transition={reduceMotion ? undefined : driftLoop(3)}
                  >
                    Afia Layer
                  </motion.div>
                ) : null}
              </motion.div>

              {index < platformSteps.length - 1 ? (
                <div className="hidden items-center md:flex">
                  <motion.div
                    animate={reduceMotion ? undefined : { x: [0, 6, 0], opacity: [0.24, 1, 0.24] }}
                    transition={reduceMotion ? undefined : driftLoop(2.2, index * 0.24)}
                  >
                    <LineIcon
                      name="chevronRight"
                      className="size-5 text-[#64748B]"
                    />
                  </motion.div>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
