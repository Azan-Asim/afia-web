"use client";

import { useEffect, useRef, useState } from "react";

import { AfiaLogo } from "@/components/common/branding/AfiaLogo";
import { LineIcon } from "@/components/common/icons/LineIcons";
import { DesktopNav } from "@/components/header/DesktopNav";
import { MobileMenu } from "@/components/header/MobileMenu";
import type { NavItem } from "@/types/home/Home";

type NavbarProps = {
  items: NavItem[];
};

export function Navbar({ items }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

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

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) {
      menuButtonRef.current?.focus();
    }
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          isScrolled || isMenuOpen
            ? "border-b border-black/5 bg-white/92 shadow-[0_12px_35px_rgba(17,24,39,0.06)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 lg:px-10">
          <a href="#top" aria-label="Afia home">
            <AfiaLogo />
          </a>

          <DesktopNav items={items} />

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-full !bg-transparent [background-image:linear-gradient(135deg,rgb(39,174,96),rgb(45,156,219))] px-5 py-2.5 font-[family:var(--font-sans)] text-sm font-medium leading-[var(--text-sm--line-height)] !text-white [font-synthesis:none] shadow-[0_4px_20px_rgba(39,174,96,0.25)] transition-transform duration-500 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-blue)] focus-visible:ring-offset-2 md:inline-flex"
            >
              <LineIcon name="mail" className="size-3.5 !text-white" />
              Request Deck
            </a>
            <button
              ref={menuButtonRef}
              type="button"
              className="rounded-xl p-2 text-[var(--color-ink)] transition-colors hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-green)] md:hidden"
              aria-controls="mobile-navigation"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
              onClick={() => {
                setIsMenuOpen((current) => !current);
              }}
            >
              <LineIcon name={isMenuOpen ? "x" : "menu"} className="size-5" />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu items={items} isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
}
