import type {
  CompetitorRow,
  ConvergenceItem,
  FloatingSignal,
  HeroMetric,
  MarketLayer,
  MoatItem,
  NavItem,
  OpportunityCard,
  PlatformCapability,
  PlatformStep,
  RevenueStream,
  RevenueYear,
  UnitEconomicsCard,
} from "@/types/investor";

export const navItems: NavItem[] = [
  { href: "#opportunity", label: "Opportunity" },
  { href: "#platform", label: "Platform" },
  { href: "#investment", label: "Investment" },
  { href: "#revenue", label: "Revenue" },
  { href: "#moat", label: "Moat" },
  { href: "#contact", label: "Contact" },
];

export const heroMetrics: HeroMetric[] = [
  { value: "1.1B+", label: "Global Wearable Users" },
  { value: "14.9%", label: "Market CAGR" },
  { value: "Unsolved", label: "AI Interpretation Gap" },
];

export const floatingSignals: FloatingSignal[] = [
  {
    label: "Heart Rate",
    value: "72 bpm",
    icon: "heart",
    accent: "pink",
    position:
      "left-1/2 top-1/2 -translate-x-12 -translate-y-[13rem] md:-translate-x-14 md:-translate-y-[12rem]",
  },
  {
    label: "Sleep",
    value: "7h 20m",
    icon: "moon",
    accent: "purple",
    position:
      "left-1/2 top-1/2 translate-x-[6.75rem] -translate-y-[3.5rem] md:translate-x-[7.5rem] md:-translate-y-[4rem]",
  },
  {
    label: "Activity",
    value: "8,240 steps",
    icon: "activity",
    accent: "green",
    position:
      "left-1/2 top-1/2 -translate-x-12 translate-y-[8.5rem] md:-translate-x-14 md:translate-y-[8.25rem]",
  },
  {
    label: "Decision",
    value: "Rest today",
    icon: "sparkles",
    accent: "orange",
    position:
      "left-1/2 top-1/2 -translate-x-[12.5rem] -translate-y-0 md:-translate-x-[13.5rem] md:translate-y-0",
  },
  {
    label: "HRV",
    value: "45ms",
    icon: "zap",
    accent: "blue",
    position:
      "left-1/2 top-1/2 -translate-x-[9.25rem] -translate-y-[8.25rem] md:-translate-x-[10.5rem] md:-translate-y-[8rem]",
  },
];

export const opportunityCards: OpportunityCard[] = [
  {
    value: "5.8B",
    title: "Wearables by 2028",
    description:
      "Devices generating health data daily, with no AI to interpret it.",
    icon: "watch",
    accent: "green",
  },
  {
    value: "$100B+",
    title: "Digital Health Market",
    description: "AI-driven health intelligence growing at 14.9% CAGR.",
    icon: "chart",
    accent: "blue",
  },
  {
    value: "0",
    title: "AI Platforms That Interpret",
    description:
      "Everyone collects health data. No AI explains what it means.",
    icon: "brain",
    accent: "purple",
  },
];

export const platformSteps: PlatformStep[] = [
  {
    title: "Wearable Devices",
    subtitle: "20+ platforms",
    icon: "watch",
    accent: "green",
  },
  {
    title: "Health Signals",
    subtitle: "Heart, Sleep, Stress, HRV",
    icon: "activity",
    accent: "blue",
  },
  {
    title: "Afia Intelligence",
    subtitle: "AI Interpretation Layer",
    icon: "brain",
    accent: "purple",
    featured: true,
  },
  {
    title: "Personal Insights",
    subtitle: "Decisions and Guidance",
    icon: "sparkles",
    accent: "orange",
  },
  {
    title: "Ecosystem",
    subtitle: "Services, Partners, API",
    icon: "globe",
    accent: "pink",
  },
];

export const platformCapabilities: PlatformCapability[] = [
  {
    title: "Device Agnostic",
    description: "Apple Health, Fitbit, Garmin, Whoop and 20+ more.",
    icon: "watch",
    accent: "green",
  },
  {
    title: "AI Interpretation Engine",
    description: "Biometric signals to personal AI health decisions.",
    icon: "brain",
    accent: "blue",
  },
  {
    title: "Family AI Intelligence",
    description: "Monitor and understand your family's health together.",
    icon: "users",
    accent: "purple",
  },
  {
    title: "Privacy First",
    description: "Anonymized, governance-compliant data handling.",
    icon: "shield",
    accent: "orange",
  },
];

export const marketLayers: MarketLayer[] = [
  {
    label: "TAM",
    value: "$100B+",
    description: "Global digital health and wearable AI market by 2030",
    accent: "green",
  },
  {
    label: "SAM",
    value: "$22B",
    description: "AI-powered wearable interpretation platforms globally",
    accent: "blue",
  },
  {
    label: "SOM",
    value: "$1.2B",
    description:
      "Afia's realistic 5-year capture across MENA and emerging markets",
    accent: "purple",
  },
];

