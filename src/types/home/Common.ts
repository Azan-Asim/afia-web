// Shared primitive types used across navigation, icons, hero data, and common UI pieces.
export type IconName =
  | "activity"
  | "arrowRight"
  | "brain"
  | "chart"
  | "chartLine"
  | "chevronRight"
  | "chip"
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
  | "x"
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

export interface RevenueFunnelStage {
  label: string;
  icon: IconName;
  width: string;
  accent: Accent;
}
