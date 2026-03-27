import Image from "next/image";

type AfiaLogoProps = {
  className?: string;
  compact?: boolean;
  inverse?: boolean;
};

export function AfiaLogo({
  className = "",
  compact = false,
  inverse = false,
}: AfiaLogoProps) {
  const textColor = inverse ? "text-white" : "text-[var(--color-ink)]";
  const badgeText = inverse ? "text-white/80" : "text-[var(--color-muted)]";

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {inverse ? (
        <div className="relative flex size-11 items-center justify-center overflow-hidden rounded-2xl bg-[linear-gradient(135deg,var(--color-green),var(--color-blue))] shadow-[0_12px_30px_rgba(39,174,96,0.25)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.35),transparent_52%)]" />
          <span className="relative text-lg font-black tracking-[-0.08em] text-white">
            A
          </span>
        </div>
      ) : (
        <Image
          src="/logo.svg"
          alt="Afia logo"
          width={36}
          height={36}
          className="h-9 w-9"
          priority
        />
      )}
      {!compact ? (
        <div className="flex items-center gap-2">
          <span
            className={`font-semibold tracking-[-0.03em] ${textColor} font-[family:var(--font-display)]`}
          >
            Afia
          </span>
          <span className="rounded-full border border-[color:var(--color-green-soft-border)] bg-[var(--color-green-soft)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--color-green)]">
            Investor
          </span>
        </div>
      ) : (
        <span className={`text-xs ${badgeText}`}>Afia</span>
      )}
    </div>
  );
}
