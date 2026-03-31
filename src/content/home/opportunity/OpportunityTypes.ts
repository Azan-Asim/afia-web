import type { Accent, IconName } from "@/types/home/Home";

export type OpportunityCardId =
  | "wearablesBy2028"
  | "digitalHealthMarket"
  | "aiPlatformsThatInterpret";

export type OpportunitySignalId =
  | "hrv"
  | "spo2"
  | "steps"
  | "sleep"
  | "stress"
  | "calories";

export type OpportunityCard = {
  id: OpportunityCardId;
  value: string;
  title: string;
  description: string;
  icon: IconName;
  accent: Accent;
};

export type OpportunitySignal = {
  id: OpportunitySignalId;
  label: string;
  value: string;
  accent: Accent;
};

export type OpportunityContentData = {
  badgeLabel: string;
  heading: string;
  cards: OpportunityCard[];
  withoutAiLabel: string;
  withoutAiTitle: string;
  withoutAiFooter: string;
  withoutAiSignals: OpportunitySignal[];
  withAiLabel: string;
  withAiTitle: string;
  withAiSourceLabel: string;
  withAiInsight: string;
  withAiContext: string;
  withAiScoreLabel: string;
  withAiFooter: string;
};
