// Competitive moat section that pairs the orbit visual with feature-level advantages.
import { pageContainerClass } from "@/components/common/layout/PageContainer";
import { SectionHeading } from "@/components/common/ui/SectionHeading";
import { useHomeContent } from "@/content/home/useHomeContent";

import { MoatFeatureList } from "./MoatFeatureList";
import { MoatVisual } from "./MoatVisual";

export function MoatSection() {
  const { moat } = useHomeContent();

  return (
    <section id="moat" className="relative py-24 md:py-32">
      <div
        aria-hidden="true"
        className="absolute left-[-4%] top-[28%] size-[20rem] rounded-full bg-[rgba(45,156,219,0.16)] blur-3xl"
      />
      <div className={pageContainerClass}>
        <SectionHeading
          badge={moat.badgeLabel}
          title={moat.heading}
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <MoatVisual />
          <MoatFeatureList />
        </div>
      </div>
    </section>
  );
}
