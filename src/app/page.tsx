// Home page composition that arranges the landing sections in display order.
import { Footer } from "@/components/footer/Footer";
import { Navbar } from "@/components/header/Navbar";
import { ContactPageContent } from "@/components/sections/contact/ContactPageContent";
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
      <Navbar items={navItems} />

      <main id="main-content">
        <HeroSection />
        <OpportunitySection />
        <PlatformSection />
        <InvestmentSection />
        <RevenueSection />
        <MoatSection />
        <SwotSection />
        {/* <ContactSection /> */}
        <section id="contact">
          <ContactPageContent />
        </section>
      </main>

      <Footer />
    </div>
  );
}
