// Market opportunity section that introduces the problem space and supporting evidence.
import { pageContainerClass } from "@/components/common/layout/PageContainer";
import { SectionBadge } from "@/components/common/ui/SectionBadge";
import { useHomeContent } from "@/content/home/useHomeContent";

import { OpportunityComparison } from "./OpportunityComparison";
import { OpportunityHighlights } from "./OpportunityHighlights";

export function OpportunitySection() {
  const { opportunity } = useHomeContent();

  return (
    <section id="opportunity" className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className={pageContainerClass}>
        <div className="space-y-4 text-center">
          <SectionBadge title={opportunity.badgeLabel} />
          <h2 className="font-[family:var(--font-display)] text-[clamp(28px,4vw,46px)] font-bold leading-[1.1] tracking-[-0.02em] text-[#2D2D2D]">
            {opportunity.heading}
          </h2>
        </div>
        <OpportunityHighlights />
        <OpportunityComparison />
      </div>
    </section>
  );
}
