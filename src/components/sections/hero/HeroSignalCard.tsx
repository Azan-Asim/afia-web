// Floating signal card used inside the hero visual to represent wearable-derived insights.
import { LineIcon } from "@/components/common/icons/LineIcons";
import {
  heroSignalConfigs,
  heroSignalStyles,
} from "@/components/sections/hero/HeroVisualData";
import type { FloatingSignal } from "@/content/home/hero/HeroTypes";

type HeroSignalCardProps = FloatingSignal;

export function HeroSignalCard({
  id,
  label,
  value,
  icon,
  accent,
}: HeroSignalCardProps) {
  const styles = heroSignalStyles[accent];
  const config = heroSignalConfigs[id];

  return (
    <div
      className="absolute left-1/2 top-1/2 z-10 motion-safe:animate-[hero-signal-arrive_1320ms_cubic-bezier(0.22,1,0.36,1)_both]"
      style={{
        ["--hero-signal-x" as string]: config.positionX,
        ["--hero-signal-y" as string]: config.positionY,
        animationDelay: config.entryDelay,
        // Keep the outer wrapper responsible for the center-to-position travel only.
        transform: "translate3d(0, 0, 0)",
        willChange: "transform, opacity",
        backfaceVisibility: "hidden",
      }}
    >
      <div
        className={`flex min-w-[96px] items-center gap-2 rounded-xl border-[1.5px] bg-white px-3 py-2 shadow-[0_12px_28px_rgba(17,24,39,0.12)] ${config.animationClass} ${styles.border}`}
        style={{
          ["--hero-card-offset" as string]: config.floatOffset,
          // The inner card picks up the continuous float only after the arrival finishes.
          animationDelay: `calc(${config.entryDelay} + 1320ms)`,
          transform: `translateY(${config.floatOffset})`,
          willChange: "transform",
        }}
      >
        <div
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg ${styles.iconSurface} ${styles.iconText}`}
        >
          <LineIcon name={icon} className="size-3.5" />
        </div>
        <div>
          <div className="text-[9px] leading-none text-[#9CA3AF]">{label}</div>
          <div className="text-[11px] font-semibold leading-snug text-[#2D2D2D]">
            {value}
          </div>
        </div>
      </div>
    </div>
  );
}
