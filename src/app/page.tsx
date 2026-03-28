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
import { navItems } from "@/content/home/navigation/NavContent";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--color-sand)] text-[var(--color-ink)]">
      <a
        href="#main-content"
        className="sr-only fixed left-4 top-4 z-[70] rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--color-ink)] shadow-lg focus:not-sr-only focus:outline-none focus:ring-2 focus:ring-[var(--color-green)]"
      >
        Skip to content
      </a>
      <div id="top" />
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] bg-[linear-gradient(90deg,var(--color-green),var(--color-blue))]" />
      <Navbar items={navItems} />

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
