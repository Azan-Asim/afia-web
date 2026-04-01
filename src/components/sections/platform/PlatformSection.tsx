// Product platform section that explains how the system works end to end.
import { pageContainerClass } from "@/components/common/layout/PageContainer";
import { SectionHeading } from "@/components/common/ui/SectionHeading";

import { PlatformCapabilities } from "./PlatformCapabilities";
import { PlatformFlow } from "./PlatformFlow";

export function PlatformSection() {
  return (
    <section id="platform" className="relative overflow-hidden py-16 md:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute rounded-full bg-[rgb(39,174,96)] blur-[60px] motion-safe:animate-[hero-drift_15s_ease-in-out_infinite]"
        style={{ width: "25rem", height: "25rem", left: "60%", top: "20%", opacity: 0.16 }}
      />
      <div className={pageContainerClass}>
        <SectionHeading
          badge="AI Platform"
          title="AI Intelligence at Every Layer"
        />
        <PlatformFlow />
        <PlatformCapabilities />
      </div>
    </section>
  );
}
