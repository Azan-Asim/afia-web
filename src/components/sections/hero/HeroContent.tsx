// @ts-nocheck
"use client";

// Animated hero copy block that cycles through product positioning and headline messaging.
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { LineIcon } from "@/components/common/icons/LineIcons";
import { revealUp } from "@/components/common/motion/motion";
import {
  gradientCtaClass,
  gradientCtaFocusClass,
  secondaryCtaClass as sharedSecondaryCtaClass,
} from "@/components/common/styles/CtaStyles";
import { heroMetrics } from "@/content/home/hero/HeroContent";

type HeroContentProps = {
  isActive: boolean;
};

const heroPrimaryCtaClass =
  `${gradientCtaClass} ${gradientCtaFocusClass} px-5 py-2.5 text-sm leading-[var(--text-sm--line-height)] shadow-[0_4px_20px_rgba(39,174,96,0.25)] duration-500`;
const heroSecondaryCtaClass =
  `${sharedSecondaryCtaClass} border-[1.5px] border-[rgba(39,174,96,0.25)] px-6 py-3 text-sm shadow-[0_4px_16px_rgba(0,0,0,0.04)] duration-500`;

export function HeroContent({ isActive }: HeroContentProps) {
  return (
    <div className="space-y-8 translate-x-2 sm:translate-x-4 md:translate-x-8 lg:translate-x-14 xl:translate-x-[4.5rem]">
      <motion.div initial="hidden" animate={isActive ? "visible" : "hidden"} variants={revealUp(0, 24, 0.7)}>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(39,174,96,0.2)] bg-[rgba(39,174,96,0.08)] px-3.5 py-1 text-xs font-semibold text-[rgb(39,174,96)] [font-synthesis:none]">
          <LineIcon name="sparkles" className="size-3" />
          Investor Overview
        </span>
      </motion.div>

      <motion.div
        className="space-y-5"
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        variants={revealUp(0.12, 24, 0.82)}
      >
        <h1
          id="hero-title"
          className="font-[family:var(--font-display)] text-[clamp(32px,5vw,62px)] font-bold leading-[1.1] tracking-tight text-[#2D2D2D] [font-synthesis:none]"
        >
          The Personal
          <br />
          <span className="inline-block whitespace-nowrap bg-[linear-gradient(135deg,rgb(39,174,96),rgb(45,156,219))] bg-clip-text text-transparent">
            AI Health Decision
          </span>
          <br />
          Layer
        </h1>
        <p className="max-w-md text-[1.05rem] leading-[1.7] text-[#6B7280]">
          AI that transforms wearable signals into personal health decisions.
        </p>
      </motion.div>

      <motion.dl
        className="flex flex-wrap gap-6 md:gap-8"
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        variants={revealUp(0.22, 24, 0.9)}
      >
        {heroMetrics.map((metric) => (
          <div key={metric.label} className="flex flex-col">
            <dd className="text-[1.9rem] font-bold tracking-[-0.03em] text-[#2D2D2D]">
              {metric.value}
            </dd>
            <dt className="mt-0.5 text-xs font-medium text-[#9CA3AF]">
              {metric.label}
            </dt>
          </div>
        ))}
      </motion.dl>

      <motion.div
        className="flex flex-wrap gap-3"
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        variants={revealUp(0.32, 24, 0.98)}
      >
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full !bg-transparent [background-image:linear-gradient(135deg,rgb(39,174,96),rgb(45,156,219))] px-5 py-2.5 font-[family:var(--font-sans)] text-sm font-medium leading-[var(--text-sm--line-height)] !text-white [font-synthesis:none] shadow-[0_4px_20px_rgba(39,174,96,0.25)] transition-transform duration-500 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-blue)] focus-visible:ring-offset-2"
        >
          <LineIcon name="mail" className="size-3.5 !text-white" />
          Contact
        </Link>
        <a
          href="#platform"
          className={heroSecondaryCtaClass}
        >
          Explore
          <LineIcon name="chevronRight" className="size-4 text-[#27AE60]" />
        </a>
      </motion.div>
    </div>
  );
}
