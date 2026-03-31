import type { Accent, IconName } from "@/types/home/Home";

export type MarketLayerId = "tam" | "sam" | "som";
export type RevenueYearId = "y1" | "y2" | "y3" | "y4" | "y5";
export type UnitEconomicsCardId = "cac" | "ltvCac" | "arpu" | "grossMargin";

export type MarketLayer = {
  id: MarketLayerId;
  label: "TAM" | "SAM" | "SOM";
  value: string;
  description: string;
  accent: Accent;
};

export type RevenueYear = {
  id: RevenueYearId;
  year: string;
  revenue: string;
  users: string;
  revenueHeight: string;
  userHeight: string;
  accent: Accent;
};

export type UnitEconomicsCard = {
  id: UnitEconomicsCardId;
  value: string;
  title: string;
  description: string;
  icon: IconName;
  accent: Accent;
};

export type InvestmentSummaryItem = {
  label: string;
  value: string;
  accent: Accent;
};

export type InvestmentContentData = {
  badgeLabel: string;
  heading: string;
  marketCardTitles: Record<MarketLayer["label"], string>;
  marketLayers: MarketLayer[];
  projectionEyebrow: string;
  projectionTitlePrefix: string;
  projectionHighlight: string;
  projectionTitleSuffix: string;
  revenueLegendLabel: string;
  usersLegendLabel: string;
  revenueProjection: RevenueYear[];
  projectionSummary: InvestmentSummaryItem[];
  unitEconomics: UnitEconomicsCard[];
};
