import { LineIcon } from "@/components/common/icons/LineIcons";
import type { IconName } from "@/types/home/Home";

type PillButtonProps = {
  href: string;
  label: string;
  icon: IconName;
  secondary?: boolean;
};

export function PillButton({
  href,
  label,
  icon,
  secondary = false,
}: PillButtonProps) {
  if (secondary) {
    return (
      <a
        href={href}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--color-green-soft-border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-ink)] shadow-[0_8px_24px_rgba(17,24,39,0.05)] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-green)] focus-visible:ring-offset-2"
      >
        {label}
        <LineIcon name={icon} className="size-4 text-[var(--color-green)]" />
      </a>
    );
  }

  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--color-green),var(--color-blue))] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_36px_rgba(39,174,96,0.26)] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-blue)] focus-visible:ring-offset-2"
    >
      <LineIcon name={icon} className="size-4" />
      {label}
    </a>
  );
}