export const revenueProjection: RevenueYear[] = [
  {
    year: "Y1",
    revenue: "$0.4M",
    users: "50K users",
    heightClassName: "h-[16%]",
    accent: "green",
  },
  {
    year: "Y2",
    revenue: "$2.1M",
    users: "200K users",
    heightClassName: "h-[28%]",
    accent: "green",
  },
  {
    year: "Y3",
    revenue: "$7.8M",
    users: "600K users",
    heightClassName: "h-[46%]",
    accent: "blue",
  },
  {
    year: "Y4",
    revenue: "$22M",
    users: "1400K users",
    heightClassName: "h-[68%]",
    accent: "blue",
  },
  {
    year: "Y5",
    revenue: "$58M",
    users: "3000K users",
    heightClassName: "h-[88%]",
    accent: "purple",
  },
];

export const competitors: CompetitorRow[] = [
  {
    name: "Fitbit / Google",
    aiDepth: 20,
    interpretation: 10,
    familyLayer: 15,
    marketplace: 5,
  },
  {
    name: "Apple Health",
    aiDepth: 35,
    interpretation: 20,
    familyLayer: 25,
    marketplace: 10,
  },
  {
    name: "Whoop",
    aiDepth: 40,
    interpretation: 30,
    familyLayer: 5,
    marketplace: 0,
  },
  {
    name: "Samsung Health",
    aiDepth: 30,
    interpretation: 15,
    familyLayer: 20,
    marketplace: 10,
  },
  {
    name: "Afia",
    aiDepth: 95,
    interpretation: 95,
    familyLayer: 90,
    marketplace: 85,
    isAfia: true,
  },
];

export const unitEconomics: UnitEconomicsCard[] = [
  {
    value: "$3.20",
    title: "CAC (AI-driven)",
    description: "vs. industry average $18",
    icon: "users",
    accent: "green",
  },
  {
    value: "14x",
    title: "LTV / CAC Ratio",
    description: "Highly capital-efficient",
    icon: "trendingUp",
    accent: "blue",
  },
  {
    value: "$8.99/mo",
    title: "ARPU (Pro Plan)",
    description: "Family plan $14.99/mo",
    icon: "dollar",
    accent: "purple",
  },
  {
    value: "72%",
    title: "Gross Margin",
    description: "SaaS-grade AI margins",
    icon: "chart",
    accent: "orange",
  },
];

export const revenueStreams: RevenueStream[] = [
  {
    title: "Subscription Tiers",
    description: "Recurring revenue from Free to Pro to Family plans.",
    share: "45%",
    percent: 45,
    icon: "star",
    accent: "green",
  },
  {
    title: "AI Health Marketplace",
    description:
      "Decision-driven commerce tied to personal AI health patterns.",
    share: "28%",
    percent: 28,
    icon: "globe",
    accent: "blue",
  },
  {
    title: "AI Data Intelligence",
    description: "Anonymized AI wellness insights for research and institutions.",
    share: "15%",
    percent: 15,
    icon: "database",
    accent: "purple",
  },
  {
    title: "Platform API",
    description: "Insurance, corporate wellbeing and AI health SaaS.",
    share: "12%",
    percent: 12,
    icon: "layers",
    accent: "orange",
  },
];

export const moatItems: MoatItem[] = [
  {
    title: "AI Decision Architecture",
    description:
      "Proprietary AI interpretation framework, not just dashboards.",
    icon: "cpu",
    accent: "green",
  },
  {
    title: "Multi-Device AI Ecosystem",
    description:
      "Scalable AI connector architecture across all major wearables.",
    icon: "network",
    accent: "blue",
  },
  {
    title: "Modular Revenue Design",
    description: "B2C and B2B streams built into the AI platform from day one.",
    icon: "layers",
    accent: "purple",
  },
  {
    title: "AI Behavioral Intelligence Layer",
    description:
      "Proprietary AI wellness baseline dataset grows with every user.",
    icon: "database",
    accent: "orange",
  },
  {
    title: "Privacy-Aware AI Governance",
    description: "Anonymized AI data model with institutional-grade compliance.",
    icon: "shield",
    accent: "pink",
  },
];

export const convergenceItems: ConvergenceItem[] = [
  {
    value: "14.9%",
    label: "AI Health Market CAGR",
    icon: "trendingUp",
    accent: "green",
  },
  {
    value: "1.1B+",
    label: "Wearable Users",
    icon: "watch",
    accent: "blue",
  },
  {
    value: "Unmet",
    label: "Demand for AI Health Clarity",
    icon: "heart",
    accent: "pink",
  },
  {
    value: "None",
    label: "True AI Interpreters Exist",
    icon: "zap",
    accent: "orange",
  },
];

export const contactEmail = "invest@afia.health";
