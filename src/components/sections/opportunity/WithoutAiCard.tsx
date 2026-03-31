// Problem-state comparison card showing the fragmented experience without Afia AI.
import { accentStyles } from "@/components/common/styles/AccentStyles";
import type { Accent } from "@/types/home/Home";

const currentSignals: Array<[string, string, Accent]> = [
  ["HRV", "42ms", "red"],
  ["SpO2", "97%", "orange"],
  ["Steps", "8,240", "orange"],
  ["Sleep", "7h 20m", "pink"],
  ["Stress", "34", "red"],
  ["Calories", "1,840", "orange"],
];

export function WithoutAiCard() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-[color:var(--color-red-soft-border)] bg-[var(--color-red-soft)] px-8 py-7">
      <div className="mb-4 flex items-center gap-2 text-xs font-semibold text-[#FF6B6B]">
        <div className="size-2 rounded-full bg-red-400" />
        Without AI
      </div>
      <div className="text-[1.05rem] font-semibold text-[#FF4D4F]">Raw Data Overload</div>
      <div className="mt-5 grid grid-cols-3 gap-2.5">
        {currentSignals.map(([label, value, accent], index) => {
          const styles = accentStyles[accent];
          const swayClass =
            index < 3
              ? "motion-safe:animate-[without-ai-card-sway-down_5.4s_cubic-bezier(0.22,1,0.36,1)_infinite]"
              : "motion-safe:animate-[without-ai-card-sway-up_5.4s_cubic-bezier(0.22,1,0.36,1)_infinite]";

          return (
            <div
              key={label}
              className={`flex min-h-[3.7rem] flex-col items-center justify-center rounded-[0.95rem] border px-3 py-2 text-center ${swayClass} ${styles.border}`}
              style={{
                background:
                  accent === "orange"
                    ? "rgba(249,115,22,0.03)"
                    : accent === "pink"
                      ? "rgba(236,72,153,0.03)"
                      : "rgba(239,68,68,0.03)",
              }}
            >
              <div className="text-[10px] leading-none text-[#9CA3AF]">{label}</div>
              <div className={`mt-1.5 text-[1.02rem] font-bold leading-none ${styles.text}`}>{value}</div>
            </div>
          );
        })}
      </div>
      <div className="mt-5 flex items-center gap-2 text-xs text-[#FF6B6B]">
        <div className="size-2 rounded-full bg-red-400 animate-pulse" />
        No guidance provided
      </div>
    </div>
  );
}
