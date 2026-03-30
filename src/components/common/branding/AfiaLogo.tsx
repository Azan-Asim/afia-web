// Reusable Afia brand mark used in navigation, footer, and other branded surfaces.
import Image from "next/image";

type AfiaLogoProps = {
  className?: string;
  compact?: boolean;
  inverse?: boolean;
  showBadge?: boolean;
};

const logoImageSrc = "/logo.svg";
const compactGapClass = "gap-2";
const defaultGapClass = "gap-3";
const compactNameSizeClass = "text-sm";
const defaultNameSizeClass = "text-[1.15rem]";

export function AfiaLogo({
  className = "",
  compact = false,
  inverse = false,
  showBadge = true,
}: AfiaLogoProps) {
  const textColor = inverse ? "text-white" : "text-[#2d2d2d]";
  const badgeText = inverse ? "text-white/80" : "text-[var(--color-muted)]";
  const wrapperGapClass = compact ? compactGapClass : defaultGapClass;
  const nameGapClass = compact ? "gap-1.5" : "gap-2";
  const nameSizeClass = compact ? compactNameSizeClass : defaultNameSizeClass;

  return (
    <div className={`inline-flex items-center ${wrapperGapClass} ${className}`}>
      {inverse ? (
        <div className="relative flex size-11 items-center justify-center overflow-hidden rounded-2xl bg-[linear-gradient(135deg,var(--color-green),var(--color-blue))] shadow-[0_12px_30px_rgba(39,174,96,0.25)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.35),transparent_52%)]" />
          <span className="relative text-lg font-black tracking-[-0.08em] text-white">
            A
          </span>
        </div>
      ) : (
        <div className="h-9 w-9">
          <Image
            src={logoImageSrc}
            alt="Afia logo"
            width={36}
            height={36}
            className="block h-full w-full object-contain"
          />
        </div>
      )}
      <div className={`flex items-center ${nameGapClass}`}>
        <span
          className={`${nameSizeClass} font-[family:var(--font-sans)] leading-none font-semibold tracking-[-0.01em] [font-synthesis:none] ${compact ? badgeText : textColor}`}
        >
          Afia
        </span>
        {!compact && showBadge ? (
          <span className="ml-1 rounded-full border border-[rgba(39,174,96,0.2)] bg-[rgba(39,174,96,0.08)] px-2 py-0.5 text-[10px] leading-none font-semibold text-[rgb(39,174,96)] [font-synthesis:none]">
            Investor
          </span>
        ) : null}
      </div>
    </div>
  );
}
