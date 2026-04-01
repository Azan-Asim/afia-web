// Revenue strategy section that combines funnel mechanics with monetization streams.
import { pageContainerClass } from "@/components/common/layout/PageContainer";
import { SectionHeading } from "@/components/common/ui/SectionHeading";

import { RevenueFunnelCard } from "./RevenueFunnelCard";
import { RevenueStreamsList } from "./RevenueStreamsList";

export function RevenueSection() {
  return (
    <section id="revenue" className="bg-white py-16 md:py-20">
      <div className={pageContainerClass}>
        <SectionHeading
          badge="Business Model"
          title="Multi-Layer AI Revenue Engine"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <RevenueFunnelCard />
          <RevenueStreamsList />
        </div>
      </div>
    </section>
  );
}
