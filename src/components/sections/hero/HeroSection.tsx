import { pageContainerClass } from "@/components/common/layout/PageContainer";
import { ScrollActiveZoom } from "@/components/common/motion/ScrollActiveZoom";

import { HeroContent } from "./HeroContent";
import { HeroVisual } from "./HeroVisual";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#fffdfa_0%,#faf7f2_100%)] pb-14 pt-28 md:pb-16 md:pt-24">
      <div
        aria-hidden="true"
        className="absolute left-[-18%] top-[-4%] h-[50rem] w-[46rem] rounded-full bg-[rgb(39,174,96)] opacity-[0.2] blur-[98px] motion-safe:animate-[hero-drift_18s_ease-in-out_infinite]"
      />
      <div
        aria-hidden="true"
        className="absolute left-[2%] top-[52%] h-[22rem] w-[30rem] rounded-full bg-[rgb(39,174,96)] opacity-[0.13] blur-[92px] motion-safe:animate-[hero-drift-alt_20s_ease-in-out_infinite]"
      />
      <div
        aria-hidden="true"
        className="absolute left-[62%] top-[-4%] h-[32rem] w-[32rem] rounded-full bg-[rgb(45,156,219)] opacity-[0.14] blur-[78px] motion-safe:animate-[hero-drift-alt_18s_ease-in-out_infinite]"
      />
      <div
        aria-hidden="true"
        className="absolute left-[78%] top-[64%] h-[22rem] w-[22rem] rounded-full bg-[rgb(39,174,96)] opacity-[0.1] blur-[72px] motion-safe:animate-[hero-drift_17s_ease-in-out_infinite]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(45,45,45,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(45,45,45,0.8)_1px,transparent_1px)] [background-size:48px_48px]"
      />

      <ScrollActiveZoom
        variant="hero"
        className={`relative ${pageContainerClass}`}
      >
        <div
          className="grid items-center gap-14 md:gap-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-24 xl:gap-28"
        >
          <HeroContent />
          <div className="w-full motion-safe:animate-[hero-enter_1100ms_cubic-bezier(0.22,1,0.36,1)_both] motion-safe:[animation-delay:220ms]">
            <HeroVisual />
          </div>
        </div>
      </ScrollActiveZoom>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 opacity-40 md:flex">
        <div className="h-8 w-px bg-[#27AE60]" />
        <div className="size-2.5 rounded-full bg-[#27AE60] motion-safe:animate-[hero-scroll-indicator_4.8s_ease-in-out_infinite]" />
      </div>
    </section>
  );
}
