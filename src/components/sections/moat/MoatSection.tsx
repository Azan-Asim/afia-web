// Competitive moat section that pairs the orbit visual with feature-level advantages.
import { pageContainerClass } from "@/components/common/layout/PageContainer";
import { SectionHeading } from "@/components/common/ui/SectionHeading";

import { MoatFeatureList } from "./MoatFeatureList";
import { MoatVisual } from "./MoatVisual";

export function MoatSection() {
  return (
    <section id="moat" className="relative pt-5 pb-12 md:pt-6 md:pb-14">
      <div
        aria-hidden="true"
        className="absolute left-[-4%] top-[28%] size-[20rem] rounded-full bg-[rgba(45,156,219,0.16)] blur-3xl"
      />
      <div className={pageContainerClass}>
        <SectionHeading
          badge="Competitive Moat"
          title="An AI Moat Difficult to Replicate"
        />

        <div className="mt-10 grid items-center gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <MoatVisual />
          <MoatFeatureList />
        </div>
      </div>
    </section>
  );
}
