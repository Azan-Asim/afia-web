"use client";

// TAM/SAM/SOM showcase that pairs orbit rings with supporting market cards.
import { accentStyles } from "@/components/common/styles/AccentStyles";
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
                  className={`absolute inset-0 rounded-full border-[2px] ${styles.border} bg-[rgba(255,255,255,0.08)] motion-safe:animate-[investment-orbit-ring-glow_5.8s_ease-in-out_infinite]`}
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
                <div className={`text-[1.05rem] font-black leading-none ${styles.text}`}>
                  {layer.value}
                </div>
                <div className={`mt-1 text-[0.84rem] font-bold leading-none ${styles.text}`}>
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
              <div className="flex size-[5.9rem] flex-col items-center justify-center rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(250,250,251)_0%,rgba(245,246,248)_62%,rgba(241,237,250)_100%)] text-center shadow-[inset_0_0_0_2px_rgba(139,92,246)] backdrop-blur-[2px] motion-safe:animate-[investment-orbit-core-glow_6.2s_ease-in-out_infinite]">
                <div className="text-[1.95rem] font-black leading-none tracking-[-0.04em] text-[#2D2D2D]">
                  $150M
                </div>
                <div className="mt-2 text-[0.76rem] font-bold uppercase leading-none tracking-[0.01em] text-[#8B5CF6]">
                  SOM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3 justify-self-start">
        {marketLayers.map((layer, index) => {
          const styles = accentStyles[layer.accent];

          return (
            <div
              key={layer.label}
              className={`w-fit max-w-[42rem] rounded-[1.7rem] border bg-[rgba(255,255,255,0.92)] px-6 py-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)] backdrop-blur-[2px] ${styles.border} ${
                hasEntered
                  ? "motion-safe:animate-[investment-market-card-enter_760ms_cubic-bezier(0.22,1,0.36,1)_both]"
                  : "opacity-0"
              }`}
              style={{ animationDelay: `${220 + index * 120}ms` }}
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
