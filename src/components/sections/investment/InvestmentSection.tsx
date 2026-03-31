// Investment thesis section that groups market size, projections, and unit economics.
import { pageContainerClass } from "@/components/common/layout/PageContainer";
import { SectionHeading } from "@/components/common/ui/SectionHeading";
import { useHomeContent } from "@/content/home/useHomeContent";

import { MarketLayersShowcase } from "./MarketLayersShowcase";
import { RevenueProjectionCard } from "./RevenueProjectionCard";
import { UnitEconomicsGrid } from "./UnitEconomicsGrid";

export function InvestmentSection() {
  const { investment } = useHomeContent();

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

      <div className={pageContainerClass}>
        <SectionHeading
          badge={investment.badgeLabel}
          title={investment.heading}
        />
        <MarketLayersShowcase />
        <RevenueProjectionCard />
        <UnitEconomicsGrid />
      </div>
    </section>
  );
}
