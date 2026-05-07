// Mobile navigation drawer that shows links and actions on smaller screens.
import { useEffect, useRef } from "react";
import Link from "next/link";

import { LineIcon } from "@/components/common/icons/LineIcons";
import type { NavItem } from "@/types/home/Home";

type MobileMenuProps = {
  items: NavItem[];
  isOpen: boolean;
  onClose: () => void;
};

export function MobileMenu({ items, isOpen, onClose }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen || !menuRef.current) {
      return;
    }

    const focusableElements = Array.from(
      menuRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ),
    );

    focusableElements[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab" || focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-[rgba(17,24,39,0.18)] backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isOpen}
        onClick={onClose}
      />

      <div
        ref={menuRef}
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
        tabIndex={-1}
        className={`fixed inset-x-4 top-[5.25rem] z-40 rounded-[2rem] border border-black/5 bg-white p-5 shadow-[0_24px_70px_rgba(17,24,39,0.12)] transition-all duration-300 lg:hidden ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-2" aria-label="Mobile">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-2xl px-4 py-3 font-[family:var(--font-sans)] text-sm font-medium leading-[var(--text-sm--line-height)] !text-[#6B7280] [font-synthesis:none] transition-colors duration-500 hover:bg-[var(--color-green-soft)] hover:!text-[#27AE60]"
              onClick={onClose}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="/#contact"
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full !bg-transparent [background-image:linear-gradient(135deg,rgb(39,174,96),rgb(45,156,219))] px-5 py-3 font-[family:var(--font-sans)] text-sm font-medium leading-[var(--text-sm--line-height)] !text-white [font-synthesis:none] shadow-[0_4px_20px_rgba(39,174,96,0.25)] transition-transform duration-500 hover:-translate-y-0.5"
          onClick={onClose}
        >
          <LineIcon name="mail" className="size-4 !text-white" />
          Contact
        </a>
      </div>
    </>
  );
}
