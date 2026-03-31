// Platform steps and capabilities content used to explain the product stack.
import type { PlatformCapability, PlatformStep } from "@/types/home/Home";

export const platformSteps: PlatformStep[] = [
  {
    title: "Wearables",
    subtitle: "20+ platforms",
    icon: "watch",
    accent: "green",
  },
  {
    title: "Health Signals",
    subtitle: "Heart · Sleep · HRV",
    icon: "activity",
    accent: "blue",
  },
  {
    title: "Afia AI",
    subtitle: "Interpretation Layer",
    icon: "brain",
    accent: "purple",
    featured: true,
  },
  {
    title: "Insights",
    subtitle: "Decisions & Guidance",
    icon: "sparkles",
    accent: "orange",
  },
  {
    title: "Ecosystem",
    subtitle: "Services · API",
    icon: "globe",
    accent: "pink",
  },
];

export const platformCapabilities: PlatformCapability[] = [
  {
    title: "Device Agnostic",
    description: "Connectors across wearables and health data systems.",
    icon: "watch",
    accent: "green",
  },
  {
    title: "AI Interpretation",
    description: "Signals become structured, explainable AI decisions.",
    icon: "brain",
    accent: "blue",
  },
  {
    title: "Family Intelligence",
    description: "Shared family visibility with privacy-aware context.",
    icon: "users",
    accent: "purple",
  },
  {
    title: "Privacy First",
    description: "Governance, consent, and anonymized data handling.",
    icon: "shield",
    accent: "orange",
  },
];
