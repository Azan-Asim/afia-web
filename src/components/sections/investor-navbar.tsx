"use client";

import { useEffect, useState } from "react";

import { AfiaLogo } from "@/components/branding/afia-logo";
import { LineIcon } from "@/components/icons/line-icons";
import type { NavItem } from "@/types/investor";

type InvestorNavbarProps = {
  items: NavItem[];
};

export function InvestorNavbar({ items }: InvestorNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "border-b border-black/5 bg-white/92 shadow-[0_12px_35px_rgba(17,24,39,0.06)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 lg:px-10">
        <AfiaLogo />

        <nav className="hidden items-center gap-7 md:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-green)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--color-green),var(--color-blue))] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(39,174,96,0.2)] transition-transform duration-300 hover:-translate-y-0.5 md:inline-flex"
          >
            <LineIcon name="mail" className="size-3.5" />
            Request Deck
          </a>
          <button
            type="button"
            className="rounded-xl p-2 text-[var(--color-ink)] transition-colors hover:bg-black/5 md:hidden"
            aria-label="Open navigation"
          >
            <LineIcon name="menu" className="size-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
