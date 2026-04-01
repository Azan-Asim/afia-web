// Hero copy, metrics, and floating signal content used at the top of the page.
import type { FloatingSignal, HeroMetric } from "@/types/home/Home";

export const heroMetrics: HeroMetric[] = [
  { value: "8-10M", label: "Wearable Users" },
  { value: "12%-15%", label: "Market CAGR" },
  { value: "0", label: "AI Gap" },
];

export const floatingSignals: FloatingSignal[] = [
  { label: "Heart Rate", value: "72 bpm", icon: "heart", accent: "pink" },
  { label: "Sleep", value: "7h 20m", icon: "moon", accent: "purple" },
  { label: "Activity", value: "8,240 steps", icon: "activity", accent: "green" },
  { label: "Decision", value: "Rest today", icon: "sparkles", accent: "orange" },
  { label: "HRV", value: "45ms", icon: "zap", accent: "blue" },
];
