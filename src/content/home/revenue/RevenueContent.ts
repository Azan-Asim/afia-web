// Revenue funnel and stream content used in the monetization section.
import type { RevenueFunnelStage, RevenueStream } from "@/types/home/Home";

export const revenueFunnel: RevenueFunnelStage[] = [
  { label: "Engagement", icon: "users", width: "100%", accent: "green" },
  { label: "Subscriptions", icon: "star", width: "78%", accent: "blue" },
  { label: "Marketplace", icon: "globe", width: "62%", accent: "purple" },
  { label: "Platform API", icon: "layers", width: "48%", accent: "orange" },
  { label: "Data Intel", icon: "database", width: "34%", accent: "pink" },
];

export const revenueStreams: RevenueStream[] = [
  {
    title: "Subscriptions",
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
    title: "Data Intelligence",
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
