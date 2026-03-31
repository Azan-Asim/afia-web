import type { InvestmentContentData } from "@/content/home/investment/InvestmentTypes";

export const investmentContent: InvestmentContentData = {
  badgeLabel: "فرصة الاستثمار",
  heading: "لماذا الاستثمار في أفيا AI",
  marketCardTitles: {
    TAM: "إجمالي السوق المستهدف",
    SAM: "السوق القابل للخدمة",
    SOM: "السوق الممكن الاستحواذ عليه",
  },
  marketLayers: [
    { id: "tam", label: "TAM", value: "$100B+", description: "سوق الصحة الرقمية والذكاء الاصطناعي عالمياً بحلول 2030", accent: "green" },
    { id: "sam", label: "SAM", value: "$22B", description: "منصات تفسير بيانات الأجهزة القابلة للارتداء عالمياً", accent: "blue" },
    { id: "som", label: "SOM", value: "$1.2B", description: "استحواذ أفيا خلال 5 سنوات في الشرق الأوسط والأسواق الناشئة", accent: "purple" },
  ],
  projectionEyebrow: "توقعات 5 سنوات",
  projectionTitlePrefix: "الوصول إلى",
  projectionHighlight: "$58M ARR",
  projectionTitleSuffix: "بحلول السنة الخامسة",
  revenueLegendLabel: "الإيرادات ($M)",
  usersLegendLabel: "المستخدمون (K)",
  revenueProjection: [
    { id: "y1", year: "Y1", revenue: "$0.4M", users: "50K", revenueHeight: "1.10345px", userHeight: "2px", accent: "green" },
    { id: "y2", year: "Y2", revenue: "$2.1M", users: "200K", revenueHeight: "5.7931px", userHeight: "8px", accent: "green" },
    { id: "y3", year: "Y3", revenue: "$7.8M", users: "600K", revenueHeight: "21.5172px", userHeight: "24px", accent: "blue" },
    { id: "y4", year: "Y4", revenue: "$22M", users: "1400K", revenueHeight: "60.6897px", userHeight: "56px", accent: "blue" },
    { id: "y5", year: "Y5", revenue: "$58M", users: "3000K", revenueHeight: "160px", userHeight: "120px", accent: "purple" },
  ],
  projectionSummary: [
    { label: "السنة 1", value: "50K مستخدم - $0.4M", accent: "green" },
    { label: "نقطة التعادل", value: "السنة 3 - 600K مستخدم", accent: "blue" },
    { label: "السنة 5", value: "$58M - 3M مستخدم", accent: "purple" },
  ],
  unitEconomics: [
    { id: "cac", value: "$3.20", title: "CAC", description: "مقابل متوسط الصناعة $18", icon: "users", accent: "green" },
    { id: "ltvCac", value: "14x", title: "LTV / CAC", description: "كفاءة عالية في رأس المال", icon: "trendingUp", accent: "blue" },
    { id: "arpu", value: "$8.99/mo", title: "ARPU", description: "العائلة $14.99/mo", icon: "dollar", accent: "purple" },
    { id: "grossMargin", value: "72%", title: "الهامش الإجمالي", description: "بمستوى SaaS", icon: "chartLine", accent: "orange" },
  ],
};
