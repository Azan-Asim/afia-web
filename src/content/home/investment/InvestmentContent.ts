// Static investment data that powers market layers, projections, and unit economics.
import type {
  CompetitorRow,
  MarketLayer,
  RevenueYear,
  UnitEconomicsCard,
} from "@/types/home/Home";

export const marketLayers: MarketLayer[] = [
  {
    label: "TAM",
    value: "$100B+",
    description: "Global digital health & AI market by 2030",
    accent: "green",
  },
  {
    label: "SAM",
    value: "$22B",
    description: "AI wearable interpretation platforms globally",
    accent: "blue",
  },
  {
    label: "SOM",
    value: "$1.2B",
    description: "Afia's 5-year capture across MENA & emerging markets",
    accent: "purple",
  },
];

export const revenueProjection: RevenueYear[] = [
  {
    year: "Y1",
    revenue: "$0.4M",
    users: "50K",
    revenueHeight: "1.10345px",
    userHeight: "2px",
    accent: "green",
  },
  {
    year: "Y2",
    revenue: "$2.1M",
    users: "200K",
    revenueHeight: "5.7931px",
    userHeight: "8px",
    accent: "green",
  },
  {
    year: "Y3",
    revenue: "$7.8M",
    users: "600K",
    revenueHeight: "21.5172px",
    userHeight: "24px",
    accent: "blue",
  },
  {
    year: "Y4",
    revenue: "$22M",
    users: "1400K",
    revenueHeight: "60.6897px",
    userHeight: "56px",
    accent: "blue",
  },
  {
    year: "Y5",
    revenue: "$58M",
    users: "3000K",
    revenueHeight: "160px",
    userHeight: "120px",
    accent: "purple",
  },
];

export const competitors: CompetitorRow[] = [
  {
    name: "Fitbit / Google",
    aiDepth: 20,
    interpretation: 10,
    familyLayer: 15,
    marketplace: 5,
  },
  {
    name: "Apple Health",
    aiDepth: 35,
    interpretation: 20,
    familyLayer: 25,
    marketplace: 10,
  },
  {
    name: "Whoop",
    aiDepth: 40,
    interpretation: 30,
    familyLayer: 5,
    marketplace: 0,
  },
  {
    name: "Samsung Health",
    aiDepth: 30,
    interpretation: 15,
    familyLayer: 20,
    marketplace: 10,
  },
  {
    name: "Afia",
    aiDepth: 95,
    interpretation: 95,
    familyLayer: 90,
    marketplace: 85,
    isAfia: true,
  },
];

export const unitEconomics: UnitEconomicsCard[] = [
  {
    value: "$3.20",
    title: "CAC",
    description: "vs. $18 industry avg",
    icon: "users",
    accent: "green",
  },
  {
    value: "14x",
    title: "LTV / CAC",
    description: "Capital-efficient",
    icon: "trendingUp",
    accent: "blue",
  },
  {
    value: "$8.99/mo",
    title: "ARPU",
    description: "Family $14.99/mo",
    icon: "dollar",
    accent: "purple",
  },
  {
    value: "72%",
    title: "Gross Margin",
    description: "SaaS-grade",
    icon: "chartLine",
    accent: "orange",
  },
];
