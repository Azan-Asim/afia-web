"use client";

import { accentStyles } from "@/components/common/styles/AccentStyles";
import { useInViewOnce } from "@/components/sections/opportunity/useInViewOnce";
import { marketLayers } from "@/content/home/investment/InvestmentContent";

const layerPositions = [
  "right-[-0.85rem] top-[-0.35rem]",
  "right-6 top-1/2 -translate-y-1/2",
  "left-1/2 top-[68%] -translate-x-1/2",
] as const;

const ringInsets = ["inset-0", "inset-[2.65rem]", "inset-[5.4rem]"] as const;

export function MarketLayersShowcase() {
  const { ref, hasEntered } = useInViewOnce<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="mt-16 grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]"
    >
      <div className="flex justify-center">
        <div className="relative size-[19rem]">
          {marketLayers.map((layer, index) => {
            const styles = accentStyles[layer.accent];

            return (
              <div
                key={`${layer.label}-ring`}
                className={`absolute ${ringInsets[index]} ${
                  hasEntered
                    ? "motion-safe:animate-[investment-orbit-enter_900ms_cubic-bezier(0.22,1,0.36,1)_both]"
                    : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div
                  className={`absolute inset-0 rounded-full border-2 ${styles.border} ${styles.soft} motion-safe:animate-[investment-orbit-ring-glow_5.8s_ease-in-out_infinite]`}
                  style={{ animationDelay: `${index * 280}ms` }}
                />
              </div>
            );
          })}

          {marketLayers.map((layer, index) => {
            const styles = accentStyles[layer.accent];

            return (
              <div
                key={layer.label}
                className={`absolute ${layerPositions[index]} text-center ${
                  hasEntered
                    ? "motion-safe:animate-[investment-orbit-label-enter_720ms_cubic-bezier(0.22,1,0.36,1)_both]"
                    : "opacity-0"
                }`}
                style={{ animationDelay: `${360 + index * 100}ms` }}
              >
                <div className={`text-lg font-black ${styles.text}`}>
                  {layer.value}
                </div>
                <div className={`text-[10px] font-bold ${styles.text}`}>
                  {layer.label}
                </div>
              </div>
            );
          })}

          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={`${
                hasEntered
                  ? "motion-safe:animate-[investment-orbit-core-enter_860ms_cubic-bezier(0.22,1,0.36,1)_both]"
                  : "opacity-0"
              }`}
              style={{ animationDelay: "240ms" }}
            >
              <div className="rounded-full bg-[linear-gradient(135deg,var(--color-green),var(--color-blue))] p-7 text-center text-white shadow-[0_20px_50px_rgba(39,174,96,0.2)] motion-safe:animate-[investment-orbit-core-glow_6.2s_ease-in-out_infinite]">
                <div className="text-2xl font-black tracking-[-0.04em]">$1.2B</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.18em]">
                  SOM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {marketLayers.map((layer, index) => {
          const styles = accentStyles[layer.accent];

          return (
            <div
              key={layer.label}
              className={`rounded-[1.5rem] border p-5 ${styles.soft} ${styles.border} ${
                hasEntered
                  ? "motion-safe:animate-[investment-market-card-enter_760ms_cubic-bezier(0.22,1,0.36,1)_both]"
                  : "opacity-0"
              }`}
              style={{ animationDelay: `${220 + index * 120}ms` }}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex size-10 items-center justify-center rounded-2xl ${styles.softSolid} ${styles.text} text-sm font-black`}
                >
                  {layer.label}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[var(--color-ink)]">
                    {layer.value} - {layer.label} Market
                  </div>
                  <p className="mt-1 text-sm leading-7 text-[var(--color-subtle)]">
                    {layer.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
