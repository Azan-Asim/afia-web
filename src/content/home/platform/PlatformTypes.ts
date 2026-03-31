import type { Accent, IconName } from "@/types/home/Home";

export type PlatformStepId =
  | "wearables"
  | "healthSignals"
  | "afiaAi"
  | "insights"
  | "ecosystem";

export type PlatformCapabilityId =
  | "deviceAgnostic"
  | "aiInterpretation"
  | "familyIntelligence"
  | "privacyFirst";

export type PlatformStep = {
  id: PlatformStepId;
  title: string;
  subtitle: string;
  icon: IconName;
  accent: Accent;
  featured?: boolean;
};

export type PlatformCapability = {
  id: PlatformCapabilityId;
  title: string;
  description: string;
  icon: IconName;
  accent: Accent;
};

export type PlatformContentData = {
  badgeLabel: string;
  heading: string;
  featuredChipLabel: string;
  steps: PlatformStep[];
  capabilities: PlatformCapability[];
};
