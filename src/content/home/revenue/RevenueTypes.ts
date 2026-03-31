import type { Accent, IconName } from "@/types/home/Home";

export type RevenueFunnelStageId =
  | "engagement"
  | "subscriptions"
  | "marketplace"
  | "platformApi"
  | "dataIntel";

export type RevenueStreamId =
  | "subscriptions"
  | "aiMarketplace"
  | "dataIntelligence"
  | "platformApi";

export type RevenueFunnelStage = {
  id: RevenueFunnelStageId;
  label: string;
  icon: IconName;
  width: string;
  accent: Accent;
};

export type RevenueStream = {
  id: RevenueStreamId;
  title: string;
  description: string;
  share: string;
  percent: number;
  icon: IconName;
  accent: Accent;
};

export type RevenueContentData = {
  badgeLabel: string;
  heading: string;
  funnelLabel: string;
  revenueFunnel: RevenueFunnelStage[];
  revenueStreams: RevenueStream[];
};
