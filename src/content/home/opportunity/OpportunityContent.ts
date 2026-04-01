// Content definitions for opportunity highlight cards and supporting comparisons.
import type { OpportunityCard } from "@/types/home/Home";

export const opportunityCards: OpportunityCard[] = [
  {
    value: "12-15M",
    title: "Wearables by 2028",
    description:
      "Devices generating health data daily, with no AI to interpret it.",
    icon: "watch",
    accent: "green",
  },
  {
    value: "$3.5-4.5B",
    title: "Digital Health Market",
    description: "AI-driven health intelligence growing at 12%-15% CAGR.",
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
