// Small reusable badge used above section headings to label the current narrative block.
import { LineIcon } from "@/components/common/icons/LineIcons";

type SectionBadgeProps = {
  title: string;
};

export function SectionBadge({ title }: SectionBadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-green-soft-border)] bg-[var(--color-green-soft)] px-3.5 py-1 text-xs font-semibold text-[var(--color-green)]">
      <LineIcon name="sparkles" className="size-3.5" />
      {title}
    </span>
  );
}
