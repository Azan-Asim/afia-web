import { LineIcon } from "@/components/common/icons/LineIcons";
import {
  heroSignalConfigs,
  heroSignalStyles,
} from "@/components/sections/hero/HeroVisualData";
import type { FloatingSignal } from "@/types/home/Home";

type HeroSignalCardProps = FloatingSignal;

function scaleOffset(offset: string, factor: number) {
  return `${Number.parseFloat(offset) * factor}px`;
}

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
      className="absolute left-1/2 top-1/2 z-10 motion-safe:animate-[hero-signal-arrive_1220ms_cubic-bezier(0.16,1,0.3,1)_both]"
      style={{
        ["--hero-signal-x" as string]: config.positionX,
        ["--hero-signal-y" as string]: config.positionY,
        ["--hero-signal-mid-x" as string]: scaleOffset(config.positionX, 0.56),
        ["--hero-signal-mid-y" as string]: scaleOffset(config.positionY, 0.56),
        ["--hero-signal-settle-x" as string]: scaleOffset(
          config.positionX,
          0.9,
        ),
        ["--hero-signal-settle-y" as string]: scaleOffset(
          config.positionY,
          0.9,
        ),
        animationDelay: config.entryDelay,
        transform: `translate3d(${config.positionX}, ${config.positionY}, 0)`,
      }}
    >
      <div
        className={`flex min-w-[96px] items-center gap-2 rounded-xl border-[1.5px] bg-white px-3 py-2 shadow-[0_12px_28px_rgba(17,24,39,0.12)] ${config.animationClass} ${styles.border}`}
        style={{
          ["--hero-card-offset" as string]: config.floatOffset,
          animationDelay: `calc(${config.entryDelay} + 1220ms)`,
        }}
      >
        <div
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg ${styles.iconSurface} ${styles.iconText}`}
        >
          <LineIcon name={icon} className="size-3.5" />
        </div>
        <div >
          <div className="text-[9px] leading-none text-[#9CA3AF]">{label}</div>
          <div className="text-[11px] font-semibold leading-snug text-[#2D2D2D]">
            {value}
          </div>
        </div>
      </div>
    </div>
  );
}
