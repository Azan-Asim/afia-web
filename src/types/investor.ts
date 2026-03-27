export type IconName =
  | "activity"
  | "arrowRight"
  | "brain"
  | "chart"
  | "chevronRight"
  | "cpu"
  | "database"
  | "dollar"
  | "externalLink"
  | "globe"
  | "heart"
  | "layers"
  | "mail"
  | "menu"
  | "moon"
  | "network"
  | "shield"
  | "sparkles"
  | "star"
  | "trendingUp"
  | "users"
  | "watch"
  | "zap";

export type Accent =
  | "green"
  | "blue"
  | "purple"
  | "orange"
  | "pink"
  | "red";

export interface NavItem {
  href: string;
  label: string;
}

export interface HeroMetric {
  value: string;
  label: string;
}

export interface FloatingSignal {
  label: string;
  value: string;
  icon: IconName;
  accent: Accent;
  position: string;
}

export interface OpportunityCard {
  value: string;
  title: string;
  description: string;
  icon: IconName;
  accent: Accent;
}

export interface PlatformStep {
  title: string;
  subtitle: string;
  icon: IconName;
  accent: Accent;
  featured?: boolean;
}

export interface PlatformCapability {
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
  heightClassName: string;
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
