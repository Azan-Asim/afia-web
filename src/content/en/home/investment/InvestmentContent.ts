import type { InvestmentContentData } from "@/content/home/investment/InvestmentTypes";

export const investmentContent: InvestmentContentData = {
  badgeLabel: "Investment Opportunity",
  heading: "Why Invest in Afia AI",
  marketCardTitles: {
    TAM: "Total Addressable Market",
    SAM: "Serviceable Addressable Market",
    SOM: "Serviceable Obtainable Market",
  },
  marketLayers: [
    { id: "tam", label: "TAM", value: "$100B+", description: "Global digital health & AI market by 2030", accent: "green" },
    { id: "sam", label: "SAM", value: "$22B", description: "AI wearable interpretation platforms globally", accent: "blue" },
    { id: "som", label: "SOM", value: "$1.2B", description: "Afia's 5-year capture across MENA & emerging markets", accent: "purple" },
  ],
  projectionEyebrow: "5-Year Projection",
  projectionTitlePrefix: "Reaching",
  projectionHighlight: "$58M ARR",
  projectionTitleSuffix: "by Year 5",
  revenueLegendLabel: "Revenue ($M)",
  usersLegendLabel: "Users (K)",
  revenueProjection: [
    { id: "y1", year: "Y1", revenue: "$0.4M", users: "50K", revenueHeight: "1.10345px", userHeight: "2px", accent: "green" },
    { id: "y2", year: "Y2", revenue: "$2.1M", users: "200K", revenueHeight: "5.7931px", userHeight: "8px", accent: "green" },
    { id: "y3", year: "Y3", revenue: "$7.8M", users: "600K", revenueHeight: "21.5172px", userHeight: "24px", accent: "blue" },
    { id: "y4", year: "Y4", revenue: "$22M", users: "1400K", revenueHeight: "60.6897px", userHeight: "56px", accent: "blue" },
    { id: "y5", year: "Y5", revenue: "$58M", users: "3000K", revenueHeight: "160px", userHeight: "120px", accent: "purple" },
  ],
  projectionSummary: [
    { label: "Year 1", value: "50K users - $0.4M", accent: "green" },
    { label: "Break-even", value: "Year 3 - 600K users", accent: "blue" },
    { label: "Year 5", value: "$58M - 3M users", accent: "purple" },
  ],
  unitEconomics: [
    { id: "cac", value: "$3.20", title: "CAC", description: "vs. $18 industry avg", icon: "users", accent: "green" },
    { id: "ltvCac", value: "14x", title: "LTV / CAC", description: "Capital-efficient", icon: "trendingUp", accent: "blue" },
    { id: "arpu", value: "$8.99/mo", title: "ARPU", description: "Family $14.99/mo", icon: "dollar", accent: "purple" },
    { id: "grossMargin", value: "72%", title: "Gross Margin", description: "SaaS-grade", icon: "chartLine", accent: "orange" },
  ],
};
