import { pageContainerClass } from "@/components/common/layout/PageContainer";
import { ScrollActiveZoom } from "@/components/common/motion/ScrollActiveZoom";
import { SectionBadge } from "@/components/common/ui/SectionBadge";

import { OpportunityComparison } from "./OpportunityComparison";
import { OpportunityHighlights } from "./OpportunityHighlights";

export function OpportunitySection() {
  return (
    <section id="opportunity" className="relative overflow-hidden bg-white py-24 md:py-32">
      <ScrollActiveZoom variant="story" className={pageContainerClass}>
        <div className="space-y-4 text-center">
          <SectionBadge title="Market Opportunity" />
          <h2 className="font-[family:var(--font-display)] text-[clamp(28px,4vw,46px)] font-bold leading-[1.1] tracking-[-0.02em] text-[#2D2D2D]">
            The AI Gap No One Has Solved
          </h2>
        </div>
        <OpportunityHighlights />
        <OpportunityComparison />
      </ScrollActiveZoom>
    </section>
  );
}
