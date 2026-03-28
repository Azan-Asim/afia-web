import type { FloatingSignal, HeroMetric } from "@/types/home/Home";

export const heroMetrics: HeroMetric[] = [
  { value: "1.1B+", label: "Wearable Users" },
  { value: "14.9%", label: "Market CAGR" },
  { value: "Unsolved", label: "AI Gap" },
];

export const floatingSignals: FloatingSignal[] = [
  { label: "Heart Rate", value: "72 bpm", icon: "heart", accent: "pink" },
  { label: "Sleep", value: "7h 20m", icon: "moon", accent: "purple" },
  { label: "Activity", value: "8,240 steps", icon: "activity", accent: "green" },
  { label: "Decision", value: "Rest today", icon: "sparkles", accent: "orange" },
  { label: "HRV", value: "45ms", icon: "zap", accent: "blue" },
];
