import type { MoatContentData } from "@/content/home/moat/MoatTypes";

export const moatContent: MoatContentData = {
  badgeLabel: "Competitive Moat",
  heading: "An AI Moat Difficult to Replicate",
  items: [
    { id: "aiDecisionArchitecture", title: "AI Decision Architecture", description: "Proprietary AI interpretation framework, not just dashboards.", icon: "chip", accent: "green" },
    { id: "multiDeviceEcosystem", title: "Multi-Device AI Ecosystem", description: "Scalable AI connector architecture across all major wearables.", icon: "network", accent: "blue" },
    { id: "modularRevenueDesign", title: "Modular Revenue Design", description: "B2C and B2B streams built into the AI platform from day one.", icon: "layers", accent: "purple" },
    { id: "behavioralIntelligence", title: "AI Behavioral Intelligence Layer", description: "Proprietary AI wellness baseline dataset grows with every user.", icon: "database", accent: "orange" },
    { id: "privacyGovernance", title: "Privacy-Aware AI Governance", description: "Anonymized AI data model with institutional-grade compliance.", icon: "shield", accent: "pink" },
  ],
  sectors: [
    { id: "aiArchitecture", label: ["AI", "Architecture"] },
    { id: "deviceNetwork", label: ["Device", "Network"] },
    { id: "revenueLayers", label: ["Revenue", "Layers"] },
    { id: "dataIntelligence", label: ["Data", "Intelligence"] },
    { id: "privacy", label: ["Privacy"] },
  ],
};
