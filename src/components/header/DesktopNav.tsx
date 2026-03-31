// Desktop navigation links displayed in the header on larger screens.
import type { NavItem } from "@/types/home/Home";

type DesktopNavProps = {
  items: NavItem[];
  ariaLabel: string;
};

export function DesktopNav({ items, ariaLabel }: DesktopNavProps) {
  return (
    <nav className="hidden items-center gap-7 lg:flex" aria-label={ariaLabel}>
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="font-[family:var(--font-sans)] text-sm font-medium leading-[var(--text-sm--line-height)] !text-[#6B7280] [font-synthesis:none] transition-colors duration-500 hover:!text-[#27AE60] focus-visible:outline-none focus-visible:!text-[#27AE60]"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
