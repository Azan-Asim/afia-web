"use client";

import { Footer } from "@/components/footer/Footer";
import { Navbar } from "@/components/header/Navbar";
import { ContactSection } from "@/components/sections/contact/ContactSection";
import { HeroSection } from "@/components/sections/hero/HeroSection";
import { InvestmentSection } from "@/components/sections/investment/InvestmentSection";
import { MoatSection } from "@/components/sections/moat/MoatSection";
import { OpportunitySection } from "@/components/sections/opportunity/OpportunitySection";
import { PlatformSection } from "@/components/sections/platform/PlatformSection";
import { RevenueSection } from "@/components/sections/revenue/RevenueSection";
import { SwotSection } from "@/components/sections/swot/SwotSection";
import { useHomeContent } from "@/content/home/useHomeContent";
import { LocaleProvider, useLocale } from "@/content/i18n/LocaleProvider";

export function HomePageClient() {
  return (
    <LocaleProvider>
      <LocalizedHomePage />
    </LocaleProvider>
  );
}

function LocalizedHomePage() {
  const { locale, setLocale } = useLocale();
  const homeContent = useHomeContent();
  const navigationContent = homeContent.navigation;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--color-sand)] text-[var(--color-ink)]">
      <a
        href="#main-content"
        className="sr-only fixed left-4 top-4 z-[70] rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--color-ink)] shadow-lg focus:not-sr-only focus:outline-none focus:ring-2 focus:ring-[var(--color-green)]"
      >
        {navigationContent.skipToContentLabel}
      </a>
      <div id="top" />
      <Navbar
        items={navigationContent.items}
        locale={locale}
        brandLabel={navigationContent.brandLabel}
        homeLabel={navigationContent.homeLabel}
        investorBadgeLabel={navigationContent.investorBadgeLabel}
        requestDeckLabel={navigationContent.requestDeckLabel}
        languageLabel={navigationContent.languageLabel}
        languageOptions={navigationContent.languageOptions}
        primaryNavLabel={navigationContent.primaryNavLabel}
        mobileNavLabel={navigationContent.mobileNavLabel}
        mobileDialogLabel={navigationContent.mobileDialogLabel}
        openNavigationLabel={navigationContent.openNavigationLabel}
        closeNavigationLabel={navigationContent.closeNavigationLabel}
        onLocaleChange={setLocale}
      />

      <main id="main-content">
        <HeroSection />
        <OpportunitySection />
        <PlatformSection />
        <InvestmentSection />
        <RevenueSection />
        <MoatSection />
        <SwotSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
