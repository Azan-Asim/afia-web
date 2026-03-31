import type { PlatformContentData } from "@/content/home/platform/PlatformTypes";

export const platformContent: PlatformContentData = {
  badgeLabel: "AI Platform",
  heading: "AI Intelligence at Every Layer",
  featuredChipLabel: "Afia Layer",
  steps: [
    { id: "wearables", title: "Wearables", subtitle: "20+ platforms", icon: "watch", accent: "green" },
    { id: "healthSignals", title: "Health Signals", subtitle: "Heart · Sleep · HRV", icon: "activity", accent: "blue" },
    { id: "afiaAi", title: "Afia AI", subtitle: "Interpretation Layer", icon: "brain", accent: "purple", featured: true },
    { id: "insights", title: "Insights", subtitle: "Decisions & Guidance", icon: "sparkles", accent: "orange" },
    { id: "ecosystem", title: "Ecosystem", subtitle: "Services · API", icon: "globe", accent: "pink" },
  ],
  capabilities: [
    { id: "deviceAgnostic", title: "Device Agnostic", description: "Connectors across wearables and health data systems.", icon: "watch", accent: "green" },
    { id: "aiInterpretation", title: "AI Interpretation", description: "Signals become structured, explainable AI decisions.", icon: "brain", accent: "blue" },
    { id: "familyIntelligence", title: "Family Intelligence", description: "Shared family visibility with privacy-aware context.", icon: "users", accent: "purple" },
    { id: "privacyFirst", title: "Privacy First", description: "Governance, consent, and anonymized data handling.", icon: "shield", accent: "orange" },
  ],
};
