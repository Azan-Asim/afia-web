import type { Accent, IconName } from "@/types/home/Home";

export type HeroMetricId = "wearableUsers" | "marketCagr" | "aiGap";
export type HeroSignalId =
  | "heartRate"
  | "sleep"
  | "activity"
  | "decision"
  | "hrv";

export type HeroMetric = {
  id: HeroMetricId;
  value: string;
  label: string;
};

export type FloatingSignal = {
  id: HeroSignalId;
  label: string;
  value: string;
  icon: IconName;
  accent: Accent;
};

export type HeroContentData = {
  badgeLabel: string;
  orbitLabel: string;
  titleLines: [string, string, string];
  description: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  metrics: HeroMetric[];
  floatingSignals: FloatingSignal[];
};
