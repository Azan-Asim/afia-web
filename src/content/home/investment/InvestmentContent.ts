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
    value: "$6-8B",
    description: "Serviceable wearable AI opportunity by 2030",
    accent: "green",
  },
  {
    label: "SAM",
    value: "$1.5-2.5B",
    description: "Serviceable addressable market for wearable AI by 2030",
    accent: "blue",
  },
  {
    label: "SOM",
    value: "$150-300M",
    description: "Afia's obtainable share of the market by 2030",
    accent: "purple",
  },
];

export const revenueProjection: RevenueYear[] = [
  {
    year: "Y1",
    revenue: "$0.5M",
    users: "50K",
    revenueHeight: "2.67px",
    userHeight: "2px",
    accent: "green",
  },
  {
    year: "Y2",
    revenue: "$2M",
    users: "200K",
    revenueHeight: "10.67px",
    userHeight: "8px",
    accent: "green",
  },
  {
    year: "Y3",
    revenue: "$6M",
    users: "600K",
    revenueHeight: "32px",
    userHeight: "24px",
    accent: "blue",
  },
  {
    year: "Y4",
    revenue: "$15M",
    users: "1400K",
    revenueHeight: "80px",
    userHeight: "56px",
    accent: "blue",
  },
  {
    year: "Y5",
    revenue: "$30M",
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
    value: "$25-$40",
    title: "CAC",
    description: "Digital health and AI interpretation market by 2030",
    icon: "users",
    accent: "green",
  },
  {
    value: "4x-6x",
    title: "LTV/CAC",
    description: "Healthy payback profile",
    icon: "trendingUp",
    accent: "blue",
  },
  {
    value: "$5-$8/mo",
    title: "ARPU (Monthly)",
    description: "Average monthly revenue per user",
    icon: "dollar",
    accent: "purple",
  },
  {
    value: "70%-80%",
    title: "Gross Margin",
    description: "Target blended margin",
    icon: "chartLine",
    accent: "orange",
  },
];
