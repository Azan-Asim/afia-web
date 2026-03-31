import type { Accent, IconName } from "@/types/home/Home";

export type MoatItemId =
  | "aiDecisionArchitecture"
  | "multiDeviceEcosystem"
  | "modularRevenueDesign"
  | "behavioralIntelligence"
  | "privacyGovernance";

export type MoatSectorId =
  | "aiArchitecture"
  | "deviceNetwork"
  | "revenueLayers"
  | "dataIntelligence"
  | "privacy";

export type MoatItem = {
  id: MoatItemId;
  title: string;
  description: string;
  icon: IconName;
  accent: Accent;
};

export type MoatSector = {
  id: MoatSectorId;
  label: string[];
};

export type MoatContentData = {
  badgeLabel: string;
  heading: string;
  items: MoatItem[];
  sectors: MoatSector[];
};
