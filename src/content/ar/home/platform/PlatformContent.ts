import type { PlatformContentData } from "@/content/home/platform/PlatformTypes";

export const platformContent: PlatformContentData = {
  badgeLabel: "منصة الذكاء الاصطناعي",
  heading: "ذكاء اصطناعي في كل طبقة",
  featuredChipLabel: "طبقة أفيا",
  steps: [
    { id: "wearables", title: "الأجهزة القابلة للارتداء", subtitle: "20+ منصة", icon: "watch", accent: "green" },
    { id: "healthSignals", title: "الإشارات الصحية", subtitle: "نبض · نوم · HRV", icon: "activity", accent: "blue" },
    { id: "afiaAi", title: "أفيا AI", subtitle: "طبقة التفسير", icon: "brain", accent: "purple", featured: true },
    { id: "insights", title: "الرؤى", subtitle: "قرارات وإرشاد", icon: "sparkles", accent: "orange" },
    { id: "ecosystem", title: "المنظومة", subtitle: "خدمات · API", icon: "globe", accent: "pink" },
  ],
  capabilities: [
    { id: "deviceAgnostic", title: "دون ارتباط بجهاز", description: "موصلات عبر الأجهزة القابلة للارتداء وأنظمة البيانات الصحية.", icon: "watch", accent: "green" },
    { id: "aiInterpretation", title: "تفسير الذكاء الاصطناعي", description: "تتحول الإشارات إلى قرارات ذكاء اصطناعي منظمة وقابلة للتفسير.", icon: "brain", accent: "blue" },
    { id: "familyIntelligence", title: "ذكاء العائلة", description: "رؤية مشتركة للعائلة مع سياق يراعي الخصوصية.", icon: "users", accent: "purple" },
    { id: "privacyFirst", title: "الخصوصية أولاً", description: "الحوكمة والموافقة والتعامل المجهول مع البيانات.", icon: "shield", accent: "orange" },
  ],
};
