// Product platform section that explains how the system works end to end.
import { pageContainerClass } from "@/components/common/layout/PageContainer";
import { SectionHeading } from "@/components/common/ui/SectionHeading";
import { useHomeContent } from "@/content/home/useHomeContent";

import { PlatformCapabilities } from "./PlatformCapabilities";
import { PlatformFlow } from "./PlatformFlow";

export function PlatformSection() {
  const { platform } = useHomeContent();

  return (
    <section id="platform" className="relative overflow-hidden py-24 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute rounded-full bg-[rgb(39,174,96)] blur-[60px] motion-safe:animate-[hero-drift_15s_ease-in-out_infinite]"
        style={{ width: "25rem", height: "25rem", left: "60%", top: "20%", opacity: 0.16 }}
      />
      <div className={pageContainerClass}>
        <SectionHeading
          badge={platform.badgeLabel}
          title={platform.heading}
        />
        <PlatformFlow />
        <PlatformCapabilities />
      </div>
    </section>
  );
}
