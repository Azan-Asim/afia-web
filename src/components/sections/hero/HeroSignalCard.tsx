// Floating signal card used inside the hero visual to represent wearable-derived insights.
import { LineIcon } from "@/components/common/icons/LineIcons";
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
        className={`flex min-w-[122px] items-center gap-2.5 rounded-[0.95rem] border-[1.5px] bg-white px-4 py-2.5 shadow-[0_14px_30px_rgba(17,24,39,0.14)] ${config.animationClass} ${styles.border}`}
        style={{
          ["--hero-card-offset" as string]: config.floatOffset,
          // The inner card picks up the continuous float only after the arrival finishes.
          animationDelay: `calc(${config.entryDelay} + 1320ms)`,
          transform: `translateY(${config.floatOffset})`,
          willChange: "transform",
        }}
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
      </div>
    </div>
  );
}
