"use client";

// Top-of-page hero section that combines intro copy, metrics, and the main visual.
import { pageContainerClass } from "@/components/common/layout/PageContainer";
import { useInViewOnce } from "@/components/sections/opportunity/useInViewOnce";

import { HeroContent } from "./HeroContent";
import { HeroVisual } from "./HeroVisual";

export function HeroSection() {
  // The hero replays its staged entry whenever the section becomes active again.
  const { ref, hasEntered, cycle } = useInViewOnce<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#fffdfa_0%,#faf7f2_100%)] pb-14 pt-28 md:pb-16 md:pt-24"
    >
      <div
        aria-hidden="true"
        className="absolute left-[-32%] top-[-12%] h-[31rem] w-[27rem] rounded-full bg-[rgb(39,174,96)] opacity-[0.15] blur-[88px] motion-safe:animate-[hero-drift_18s_ease-in-out_infinite] sm:left-[-24%] sm:top-[-10%] sm:h-[35rem] sm:w-[31rem] md:left-[-16%] md:top-[-9%] md:h-[40rem] md:w-[36rem] lg:left-[-12%] lg:top-[-7%] lg:h-[45rem] lg:w-[40rem] xl:left-[-10%] xl:h-[47rem] xl:w-[42rem]"
      />
      <div
        aria-hidden="true"
        className="absolute left-[-12%] top-[59%] h-[15rem] w-[19rem] rounded-full bg-[rgb(39,174,96)] opacity-[0.1] blur-[82px] motion-safe:animate-[hero-drift-alt_20s_ease-in-out_infinite] sm:left-[-4%] sm:top-[58%] sm:h-[17rem] sm:w-[22rem] md:left-[2%] md:top-[56%] md:h-[19rem] md:w-[24rem] lg:left-[6%] lg:top-[54%] lg:h-[21rem] lg:w-[27rem]"
      />
      <div
        aria-hidden="true"
        className="absolute left-[58%] top-[-10%] h-[20rem] w-[20rem] rounded-full bg-[rgb(45,156,219)] opacity-[0.12] blur-[72px] motion-safe:animate-[hero-drift-alt_18s_ease-in-out_infinite] sm:left-[60%] sm:top-[-8%] sm:h-[22rem] sm:w-[22rem] md:left-[62%] md:top-[-7%] md:h-[25rem] md:w-[25rem] lg:left-[64%] lg:top-[-6%] lg:h-[29rem] lg:w-[29rem] xl:left-[66%] xl:h-[31rem] xl:w-[31rem]"
      />
      <div
        aria-hidden="true"
        className="absolute left-[74%] top-[66%] h-[14rem] w-[14rem] rounded-full bg-[rgb(39,174,96)] opacity-[0.08] blur-[68px] motion-safe:animate-[hero-drift_17s_ease-in-out_infinite] sm:left-[76%] sm:top-[65%] sm:h-[16rem] sm:w-[16rem] md:left-[78%] md:top-[64%] md:h-[18rem] md:w-[18rem] lg:left-[80%] lg:top-[63%] lg:h-[20rem] lg:w-[20rem]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(45,45,45,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(45,45,45,0.8)_1px,transparent_1px)] [background-size:48px_48px]"
      />

      <div
        className={`relative ${pageContainerClass}`}
      >
        <div
          className="grid items-center gap-14 md:gap-16 lg:grid-cols-[0.82fr_1.18fr] lg:gap-44 xl:gap-40"
        >
          {/* Remount on cycle change so metric counts and staged text reveals restart cleanly. */}
          <HeroContent key={cycle} cycle={cycle} isActive={hasEntered} />
          <div
            className={`w-full ${
              hasEntered
                ? "motion-safe:animate-[hero-enter_1100ms_cubic-bezier(0.22,1,0.36,1)_both]"
                : "opacity-0"
            }`}
            style={{ animationDelay: "220ms" }}
          >
            <HeroVisual cycle={cycle} />
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 opacity-40 md:bottom-8">
        <div className="h-7 w-px bg-[#27AE60] md:h-8" />
        <div className="size-2 rounded-full bg-[#27AE60] motion-safe:animate-[hero-scroll-indicator_4.8s_ease-in-out_infinite] md:size-2.5" />
      </div>
    </section>
  );
}
