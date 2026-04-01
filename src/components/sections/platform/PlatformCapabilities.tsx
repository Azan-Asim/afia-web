// Capability cards that describe the major product building blocks in the platform stack.
import { SurfaceCard } from "@/components/common/ui/SurfaceCard";
import { platformCapabilities } from "@/content/home/platform/PlatformContent";

import { PlatformCapabilityVisual } from "./PlatformCapabilityVisuals";

export function PlatformCapabilities() {
  return (
    <div className="mt-12 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
      {platformCapabilities.map((item) => (
        <SurfaceCard
          key={item.title}
          className="mx-auto w-full max-w-[18rem] border-[1.5px] border-black/10 px-4.5 pt-4.5 pb-3 shadow-[0_6px_20px_rgba(0,0,0,0.05)]"
        >
          <div className="mb-2.5 h-16">
            <PlatformCapabilityVisual title={item.title} />
          </div>
          <h3 className="text-[0.95rem] font-semibold text-[#2D2D2D]">
            {item.title}
          </h3>
        </SurfaceCard>
      ))}
    </div>
  );
}
