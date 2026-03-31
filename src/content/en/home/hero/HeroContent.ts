import type { HeroContentData } from "@/content/home/hero/HeroTypes";

export const heroContent: HeroContentData = {
  badgeLabel: "Investor Overview",
  orbitLabel: "Afia AI",
  titleLines: ["The Personal", "AI Health Decision", "Layer"],
  description:
    "AI that transforms wearable signals into personal health decisions.",
  primaryCtaLabel: "Request Deck",
  secondaryCtaLabel: "Explore",
  metrics: [
    { id: "wearableUsers", value: "1.1B+", label: "Wearable Users" },
    { id: "marketCagr", value: "14.9%", label: "Market CAGR" },
    { id: "aiGap", value: "Unsolved", label: "AI Gap" },
  ],
  floatingSignals: [
    { id: "heartRate", label: "Heart Rate", value: "72 bpm", icon: "heart", accent: "pink" },
    { id: "sleep", label: "Sleep", value: "7h 20m", icon: "moon", accent: "purple" },
    { id: "activity", label: "Activity", value: "8,240 steps", icon: "activity", accent: "green" },
    { id: "decision", label: "Decision", value: "Rest today", icon: "sparkles", accent: "orange" },
    { id: "hrv", label: "HRV", value: "45ms", icon: "zap", accent: "blue" },
  ],
};
