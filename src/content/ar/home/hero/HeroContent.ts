import type { HeroContentData } from "@/content/home/hero/HeroTypes";

export const heroContent: HeroContentData = {
  badgeLabel: "نظرة عامة للمستثمر",
  orbitLabel: "أفيا AI",
  titleLines: ["طبقة", "قرارات الصحة بالذكاء الاصطناعي", "الشخصية"],
  description:
    "ذكاء اصطناعي يحول إشارات الأجهزة القابلة للارتداء إلى قرارات صحية شخصية.",
  primaryCtaLabel: "اطلب العرض",
  secondaryCtaLabel: "استكشف",
  metrics: [
    { id: "wearableUsers", value: "+1.1B", label: "مستخدمو الأجهزة القابلة للارتداء" },
    { id: "marketCagr", value: "14.9%", label: "معدل نمو السوق" },
    { id: "aiGap", value: "غير محلول", label: "فجوة الذكاء الاصطناعي" },
  ],
  floatingSignals: [
    { id: "heartRate", label: "معدل النبض", value: "72 نبضة/د", icon: "heart", accent: "pink" },
    { id: "sleep", label: "النوم", value: "7س 20د", icon: "moon", accent: "purple" },
    { id: "activity", label: "النشاط", value: "8,240 خطوة", icon: "activity", accent: "green" },
    { id: "decision", label: "القرار", value: "راحة اليوم", icon: "sparkles", accent: "orange" },
    { id: "hrv", label: "تذبذب نبض القلب", value: "45 مللي ثانية", icon: "zap", accent: "blue" },
  ],
};
