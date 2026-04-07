"use client";

// Product platform section that explains how the system works end to end.
import { motion, useReducedMotion } from "motion/react";

import { pageContainerClass } from "@/components/common/layout/PageContainer";
import { SectionHeading } from "@/components/common/ui/SectionHeading";
import { driftLoop } from "@/components/common/motion/motion";

import { PlatformCapabilities } from "./PlatformCapabilities";
import { PlatformFlow } from "./PlatformFlow";

export function PlatformSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="platform" className="relative overflow-hidden pt-5 pb-12 md:pt-6 md:pb-14">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute rounded-full bg-[rgb(39,174,96)] blur-[60px]"
        style={{ width: "25rem", height: "25rem", left: "60%", top: "20%", opacity: 0.16 }}
        animate={reduceMotion ? undefined : { x: [0, 14, 0], y: [0, -10, 0], scale: [1, 1.08, 1] }}
        transition={reduceMotion ? undefined : driftLoop(15)}
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
