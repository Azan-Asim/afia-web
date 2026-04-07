"use client";

// TAM/SAM/SOM showcase that pairs orbit rings with supporting market cards.
import { motion, useReducedMotion } from "motion/react";

import { accentStyles } from "@/components/common/styles/AccentStyles";
import { driftLoop, revealSide, scaleIn } from "@/components/common/motion/motion";
import { useInViewOnce } from "@/components/sections/opportunity/useInViewOnce";
import { marketLayers } from "@/content/home/investment/InvestmentContent";

const layerPositions = [
  "right-[0.2rem] top-[-0.1rem]",
  "right-[-0.55rem] top-1/2 -translate-y-1/2",
  "left-1/2 top-[72%] -translate-x-1/2",
] as const;

const ringInsets = ["inset-0", "inset-[3rem]", "inset-[6rem]"] as const;

const marketCardTitles = {
  TAM: "Total Addressable Market",
  SAM: "Serviceable Addressable Market",
  SOM: "Serviceable Obtainable Market",
} as const;

export function MarketLayersShowcase() {
  const { ref, hasEntered } = useInViewOnce<HTMLDivElement>();
  const reduceMotion = useReducedMotion();

  return (
    <div
      ref={ref}
      className="mt-10 grid items-center gap-6 lg:grid-cols-[0.82fr_auto]"
    >
      <div className="flex justify-center">
        <div className="relative flex h-[300px] w-[300px] items-center justify-center">
          <div className="absolute inset-[1.15rem] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.94)_0%,rgba(255,255,255,0.78)_44%,rgba(247,249,250,0.34)_68%,transparent_100%)]" />

          {marketLayers.map((layer, index) => {
            const styles = accentStyles[layer.accent];

            return (
              <motion.div
                key={`${layer.label}-ring`}
                className={`absolute ${ringInsets[index]}`}
                initial="hidden"
                animate={hasEntered ? "visible" : "hidden"}
                variants={scaleIn(index * 0.12, 0.18, 0.9)}
              >
                <motion.div
                  className={`absolute inset-0 rounded-full border-[2px] ${styles.border} bg-[rgba(255,255,255,0.08)]`}
                  animate={reduceMotion ? undefined : { opacity: [0.88, 1, 0.88], scale: [1, 1.012, 1] }}
                  transition={reduceMotion ? undefined : driftLoop(5.8, index * 0.28)}
                />
              </motion.div>
            );
          })}

          {marketLayers.map((layer, index) => {
            const styles = accentStyles[layer.accent];

            return (
              <motion.div
                key={layer.label}
                className={`absolute ${layerPositions[index]} text-center`}
                initial="hidden"
                animate={hasEntered ? "visible" : "hidden"}
                variants={scaleIn(0.36 + index * 0.1, 0.75, 0.72)}
              >
                <div className={`text-[1.05rem] font-black leading-none ${styles.text}`}>
                  {layer.value}
                </div>
                <div className={`mt-1 text-[0.84rem] font-bold leading-none ${styles.text}`}>
                  {layer.label}
                </div>
              </motion.div>
            );
          })}

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial="hidden"
              animate={hasEntered ? "visible" : "hidden"}
              variants={scaleIn(0.24, 0.3, 0.86)}
            >
              <motion.div
                className="flex size-[5.9rem] flex-col items-center justify-center rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(250,250,251)_0%,rgba(245,246,248)_62%,rgba(241,237,250)_100%)] text-center shadow-[inset_0_0_0_2px_rgba(139,92,246)] backdrop-blur-[2px]"
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: [0.94, 1, 0.94],
                        scale: [1, 1.018, 1],
                        boxShadow: [
                          "0 20px 50px rgba(39, 174, 96, 0.2)",
                          "0 24px 56px rgba(39, 174, 96, 0.24)",
                          "0 20px 50px rgba(39, 174, 96, 0.2)",
                        ],
                      }
                }
                transition={reduceMotion ? undefined : driftLoop(6.2)}
              >
                <div className="text-[1.95rem] font-black leading-none tracking-[-0.04em] text-[#2D2D2D]">
                  $150M
                </div>
                <div className="mt-2 text-[0.76rem] font-bold uppercase leading-none tracking-[0.01em] text-[#8B5CF6]">
                  SOM
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="space-y-3 justify-self-start">
        {marketLayers.map((layer, index) => {
          const styles = accentStyles[layer.accent];

          return (
            <motion.div
              key={layer.label}
              className={`w-fit max-w-[42rem] rounded-[1.7rem] border bg-[rgba(255,255,255,0.92)] px-6 py-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)] backdrop-blur-[2px] ${styles.border}`}
              initial="hidden"
              animate={hasEntered ? "visible" : "hidden"}
              variants={revealSide(0.22 + index * 0.12, 64, 0.76)}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[1rem] ${styles.softSolid} ${styles.text} text-[1.05rem] font-black leading-none`}
                >
                  {layer.label}
                </div>
                <div className="min-w-0 max-w-[31rem] pt-1">
                  <div className="text-[1.08rem] font-semibold leading-[1.25] tracking-[-0.015em] text-[#2D3748]">
                    {layer.value} {marketCardTitles[layer.label]}
                  </div>
                  <p className="mt-2 text-[0.84rem] font-medium leading-[1.45] tracking-[-0.01em] text-[#64748B]">
                    {layer.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
