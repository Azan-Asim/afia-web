import type { ReactNode } from "react";

import { AfiaLogo } from "@/components/branding/afia-logo";
import { LineIcon } from "@/components/icons/line-icons";
import { InvestorNavbar } from "@/components/sections/investor-navbar";
import {
  floatingSignals,
  heroMetrics,
  navItems,
  opportunityCards,
} from "@/data/investor-content";
import type { Accent, IconName } from "@/types/investor";

const accentStyles: Record<
  Accent,
  {
    text: string;
    soft: string;
    border: string;
    solid: string;
    softSolid: string;
    shadow: string;
  }
> = {
  green: {
    text: "text-[var(--color-green)]",
    soft: "bg-[var(--color-green-soft)]",
    border: "border-[color:var(--color-green-soft-border)]",
    solid: "bg-[var(--color-green)]",
    softSolid: "bg-[rgba(39,174,96,0.14)]",
    shadow: "shadow-[0_14px_36px_rgba(39,174,96,0.15)]",
  },
  blue: {
    text: "text-[var(--color-blue)]",
    soft: "bg-[var(--color-blue-soft)]",
    border: "border-[color:var(--color-blue-soft-border)]",
    solid: "bg-[var(--color-blue)]",
    softSolid: "bg-[rgba(45,156,219,0.14)]",
    shadow: "shadow-[0_14px_36px_rgba(45,156,219,0.15)]",
  },
  purple: {
    text: "text-[var(--color-purple)]",
    soft: "bg-[var(--color-purple-soft)]",
    border: "border-[color:var(--color-purple-soft-border)]",
    solid: "bg-[var(--color-purple)]",
    softSolid: "bg-[rgba(139,92,246,0.14)]",
    shadow: "shadow-[0_14px_36px_rgba(139,92,246,0.15)]",
  },
  orange: {
    text: "text-[var(--color-orange)]",
    soft: "bg-[var(--color-orange-soft)]",
    border: "border-[color:var(--color-orange-soft-border)]",
    solid: "bg-[var(--color-orange)]",
    softSolid: "bg-[rgba(245,158,11,0.14)]",
    shadow: "shadow-[0_14px_36px_rgba(245,158,11,0.16)]",
  },
  pink: {
    text: "text-[var(--color-pink)]",
    soft: "bg-[var(--color-pink-soft)]",
    border: "border-[color:var(--color-pink-soft-border)]",
    solid: "bg-[var(--color-pink)]",
    softSolid: "bg-[rgba(236,72,153,0.14)]",
    shadow: "shadow-[0_14px_36px_rgba(236,72,153,0.15)]",
  },
  red: {
    text: "text-[var(--color-red)]",
    soft: "bg-[var(--color-red-soft)]",
    border: "border-[color:var(--color-red-soft-border)]",
    solid: "bg-[var(--color-red)]",
    softSolid: "bg-[rgba(239,68,68,0.14)]",
    shadow: "shadow-[0_14px_36px_rgba(239,68,68,0.15)]",
  },
};

function SectionBadge({ title }: { title: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-green-soft-border)] bg-[var(--color-green-soft)] px-3.5 py-1 text-xs font-semibold text-[var(--color-green)]">
      <LineIcon name="sparkles" className="size-3.5" />
      {title}
    </span>
  );
}

function SectionHeading({
  badge,
  title,
  description,
  centered = true,
}: {
  badge: string;
  title: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div className={`space-y-4 ${centered ? "text-center" : ""}`}>
      <SectionBadge title={badge} />
      <div className="space-y-3">
        <h2 className="font-[family:var(--font-display)] text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.04em] text-[var(--color-ink)]">
          {title}
        </h2>
        {description ? (
          <p className="mx-auto max-w-2xl text-sm leading-7 text-[var(--color-muted)] md:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}

function PillButton({
  href,
  label,
  icon,
  secondary = false,
}: {
  href: string;
  label: string;
  icon: IconName;
  secondary?: boolean;
}) {
  if (secondary) {
    return (
      <a
        href={href}
        className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-green-soft-border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-ink)] shadow-[0_8px_24px_rgba(17,24,39,0.05)] transition-transform duration-300 hover:-translate-y-0.5"
      >
        {label}
        <LineIcon
          name={icon}
          className="size-4 text-[var(--color-green)]"
        />
      </a>
    );
  }

  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--color-green),var(--color-blue))] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_36px_rgba(39,174,96,0.26)] transition-transform duration-300 hover:-translate-y-0.5"
    >
      <LineIcon name={icon} className="size-4" />
      {label}
    </a>
  );
}

function SurfaceCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[2rem] border border-black/6 bg-white shadow-[0_10px_32px_rgba(17,24,39,0.05)] ${className}`}
    >
      {children}
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative flex min-h-[32rem] items-center justify-center">
      <div className="absolute inset-8 rounded-full bg-[radial-gradient(circle,rgba(39,174,96,0.14),transparent_65%)]" />
      <div className="absolute inset-0 grid place-items-center">
        <div className="relative size-80 rounded-full border border-[color:rgba(39,174,96,0.18)] bg-[radial-gradient(circle_at_center,rgba(39,174,96,0.12),transparent_66%)]">
          <div className="absolute inset-9 rounded-full border border-dashed border-[color:rgba(45,156,219,0.25)]" />
          <div className="absolute inset-[4.5rem] rounded-full border border-white/50 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.72),rgba(255,255,255,0.08))] backdrop-blur-sm" />
          <div className="absolute inset-[6.5rem] rounded-full bg-[linear-gradient(135deg,var(--color-green),var(--color-blue))] shadow-[0_24px_60px_rgba(39,174,96,0.28)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative z-10 text-center">
              <div className="mx-auto mb-3 flex size-16 items-center justify-center rounded-full bg-white/18 backdrop-blur">
                <AfiaLogo compact inverse className="gap-0" />
              </div>
              <span className="text-sm font-bold tracking-[0.18em] text-white/90">
                AFIA AI
              </span>
            </div>
          </div>

          {floatingSignals.map((signal) => {
            const styles = accentStyles[signal.accent];

            return (
              <div key={signal.label} className={`absolute ${signal.position}`}>
                <div
                  className={`min-w-28 rounded-2xl border bg-white px-3 py-2.5 ${styles.border} ${styles.shadow}`}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`flex size-8 items-center justify-center rounded-xl ${styles.soft} ${styles.text}`}
                    >
                      <LineIcon name={signal.icon} className="size-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--color-subtle)]">
                        {signal.label}
                      </div>
                      <div className="text-xs font-semibold text-[var(--color-ink)]">
                        {signal.value}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function InvestorPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--color-sand)] text-[var(--color-ink)]">
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] bg-[linear-gradient(90deg,var(--color-green),var(--color-blue))]" />
      <InvestorNavbar items={navItems} />

      <main>
        <section className="relative overflow-hidden pb-20 pt-10 md:pb-24 md:pt-16">
          <div className="absolute left-[-6%] top-[10%] size-[28rem] rounded-full bg-[rgba(39,174,96,0.18)] blur-3xl" />
          <div className="absolute right-[-4%] top-[4%] size-[22rem] rounded-full bg-[rgba(45,156,219,0.16)] blur-3xl" />
          <div className="absolute bottom-[12%] right-[8%] size-[18rem] rounded-full bg-[rgba(39,174,96,0.14)] blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(45,45,45,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(45,45,45,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />

          <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.03fr_0.97fr] lg:px-10">
            <div className="space-y-8 py-10 lg:py-20">
              <SectionBadge title="Investor Overview" />

              <div className="space-y-5">
                <h1 className="font-[family:var(--font-display)] text-[clamp(2.7rem,5vw,5rem)] font-bold leading-[1.02] tracking-[-0.06em] text-[var(--color-ink)]">
                  The Personal
                  <br />
                  <span className="bg-[linear-gradient(135deg,var(--color-green),var(--color-blue))] bg-clip-text text-transparent">
                    AI Health Decision
                  </span>
                  <br />
                  Layer
                </h1>
                <p className="max-w-xl text-base leading-8 text-[var(--color-muted)] md:text-lg">
                  Afia uses AI to transform wearable signals into clear,
                  actionable health intelligence, sitting at the intersection of
                  AI, preventive health, and the wearable era.
                </p>
              </div>

              <div className="flex flex-wrap gap-8">
                {heroMetrics.map((metric) => (
                  <div key={metric.label} className="space-y-1">
                    <div className="text-2xl font-bold tracking-[-0.04em] text-[var(--color-ink)] md:text-[1.75rem]">
                      {metric.value}
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-subtle)]">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <PillButton href="#contact" label="Request Deck" icon="mail" />
                <PillButton
                  href="#platform"
                  label="Explore Platform"
                  icon="chevronRight"
                  secondary
                />
              </div>
            </div>

            <HeroVisual />
          </div>
        </section>

        <section id="opportunity" className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHeading
              badge="Market Opportunity"
              title="The AI Gap No One Has Solved"
              description="Everyone captures health signals. Almost no one translates them into high-confidence, personal decisions."
            />

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {opportunityCards.map((card) => {
                const styles = accentStyles[card.accent];

                return (
                  <SurfaceCard key={card.title} className="relative p-8">
                    <div
                      className={`absolute left-8 right-8 top-0 h-1 rounded-b-full ${styles.solid}`}
                    />
                    <div
                      className={`mb-6 flex size-12 items-center justify-center rounded-2xl ${styles.soft} ${styles.text}`}
                    >
                      <LineIcon name={card.icon} className="size-6" />
                    </div>
                    <div className="text-[2rem] font-bold tracking-[-0.04em] text-[var(--color-ink)]">
                      {card.value}
                    </div>
                    <h3 className="mt-2 text-sm font-semibold text-[var(--color-ink)]">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-subtle)]">
                      {card.description}
                    </p>
                  </SurfaceCard>
                );
              })}
            </div>

            <div className="mt-20 grid gap-8 md:grid-cols-2">
              <div className="rounded-[2rem] border border-[color:var(--color-red-soft-border)] bg-[var(--color-red-soft)] p-8">
                <div className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-red)]">
                  <span className="size-2 rounded-full bg-[var(--color-red)]" />
                  Today&apos;s Reality, Without AI
                </div>
                <h3 className="text-sm font-semibold text-[var(--color-red)]">
                  Raw Data Overload
                </h3>
                <div className="mt-5 grid grid-cols-3 gap-3">
                  {[
                    ["HRV", "42ms", "red"],
                    ["SpO2", "97%", "orange"],
                    ["Steps", "8,240", "orange"],
                    ["Sleep", "7h 20m", "pink"],
                    ["Stress", "34", "red"],
                    ["Calories", "1,840", "orange"],
                  ].map(([label, value, accent]) => {
                    const styles = accentStyles[accent as Accent];

                    return (
                      <div
                        key={label}
                        className={`rounded-2xl border p-3 text-center ${styles.border} ${styles.soft}`}
                      >
                        <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--color-subtle)]">
                          {label}
                        </div>
                        <div className={`mt-1 text-sm font-bold ${styles.text}`}>
                          {value}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[var(--color-red)]">
                  <span className="size-2 rounded-full bg-[var(--color-red)]" />
                  No actionable guidance provided
                </div>
              </div>

              <div className="rounded-[2rem] border border-[color:var(--color-green-soft-border)] bg-[linear-gradient(135deg,rgba(39,174,96,0.05),rgba(45,156,219,0.05))] p-8">
                <div className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-green)]">
                  <span className="size-2 rounded-full bg-[var(--color-green)]" />
                  With Afia AI
                </div>
                <h3 className="text-sm font-semibold text-[var(--color-green)]">
                  Clear Intelligence
                </h3>
                <SurfaceCard className="mt-5 p-5">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex size-8 items-center justify-center rounded-full bg-[var(--color-green-soft)] text-[var(--color-green)]">
                      <LineIcon name="sparkles" className="size-4" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-subtle)]">
                      Afia Insight
                    </span>
                  </div>
                  <p className="text-base font-semibold text-[var(--color-ink)]">
                    Your body needs rest today.
                  </p>
                  <p className="mt-1 text-sm leading-7 text-[var(--color-subtle)]">
                    HRV is 18% below your baseline. Light activity is
                    recommended instead of intensity.
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-[rgba(39,174,96,0.1)]">
                      <div className="h-full w-[74%] rounded-full bg-[var(--color-green)]" />
                    </div>
                    <span className="text-sm font-bold text-[var(--color-green)]">
                      74
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--color-subtle)]">
                      /100
                    </span>
                  </div>
                </SurfaceCard>
                <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[var(--color-green)]">
                  <LineIcon name="sparkles" className="size-4" />
                  Decision delivered. No interpretation needed.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Temporarily hidden sections
        <section id="platform" className="relative py-24 md:py-32">
          <div className="absolute right-[4%] top-[18%] size-[26rem] rounded-full bg-[rgba(39,174,96,0.16)] blur-3xl" />
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHeading
              badge="AI Platform"
              title="AI Intelligence at Every Layer"
              description="Afia sits between raw biometric inputs and real-world health action, becoming the interpretation layer missing from the wearable stack."
            />

            <div className="mt-16 grid gap-5 lg:grid-cols-5">
              {platformSteps.map((step, index) => {
                const styles = accentStyles[step.accent];

                return (
                  <div key={step.title} className="flex items-center gap-4 lg:block">
                    <SurfaceCard
                      className={`flex-1 p-6 text-center ${
                        step.featured
                          ? "border-[color:var(--color-purple-soft-border)] bg-[linear-gradient(135deg,rgba(139,92,246,0.06),rgba(139,92,246,0.02))]"
                          : ""
                      }`}
                    >
                      <div
                        className={`mx-auto mb-4 flex size-12 items-center justify-center rounded-2xl ${styles.soft} ${styles.text}`}
                      >
                        <LineIcon name={step.icon} className="size-6" />
                      </div>
                      <h3 className="text-sm font-semibold text-[var(--color-ink)]">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-xs leading-6 text-[var(--color-subtle)]">
                        {step.subtitle}
                      </p>
                      {step.featured ? (
                        <div className="mt-3 inline-flex rounded-full bg-[var(--color-purple-soft)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--color-purple)]">
                          Afia Layer
                        </div>
                      ) : null}
                    </SurfaceCard>

                    {index < platformSteps.length - 1 ? (
                      <div className="hidden text-[var(--color-subtle)] lg:block">
                        <LineIcon name="chevronRight" className="size-5" />
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>

            <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {platformCapabilities.map((item) => {
                const styles = accentStyles[item.accent];

                return (
                  <SurfaceCard key={item.title} className="p-6">
                    <div
                      className={`mb-4 flex size-10 items-center justify-center rounded-2xl ${styles.soft} ${styles.text}`}
                    >
                      <LineIcon name={item.icon} className="size-5" />
                    </div>
                    <h3 className="text-sm font-semibold text-[var(--color-ink)]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--color-subtle)]">
                      {item.description}
                    </p>
                  </SurfaceCard>
                );
              })}
            </div>
          </div>
        </section>

        <section id="investment" className="relative py-24 md:py-32">
          <div className="absolute right-[-6%] top-[8%] size-[20rem] rounded-full bg-[rgba(39,174,96,0.16)] blur-3xl" />
          <div className="absolute left-[-4%] top-[55%] size-[16rem] rounded-full bg-[rgba(45,156,219,0.16)] blur-3xl" />

          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHeading
              badge="Investment Opportunity"
              title="Why Invest in Afia AI"
              description="Afia combines a large market, defensible AI positioning, and SaaS-grade revenue design in a category that is still missing a true interpretation layer."
            />

            <div className="mt-16 grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="flex justify-center">
                <div className="relative size-[19rem]">
                  <div className="absolute inset-0 rounded-full border-2 border-[color:var(--color-green-soft-border)] bg-[rgba(39,174,96,0.03)]" />
                  <div className="absolute inset-[2.65rem] rounded-full border-2 border-[color:var(--color-blue-soft-border)] bg-[rgba(45,156,219,0.03)]" />
                  <div className="absolute inset-[5.4rem] rounded-full border-2 border-[color:var(--color-purple-soft-border)] bg-[rgba(139,92,246,0.05)]" />

                  {marketLayers.map((layer, index) => {
                    const positions = [
                      "right-8 top-10",
                      "right-6 top-1/2 -translate-y-1/2",
                      "left-1/2 top-[68%] -translate-x-1/2",
                    ];
                    const styles = accentStyles[layer.accent];

                    return (
                      <div
                        key={layer.label}
                        className={`absolute ${positions[index]} text-center`}
                      >
                        <div className={`text-lg font-black ${styles.text}`}>
                          {layer.value}
                        </div>
                        <div className={`text-[10px] font-bold ${styles.text}`}>
                          {layer.label}
                        </div>
                      </div>
                    );
                  })}

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-full bg-[linear-gradient(135deg,var(--color-green),var(--color-blue))] p-7 text-center text-white shadow-[0_20px_50px_rgba(39,174,96,0.2)]">
                      <div className="text-2xl font-black tracking-[-0.04em]">
                        $1.2B
                      </div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.18em]">
                        SOM
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {marketLayers.map((layer) => {
                  const styles = accentStyles[layer.accent];

                  return (
                    <div
                      key={layer.label}
                      className={`rounded-[1.5rem] border p-5 ${styles.soft} ${styles.border}`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex size-10 items-center justify-center rounded-2xl ${styles.softSolid} ${styles.text} text-sm font-black`}
                        >
                          {layer.label}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[var(--color-ink)]">
                            {layer.value} - {layer.label} Market
                          </div>
                          <p className="mt-1 text-sm leading-7 text-[var(--color-subtle)]">
                            {layer.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div className="rounded-[1.5rem] border border-[color:var(--color-green-soft-border)] bg-[var(--color-green-soft)] p-5">
                  <p className="text-sm leading-7 text-[var(--color-muted)]">
                    <span className="font-semibold text-[var(--color-green)]">
                      Why MENA first:
                    </span>{" "}
                    high smartphone and wearable adoption, underserved AI health
                    infrastructure, and strong demand for preventive wellness.
                  </p>
                </div>
              </div>
            </div>

            <SurfaceCard className="mt-20 p-8 md:p-10">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-subtle)]">
                    5-Year AI Revenue Projection
                  </div>
                  <h3 className="mt-2 font-[family:var(--font-display)] text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-[-0.04em] text-[var(--color-ink)]">
                    Reaching{" "}
                    <span className="text-[var(--color-green)]">$58M ARR</span>{" "}
                    by Year 5
                  </h3>
                </div>
                <div className="flex gap-4 text-xs font-semibold text-[var(--color-subtle)]">
                  <div className="flex items-center gap-2">
                    <span className="size-3 rounded-sm bg-[rgba(39,174,96,0.35)]" />
                    Revenue ($M)
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1 w-4 rounded-full bg-[var(--color-blue)]" />
                    Users (K)
                  </div>
                </div>
              </div>

              <div className="mt-10 flex h-56 items-end gap-4">
                {revenueProjection.map((entry) => {
                  const styles = accentStyles[entry.accent];

                  return (
                    <div
                      key={entry.year}
                      className="flex flex-1 flex-col items-center gap-3"
                    >
                      <div className="flex h-44 w-full items-end justify-center gap-2">
                        <div
                          className={`relative flex w-full items-end justify-center rounded-t-2xl border border-black/6 pb-2 text-[10px] font-bold text-white ${entry.heightClassName} ${styles.softSolid}`}
                        >
                          <span className={styles.text}>{entry.revenue}</span>
                        </div>
                        <div className="h-[65%] w-2 rounded-t-full bg-[rgba(45,156,219,0.25)]" />
                      </div>
                      <div className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-muted)]">
                        {entry.year}
                      </div>
                      <div className="text-[10px] font-semibold text-[var(--color-subtle)]">
                        {entry.users}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-wrap gap-6 border-t border-black/5 pt-5 text-sm">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-subtle)]">
                    Year 1 Target
                  </div>
                  <div className="mt-1 font-semibold text-[var(--color-green)]">
                    50K users · $0.4M ARR
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-subtle)]">
                    Break-even
                  </div>
                  <div className="mt-1 font-semibold text-[var(--color-blue)]">
                    Year 3 at 600K users
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-subtle)]">
                    5-Year ARR
                  </div>
                  <div className="mt-1 font-semibold text-[var(--color-purple)]">
                    $58M at 3M users
                  </div>
                </div>
              </div>
            </SurfaceCard>

            <div className="mt-12 rounded-[2rem] border border-black/6 bg-white p-8 shadow-[0_10px_32px_rgba(17,24,39,0.05)]">
              <div className="mb-6 space-y-2">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-subtle)]">
                  Competitive Landscape
                </div>
                <h3 className="font-[family:var(--font-display)] text-[clamp(1.4rem,2.4vw,2rem)] font-bold tracking-[-0.04em] text-[var(--color-ink)]">
                  Afia AI fills the gap no competitor covers
                </h3>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-[640px] w-full">
                  <thead>
                    <tr className="border-b border-black/5">
                      <th className="pb-4 text-left text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-subtle)]">
                        Platform
                      </th>
                      {["AI Depth", "Interpretation", "Family Layer", "Marketplace"].map(
                        (heading) => (
                          <th
                            key={heading}
                            className="pb-4 px-2 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-subtle)]"
                          >
                            {heading}
                          </th>
                        ),
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {competitors.map((row) => {
                      const metrics = [
                        row.aiDepth,
                        row.interpretation,
                        row.familyLayer,
                        row.marketplace,
                      ];

                      return (
                        <tr
                          key={row.name}
                          className={`border-b border-black/5 last:border-none ${
                            row.isAfia ? "bg-[rgba(39,174,96,0.05)]" : ""
                          }`}
                        >
                          <td className="py-4 pr-4 text-sm font-semibold text-[var(--color-ink)]">
                            {row.name}
                          </td>
                          {metrics.map((metric, index) => (
                            <td key={`${row.name}-${index}`} className="px-2 py-4">
                              <div className="mx-auto max-w-28">
                                <div className="h-2 overflow-hidden rounded-full bg-black/5">
                                  <div
                                    className={`h-full rounded-full ${
                                      row.isAfia
                                        ? "bg-[linear-gradient(90deg,var(--color-green),var(--color-blue))]"
                                        : "bg-[var(--color-cloud)]"
                                    }`}
                                    style={{ width: `${metric}%` }}
                                  />
                                </div>
                                <div
                                  className={`mt-2 text-center text-[10px] font-bold ${
                                    row.isAfia
                                      ? "text-[var(--color-green)]"
                                      : "text-[var(--color-subtle)]"
                                  }`}
                                >
                                  {metric}%
                                </div>
                              </div>
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-[color:var(--color-green-soft-border)] bg-[var(--color-green-soft)] p-4">
                <p className="text-sm leading-7 text-[var(--color-muted)]">
                  <span className="font-semibold text-[var(--color-green)]">
                    The AI gap is clear:
                  </span>{" "}
                  existing platforms collect and display data, but none use AI
                  to interpret it, guide decisions, or serve families as a unit.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {unitEconomics.map((card) => {
                const styles = accentStyles[card.accent];

                return (
                  <SurfaceCard key={card.title} className="p-5">
                    <div
                      className={`mb-4 flex size-9 items-center justify-center rounded-2xl ${styles.soft} ${styles.text}`}
                    >
                      <LineIcon name={card.icon} className="size-5" />
                    </div>
                    <div className="text-[1.65rem] font-black tracking-[-0.05em] text-[var(--color-ink)]">
                      {card.value}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-[var(--color-ink)]">
                      {card.title}
                    </div>
                    <div className="mt-1 text-xs leading-6 text-[var(--color-subtle)]">
                      {card.description}
                    </div>
                  </SurfaceCard>
                );
              })}
            </div>
          </div>
        </section>

        <section id="revenue" className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHeading
              badge="Business Model"
              title="Multi-Layer AI Revenue Engine"
              description="Afia monetizes personal AI health intelligence through recurring subscriptions, ecosystem services, and data products."
            />

            <div className="mt-16 grid gap-8 lg:grid-cols-2">
              <SurfaceCard className="p-8">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-subtle)]">
                  Revenue Funnel
                </div>
                <div className="mt-8 space-y-4">
                  {revenueFunnel.map((stage) => {
                    const styles = accentStyles[stage.accent];

                    return (
                      <div key={stage.label} className="flex items-center gap-4">
                        <div className="w-28 text-right text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-subtle)]">
                          {stage.label}
                        </div>
                        <div className="h-10 flex-1 rounded-xl bg-black/[0.03] p-1">
                          <div
                            className={`flex h-full items-center justify-end rounded-lg pr-3 ${stage.width} ${styles.softSolid}`}
                          >
                            <LineIcon
                              name={stage.icon}
                              className={`size-4 ${styles.text}`}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 flex justify-center text-[var(--color-green)]">
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-8 w-px bg-current" />
                    <LineIcon name="dollar" className="size-5" />
                  </div>
                </div>
              </SurfaceCard>

              <div className="space-y-4">
                {revenueStreams.map((stream) => {
                  const styles = accentStyles[stream.accent];

                  return (
                    <div
                      key={stream.title}
                      className="rounded-[1.5rem] border border-black/5 bg-[var(--color-sand)] p-5"
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`mt-0.5 flex size-10 items-center justify-center rounded-2xl ${styles.soft} ${styles.text}`}
                        >
                          <LineIcon name={stream.icon} className="size-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-4">
                            <h3 className="text-sm font-semibold text-[var(--color-ink)]">
                              {stream.title}
                            </h3>
                            <span className={`text-sm font-bold ${styles.text}`}>
                              {stream.share}
                            </span>
                          </div>
                          <p className="mt-2 text-sm leading-7 text-[var(--color-subtle)]">
                            {stream.description}
                          </p>
                          <div className="mt-4 h-2 overflow-hidden rounded-full bg-black/5">
                            <div
                              className={`h-full rounded-full ${styles.solid}`}
                              style={{ width: `${stream.percent}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="moat" className="relative py-24 md:py-32">
          <div className="absolute left-[-4%] top-[28%] size-[20rem] rounded-full bg-[rgba(45,156,219,0.16)] blur-3xl" />
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHeading
              badge="Competitive Moat"
              title="An AI Moat Difficult to Replicate"
              description="Afia&apos;s differentiation compounds across architecture, data, governance, ecosystem depth, and monetization."
            />

            <div className="mt-16 grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="flex justify-center">
                <div className="relative size-80">
                  <div className="absolute inset-0 rounded-full border border-dashed border-black/10" />
                  <div className="absolute inset-8 rounded-full border border-dashed border-black/10" />
                  <div className="absolute inset-16 rounded-full border border-dashed border-black/10" />
                  <div className="absolute inset-[6.5rem] flex items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-green),var(--color-blue))] shadow-[0_18px_44px_rgba(39,174,96,0.2)]">
                    <LineIcon name="shield" className="size-10 text-white" />
                  </div>

                  {[
                    ["AI Architecture", "right-10 top-8", "green"],
                    ["Device Network", "right-0 top-1/2 -translate-y-1/2", "blue"],
                    ["Revenue Layers", "left-1/2 bottom-4 -translate-x-1/2", "purple"],
                    ["Data Intelligence", "left-0 top-1/2 -translate-y-1/2", "orange"],
                    ["Privacy Governance", "left-8 top-8", "pink"],
                  ].map(([label, position, accent]) => {
                    const styles = accentStyles[accent as Accent];

                    return (
                      <div
                        key={label}
                        className={`absolute ${position} rounded-full border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] ${styles.soft} ${styles.border} ${styles.text}`}
                      >
                        {label}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-5">
                {moatItems.map((item) => {
                  const styles = accentStyles[item.accent];

                  return (
                    <div key={item.title} className="flex gap-4">
                      <div
                        className={`flex size-10 shrink-0 items-center justify-center rounded-2xl ${styles.soft} ${styles.text}`}
                      >
                        <LineIcon name={item.icon} className="size-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-[var(--color-ink)]">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm leading-7 text-[var(--color-subtle)]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHeading
              badge="Why Now"
              title="The AI Convergence Moment"
              description="The wearable era, preventive wellness, and consumer AI expectations are finally arriving at the same time."
            />

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {convergenceItems.map((item) => {
                const styles = accentStyles[item.accent];

                return (
                  <div
                    key={item.label}
                    className={`rounded-[2rem] border p-7 text-center ${styles.soft} ${styles.border}`}
                  >
                    <div
                      className={`mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-white ${styles.text}`}
                    >
                      <LineIcon name={item.icon} className="size-7" />
                    </div>
                    <div className="text-[2rem] font-bold tracking-[-0.04em] text-[var(--color-ink)]">
                      {item.value}
                    </div>
                    <div className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-subtle)]">
                      {item.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="relative py-24 md:py-32">
          <div className="absolute left-1/2 top-[10%] size-[28rem] -translate-x-1/2 rounded-full bg-[rgba(39,174,96,0.18)] blur-3xl" />
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <div className="relative overflow-hidden rounded-[2.25rem] border border-[color:var(--color-green-soft-border)] bg-white p-12 text-center shadow-[0_24px_80px_rgba(39,174,96,0.12)] md:p-16">
              <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--color-green),var(--color-blue))]" />

              <div className="mb-6 flex justify-center">
                <div className="rounded-full bg-[linear-gradient(135deg,var(--color-green),var(--color-blue))] p-5 shadow-[0_18px_50px_rgba(39,174,96,0.22)]">
                  <AfiaLogo inverse compact className="gap-0" />
                </div>
              </div>

              <h2 className="font-[family:var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-[-0.05em] text-[var(--color-ink)]">
                Ready to Explore the AI Opportunity?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[var(--color-muted)]">
                Afia is exploring strategic conversations with investors and
                partners building the future of AI-driven preventive health.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <PillButton
                  href={`mailto:${contactEmail}`}
                  label="Contact Afia Team"
                  icon="mail"
                />
                <PillButton
                  href="#platform"
                  label="View Full Platform"
                  icon="externalLink"
                  secondary
                />
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-subtle)]">
                Strategic confidentiality maintained. Full AI investment deck
                available upon request.
              </p>
            </div>
          </div>
        </section>
        */}
      </main>

      <footer className="border-t border-black/5 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center lg:flex-row lg:px-10 lg:text-left">
          <div className="flex items-center gap-3">
            <AfiaLogo compact />
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-subtle)]">
              Investor Overview 2026
            </span>
          </div>
          <p className="text-xs leading-6 text-[var(--color-subtle)]">
            This document is confidential and for informational purposes only.
            Not an offer of securities.
          </p>
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-subtle)]">
            © 2026 Afia Health
          </div>
        </div>
      </footer>
    </div>
  );
}
