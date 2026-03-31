// Capability cards that describe the major product building blocks in the platform stack.
import { SurfaceCard } from "@/components/common/ui/SurfaceCard";
import { platformCapabilities } from "@/content/home/platform/PlatformContent";

import { PlatformCapabilityVisual } from "./PlatformCapabilityVisuals";

export function PlatformCapabilities() {
  return (
    <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {platformCapabilities.map((item) => (
        <SurfaceCard
          key={item.title}
          className="border-[1.5px] border-black/6 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
        >
          <div className="mb-4 h-24">
            <PlatformCapabilityVisual title={item.title} />
          </div>
          <h3 className="text-sm font-semibold text-[#2D2D2D]">
            {item.title}
          </h3>
        </SurfaceCard>
      ))}
    </div>
  );
}
