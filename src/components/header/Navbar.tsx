"use client";

// Responsive top navigation that coordinates the logo, desktop nav, and mobile menu.
import { useEffect, useRef, useState } from "react";

import { AfiaLogo } from "@/components/common/branding/AfiaLogo";
import { LineIcon } from "@/components/common/icons/LineIcons";
import { LocaleSwitcher } from "@/components/common/ui/LocaleSwitcher";
import {
  gradientCtaClass,
  gradientCtaFocusClass,
} from "@/components/common/styles/CtaStyles";
import type { SupportedLocale } from "@/content/i18n/Config";
import { DesktopNav } from "@/components/header/DesktopNav";
import { MobileMenu } from "@/components/header/MobileMenu";
import type { NavItem } from "@/types/home/Home";

type NavbarProps = {
  items: NavItem[];
  locale: SupportedLocale;
  brandLabel: string;
  homeLabel: string;
  investorBadgeLabel: string;
  requestDeckLabel: string;
  languageLabel: string;
  languageOptions: { value: SupportedLocale; label: string }[];
  primaryNavLabel: string;
  mobileNavLabel: string;
  mobileDialogLabel: string;
  openNavigationLabel: string;
  closeNavigationLabel: string;
  onLocaleChange: (locale: SupportedLocale) => void;
};

const requestDeckLinkClass =
  `${gradientCtaClass} ${gradientCtaFocusClass} max-lg:hidden px-5 py-2.5 text-sm leading-[var(--text-sm--line-height)] shadow-[0_4px_20px_rgba(39,174,96,0.25)] duration-500 lg:inline-flex`;

const mobileMenuButtonClass =
  "rounded-xl p-2 text-[var(--color-ink)] transition-colors hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-green)] lg:hidden";

export function Navbar({
  items,
  locale,
  brandLabel,
  homeLabel,
  investorBadgeLabel,
  requestDeckLabel,
  languageLabel,
  languageOptions,
  primaryNavLabel,
  mobileNavLabel,
  mobileDialogLabel,
  openNavigationLabel,
  closeNavigationLabel,
  onLocaleChange,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      // Drive the thin top bar like a reading progress indicator for the page.
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress =
        documentHeight > 0
          ? Math.min(Math.max(window.scrollY / documentHeight, 0), 1)
          : 0;

      setScrollProgress(nextProgress);
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
        dir={locale === "ar" ? "rtl" : "ltr"}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          isScrolled || isMenuOpen
            ? "border-b border-black/5 bg-white/92 shadow-[0_12px_35px_rgba(17,24,39,0.06)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-black/[0.04]">
          <div
            className="h-full origin-left bg-[linear-gradient(90deg,var(--color-green),var(--color-blue))] transition-transform duration-200 ease-out"
            style={{ transform: `scaleX(${scrollProgress})` }}
          />
        </div>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 lg:px-10">
          <a href="#top" aria-label={homeLabel}>
            <AfiaLogo brandLabel={brandLabel} badgeLabel={investorBadgeLabel} />
          </a>

          <DesktopNav items={items} ariaLabel={primaryNavLabel} />

          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <LocaleSwitcher
                locale={locale}
                label={languageLabel}
                options={languageOptions}
                onChange={onLocaleChange}
              />
            </div>
            <a
              href="#contact"
              className={`${requestDeckLinkClass} ${isMenuOpen ? "!hidden" : ""}`}
            >
              <LineIcon name="mail" className="size-3.5 !text-white" />
              {requestDeckLabel}
            </a>
            <button
              ref={menuButtonRef}
              type="button"
              className={mobileMenuButtonClass}
              aria-controls="mobile-navigation"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? closeNavigationLabel : openNavigationLabel}
              onClick={() => {
                setIsMenuOpen((current) => !current);
              }}
            >
              <LineIcon name={isMenuOpen ? "x" : "menu"} className="size-5" />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu
        items={items}
        isOpen={isMenuOpen}
        locale={locale}
        requestDeckLabel={requestDeckLabel}
        languageLabel={languageLabel}
        languageOptions={languageOptions}
        dialogLabel={mobileDialogLabel}
        navLabel={mobileNavLabel}
        onLocaleChange={onLocaleChange}
        onClose={closeMenu}
      />
    </>
  );
}
