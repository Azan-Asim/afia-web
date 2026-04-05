// Shared section heading layout that pairs a badge with a centered title.
import { SectionBadge } from "@/components/common/ui/SectionBadge";

type SectionHeadingProps = {
  badge: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({
  badge,
  title,
  description,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`space-y-3 ${centered ? "text-center" : ""}`}>
      <SectionBadge title={badge} />
      <div className="space-y-2">
        <h2 className="font-[family:var(--font-display)] text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.04em] text-[var(--color-ink)]">
          {title}
        </h2>
        {description ? (
          <p className="mx-auto max-w-2xl text-sm leading-7 text-[var(--color-muted)] md:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
