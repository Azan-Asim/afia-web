import { pageContainerClass } from "@/components/common/layout/PageContainer";
import { ScrollActiveZoom } from "@/components/common/motion/ScrollActiveZoom";
import { SectionHeading } from "@/components/common/ui/SectionHeading";

import { MarketLayersShowcase } from "./MarketLayersShowcase";
import { RevenueProjectionCard } from "./RevenueProjectionCard";
import { UnitEconomicsGrid } from "./UnitEconomicsGrid";

export function InvestmentSection() {
  return (
    <section id="investment" className="relative py-24 md:py-32">
      <div
        aria-hidden="true"
        className="absolute right-[-6%] top-[8%] size-[20rem] rounded-full bg-[rgba(39,174,96,0.16)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute left-[-4%] top-[55%] size-[16rem] rounded-full bg-[rgba(45,156,219,0.16)] blur-3xl"
      />

      <ScrollActiveZoom variant="data" className={pageContainerClass}>
        <SectionHeading
          badge="Investment Opportunity"
          title="Why Invest in Afia AI"
        />
        <MarketLayersShowcase />
        <RevenueProjectionCard />
        <UnitEconomicsGrid />
      </ScrollActiveZoom>
    </section>
  );
}
