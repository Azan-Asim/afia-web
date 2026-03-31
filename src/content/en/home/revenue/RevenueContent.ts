import type { RevenueContentData } from "@/content/home/revenue/RevenueTypes";

export const revenueContent: RevenueContentData = {
  badgeLabel: "Business Model",
  heading: "Multi-Layer AI Revenue Engine",
  funnelLabel: "Revenue Funnel",
  revenueFunnel: [
    { id: "engagement", label: "Engagement", icon: "users", width: "100%", accent: "green" },
    { id: "subscriptions", label: "Subscriptions", icon: "star", width: "78%", accent: "blue" },
    { id: "marketplace", label: "Marketplace", icon: "globe", width: "62%", accent: "purple" },
    { id: "platformApi", label: "Platform API", icon: "layers", width: "48%", accent: "orange" },
    { id: "dataIntel", label: "Data Intel", icon: "database", width: "34%", accent: "pink" },
  ],
  revenueStreams: [
    { id: "subscriptions", title: "Subscriptions", description: "Recurring revenue from Free to Pro to Family plans.", share: "45%", percent: 45, icon: "star", accent: "green" },
    { id: "aiMarketplace", title: "AI Marketplace", description: "Decision-driven commerce tied to personal AI health patterns.", share: "28%", percent: 28, icon: "globe", accent: "blue" },
    { id: "dataIntelligence", title: "Data Intelligence", description: "Anonymized AI wellness insights for research and institutions.", share: "15%", percent: 15, icon: "database", accent: "purple" },
    { id: "platformApi", title: "Platform API", description: "Insurance, corporate wellbeing and AI health SaaS.", share: "12%", percent: 12, icon: "layers", accent: "orange" },
  ],
};
