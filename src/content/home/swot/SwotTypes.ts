import type { Accent, IconName } from "@/types/home/Home";

export type ConvergenceItemId =
  | "marketCagr"
  | "wearableUsers"
  | "wantAiClarity"
  | "trueAiInterpreters";

export type SwotCardId = "strengths" | "weaknesses" | "opportunities" | "threats";

export type ConvergenceItem = {
  id: ConvergenceItemId;
  value: string;
  label: string;
  icon: IconName;
  accent: Accent;
};

export type SwotCard = {
  id: SwotCardId;
  letter: string;
  title: string;
  accent: string;
  softBackground: string;
  borderColor: string;
  topLineColor: string;
  bullets: string[];
  visual: "strength" | "weakness" | "opportunity" | "threat";
};

export type SwotContentData = {
  convergenceBadgeLabel: string;
  convergenceHeading: string;
  convergenceItems: ConvergenceItem[];
  swotBadgeLabel: string;
  swotHeading: string;
  swotCards: SwotCard[];
  summaryPrefix: string;
  summaryText: string;
};
