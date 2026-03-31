// Section-specific interfaces that describe the structured content for each landing block.
import type { Accent, IconName } from "./Common";

export interface OpportunityCard {
  id?: string;
  value: string;
  title: string;
  description: string;
  icon: IconName;
  accent: Accent;
}

export interface PlatformStep {
  id?: string;
  title: string;
  subtitle: string;
  icon: IconName;
  accent: Accent;
  featured?: boolean;
}

export interface PlatformCapability {
  id?: string;
  title: string;
  description: string;
  icon: IconName;
  accent: Accent;
}

export interface MarketLayer {
  label: "TAM" | "SAM" | "SOM";
  value: string;
  description: string;
  accent: Accent;
}

export interface RevenueYear {
  year: string;
  revenue: string;
  users: string;
  revenueHeight: string;
  userHeight: string;
  accent: Accent;
}

export interface CompetitorRow {
  name: string;
  aiDepth: number;
  interpretation: number;
  familyLayer: number;
  marketplace: number;
  isAfia?: boolean;
}

export interface UnitEconomicsCard {
  value: string;
  title: string;
  description: string;
  icon: IconName;
  accent: Accent;
}

export interface RevenueStream {
  title: string;
  description: string;
  share: string;
  percent: number;
  icon: IconName;
  accent: Accent;
}

export interface MoatItem {
  title: string;
  description: string;
  icon: IconName;
  accent: Accent;
}

export interface ConvergenceItem {
  value: string;
  label: string;
  icon: IconName;
  accent: Accent;
}
