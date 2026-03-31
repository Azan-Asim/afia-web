// Problem-state comparison card showing the fragmented experience without Afia AI.
import { accentStyles } from "@/components/common/styles/AccentStyles";
import { useHomeContent } from "@/content/home/useHomeContent";

export function WithoutAiCard() {
  const { opportunity } = useHomeContent();

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-[color:var(--color-red-soft-border)] bg-[var(--color-red-soft)] px-8 py-7">
      <div className="mb-4 flex items-center gap-2 text-xs font-semibold text-[#FF6B6B]">
        <div className="size-2 rounded-full bg-red-400" />
        {opportunity.withoutAiLabel}
      </div>
      <div className="text-[1.05rem] font-semibold text-[#FF4D4F]">{opportunity.withoutAiTitle}</div>
      <div className="mt-5 grid grid-cols-3 gap-2.5">
        {opportunity.withoutAiSignals.map((signal, index) => {
          const styles = accentStyles[signal.accent];
          const swayClass =
            index < 3
              ? "motion-safe:animate-[without-ai-card-sway-down_5.4s_cubic-bezier(0.22,1,0.36,1)_infinite]"
              : "motion-safe:animate-[without-ai-card-sway-up_5.4s_cubic-bezier(0.22,1,0.36,1)_infinite]";

          return (
            <div
              key={signal.id}
              className={`flex min-h-[3.7rem] flex-col items-center justify-center rounded-[0.95rem] border px-3 py-2 text-center ${swayClass} ${styles.border}`}
              style={{
                background:
                  signal.accent === "orange"
                    ? "rgba(249,115,22,0.03)"
                    : signal.accent === "pink"
                      ? "rgba(236,72,153,0.03)"
                      : "rgba(239,68,68,0.03)",
              }}
            >
              <div className="text-[10px] leading-none text-[#9CA3AF]">{signal.label}</div>
              <div className={`mt-1.5 text-[1.02rem] font-bold leading-none ${styles.text}`}>{signal.value}</div>
            </div>
          );
        })}
      </div>
      <div className="mt-5 flex items-center gap-2 text-xs text-[#FF6B6B]">
        <div className="size-2 rounded-full bg-red-400 animate-pulse" />
        {opportunity.withoutAiFooter}
      </div>
    </div>
  );
}
