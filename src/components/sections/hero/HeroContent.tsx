"use client";

// Animated hero copy block that cycles through product positioning and headline messaging.
import { useEffect, useState } from "react";
import Link from "next/link";

import { LineIcon } from "@/components/common/icons/LineIcons";
import { heroMetrics } from "@/content/home/hero/HeroContent";

type HeroContentProps = {
  cycle: number;
  isActive: boolean;
};

export function HeroContent({ cycle, isActive }: HeroContentProps) {
  const [marketCagrValue, setMarketCagrValue] = useState(0);

  useEffect(() => {
    if (cycle === 0) {
      return;
    }

    // Re-run the CAGR count-up every time the hero section becomes active again.
    const durationMs = 1400;
    const targetValue = 14.9;
    const startTime = performance.now();

    let frameId = 0;

    const updateValue = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const easedProgress = 1 - (1 - progress) * (1 - progress);

      setMarketCagrValue(targetValue * easedProgress);

      if (progress < 1) {
        frameId = window.requestAnimationFrame(updateValue);
      }
    };

    frameId = window.requestAnimationFrame(updateValue);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [cycle]);

  return (
    <div className="space-y-8 translate-x-2 sm:translate-x-4 md:translate-x-8 lg:translate-x-14 xl:translate-x-[4.5rem]">
      <div
        className={
          isActive
            ? "motion-safe:animate-[hero-enter_700ms_cubic-bezier(0.22,1,0.36,1)_both]"
            : "opacity-0"
        }
      >
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(39,174,96,0.2)] bg-[rgba(39,174,96,0.08)] px-3.5 py-1 text-xs font-semibold text-[rgb(39,174,96)] [font-synthesis:none]">
          <LineIcon name="sparkles" className="size-3" />
          Investor Overview
        </span>
      </div>

      <div
        className={`space-y-5 ${
          isActive
            ? "motion-safe:animate-[hero-enter_820ms_cubic-bezier(0.22,1,0.36,1)_both]"
            : "opacity-0"
        }`}
        style={{ animationDelay: "120ms" }}
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
      </div>

      <dl
        className={`flex flex-wrap gap-6 md:gap-8 ${
          isActive
            ? "motion-safe:animate-[hero-enter_900ms_cubic-bezier(0.22,1,0.36,1)_both]"
            : "opacity-0"
        }`}
        style={{ animationDelay: "220ms" }}
      >
        {heroMetrics.map((metric) => (
          <div key={metric.label} className="flex flex-col">
            <dd className="text-[1.9rem] font-bold tracking-[-0.03em] text-[#2D2D2D]">
              {metric.label === "Market CAGR"
                ? `${marketCagrValue.toFixed(1)}%`
                : metric.value}
            </dd>
            <dt className="mt-0.5 text-xs font-medium text-[#9CA3AF]">
              {metric.label}
            </dt>
          </div>
        ))}
      </dl>

      <div
        className={`flex flex-wrap gap-3 ${
          isActive
            ? "motion-safe:animate-[hero-enter_980ms_cubic-bezier(0.22,1,0.36,1)_both]"
            : "opacity-0"
        }`}
        style={{ animationDelay: "320ms" }}
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
          className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-[rgba(39,174,96,0.25)] bg-white px-6 py-3 text-sm font-medium text-[#2D2D2D] shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-transform duration-500 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-green)] focus-visible:ring-offset-2"
        >
          Explore
          <LineIcon name="chevronRight" className="size-4 text-[#27AE60]" />
        </a>
      </div>
    </div>
  );
}
