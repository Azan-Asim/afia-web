"use client";

// Animated hero copy block that cycles through product positioning and headline messaging.
import { useEffect, useState } from "react";

import { LineIcon } from "@/components/common/icons/LineIcons";
import {
  gradientCtaClass,
  gradientCtaFocusClass,
  secondaryCtaClass as sharedSecondaryCtaClass,
} from "@/components/common/styles/CtaStyles";
import { useHomeContent } from "@/content/home/useHomeContent";
import { useLocale } from "@/content/i18n/LocaleProvider";

type HeroContentProps = {
  cycle: number;
  isActive: boolean;
};

const heroCagrAnimationDurationMs = 1400;
const heroCagrTargetValue = 14.9;
const heroPrimaryCtaClass =
  `${gradientCtaClass} ${gradientCtaFocusClass} px-5 py-2.5 text-sm leading-[var(--text-sm--line-height)] shadow-[0_4px_20px_rgba(39,174,96,0.25)] duration-500`;
const heroSecondaryCtaClass =
  `${sharedSecondaryCtaClass} border-[1.5px] border-[rgba(39,174,96,0.25)] px-6 py-3 text-sm shadow-[0_4px_16px_rgba(0,0,0,0.04)] duration-500`;

export function HeroContent({ cycle, isActive }: HeroContentProps) {
  const [marketCagrValue, setMarketCagrValue] = useState(0);
  const { hero } = useHomeContent();
  const { direction } = useLocale();
  const isRtl = direction === "rtl";

  useEffect(() => {
    if (cycle === 0) {
      return;
    }

    // Re-run the CAGR count-up every time the hero section becomes active again.
    const startTime = performance.now();

    let frameId = 0;

    const updateValue = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / heroCagrAnimationDurationMs, 1);
      const easedProgress = 1 - (1 - progress) * (1 - progress);

      setMarketCagrValue(heroCagrTargetValue * easedProgress);

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
    <div
      className={`space-y-8 ${
        isRtl
          ? "text-right lg:ml-auto lg:max-w-[37rem] lg:translate-x-12 xl:max-w-[39rem] xl:translate-x-14"
          : "translate-x-2 sm:translate-x-4 md:translate-x-8 lg:translate-x-14 xl:translate-x-[4.5rem]"
      }`}
    >
      <div
        className={
          isActive
            ? "motion-safe:animate-[hero-enter_700ms_cubic-bezier(0.22,1,0.36,1)_both]"
            : "opacity-0"
        }
      >
        <span
          className={`inline-flex items-center rounded-full border border-[rgba(39,174,96,0.2)] bg-[rgba(39,174,96,0.08)] px-3.5 py-1 text-xs font-semibold text-[rgb(39,174,96)] [font-synthesis:none] ${
            isRtl ? "flex-row-reverse gap-1.5" : "gap-1.5"
          }`}
        >
          <LineIcon name="sparkles" className="size-3" />
          {hero.badgeLabel}
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
          className={`font-[family:var(--font-display)] text-[clamp(32px,5vw,62px)] font-bold leading-[1.1] tracking-tight text-[#2D2D2D] [font-synthesis:none] ${
            isRtl
              ? "ml-auto max-w-[12ch] text-[clamp(24px,3.35vw,44px)] leading-[1.16] xl:max-w-[13ch] xl:text-[clamp(26px,3.5vw,48px)]"
              : "text-[clamp(30px,4.6vw,58px)]"
          }`}
        >
          {hero.titleLines[0]}
          <br />
          <span
            className={`inline-block bg-[linear-gradient(135deg,rgb(39,174,96),rgb(45,156,219))] bg-clip-text text-transparent ${
              isRtl ? "whitespace-nowrap" : "whitespace-nowrap"
            }`}
          >
            {hero.titleLines[1]}
          </span>
          <br />
          {hero.titleLines[2]}
        </h1>
        <p
          className={`text-[1.05rem] leading-[1.7] text-[#6B7280] ${
            isRtl ? "ml-auto max-w-md lg:max-w-md xl:max-w-lg" : "max-w-md"
          }`}
        >
          {hero.description}
        </p>
      </div>

      <dl
        className={`flex flex-wrap gap-6 md:gap-8 ${
          isActive
            ? "motion-safe:animate-[hero-enter_900ms_cubic-bezier(0.22,1,0.36,1)_both]"
            : "opacity-0"
        } ${isRtl ? "justify-end" : ""}`}
        style={{ animationDelay: "220ms" }}
      >
        {hero.metrics.map((metric) => (
          <div key={metric.id} className={`flex flex-col ${isRtl ? "items-end" : ""}`}>
            <dd className="text-[1.9rem] font-bold tracking-[-0.03em] text-[#2D2D2D]">
              {metric.id === "marketCagr"
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
        } ${isRtl ? "justify-end" : ""}`}
        style={{ animationDelay: "320ms" }}
      >
        <a
          href="#contact"
          className={`${heroPrimaryCtaClass} ${isRtl ? "flex-row-reverse" : ""}`}
        >
          <LineIcon name="mail" className="size-3.5 !text-white" />
          {hero.primaryCtaLabel}
        </a>
        <a
          href="#platform"
          className={`${heroSecondaryCtaClass} ${isRtl ? "flex-row-reverse" : ""}`}
        >
          {hero.secondaryCtaLabel}
          <LineIcon name="chevronRight" className="size-4 text-[#27AE60]" />
        </a>
      </div>
    </div>
  );
}
