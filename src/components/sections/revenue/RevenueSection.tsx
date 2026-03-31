// Revenue strategy section that combines funnel mechanics with monetization streams.
import { pageContainerClass } from "@/components/common/layout/PageContainer";
import { SectionHeading } from "@/components/common/ui/SectionHeading";
import { useHomeContent } from "@/content/home/useHomeContent";

import { RevenueFunnelCard } from "./RevenueFunnelCard";
import { RevenueStreamsList } from "./RevenueStreamsList";

export function RevenueSection() {
  const { revenue } = useHomeContent();

  return (
    <section id="revenue" className="bg-white py-24 md:py-32">
      <div className={pageContainerClass}>
        <SectionHeading
          badge={revenue.badgeLabel}
          title={revenue.heading}
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <RevenueFunnelCard />
          <RevenueStreamsList />
        </div>
      </div>
    </section>
  );
}
