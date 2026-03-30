import Image from "next/image";

type AfiaLogoProps = {
  className?: string;
  compact?: boolean;
  inverse?: boolean;
  showBadge?: boolean;
};

export function AfiaLogo({
  className = "",
  compact = false,
  inverse = false,
  showBadge = true,
}: AfiaLogoProps) {
  const textColor = inverse ? "text-white" : "text-[#2d2d2d]";
  const badgeText = inverse ? "text-white/80" : "text-[var(--color-muted)]";

  return (
    <div className={`inline-flex items-center ${compact ? "gap-2" : "gap-3"} ${className}`}>
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
            src="/logo.svg"
            alt="Afia logo"
            width={36}
            height={36}
            className="block h-full w-full object-contain"
          />
        </div>
      )}
      <div className={`flex items-center ${compact ? "gap-1.5" : "gap-2"}`}>
        <span
          className={`${compact ? "text-sm" : "text-[1.15rem]"} font-[family:var(--font-sans)] leading-none font-semibold tracking-[-0.01em] [font-synthesis:none] ${compact ? badgeText : textColor}`}
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
