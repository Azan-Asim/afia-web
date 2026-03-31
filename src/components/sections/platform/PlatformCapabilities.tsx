// Capability cards that describe the major product building blocks in the platform stack.
import { SurfaceCard } from "@/components/common/ui/SurfaceCard";
import { useHomeContent } from "@/content/home/useHomeContent";
import { useLocale } from "@/content/i18n/LocaleProvider";

import { PlatformCapabilityVisual } from "./PlatformCapabilityVisuals";

export function PlatformCapabilities() {
  const { platform } = useHomeContent();
  const { direction } = useLocale();
  const isRtl = direction === "rtl";

  return (
    <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {platform.capabilities.map((item) => (
        <SurfaceCard
          key={item.id}
          className={`border-[1.5px] border-black/6 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] ${
            isRtl ? "min-h-[19rem]" : ""
          }`}
        >
          <div className="mb-4 h-24">
            <PlatformCapabilityVisual capabilityId={item.id} />
          </div>
          <h3
            className={`font-semibold text-[#2D2D2D] ${
              isRtl
                ? "text-[0.82rem] leading-6 tracking-[-0.02em] sm:text-[0.84rem]"
                : "text-sm"
            }`}
          >
            {item.title}
          </h3>
          <p
            className={`mt-2 text-[#6B7280] ${
              isRtl
                ? "text-[0.82rem] leading-[1.65] tracking-[-0.02em]"
                : "text-sm leading-6"
            }`}
          >
            {item.description}
          </p>
        </SurfaceCard>
      ))}
    </div>
  );
}
