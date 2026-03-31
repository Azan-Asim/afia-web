import type { MoatContentData } from "@/content/home/moat/MoatTypes";

export const moatContent: MoatContentData = {
  badgeLabel: "الميزة التنافسية",
  heading: "ميزة ذكاء اصطناعي يصعب تكرارها",
  items: [
    { id: "aiDecisionArchitecture", title: "هندسة قرارات الذكاء الاصطناعي", description: "إطار تفسير ذكاء اصطناعي مملوك، وليس مجرد لوحات بيانات.", icon: "chip", accent: "green" },
    { id: "multiDeviceEcosystem", title: "منظومة ذكاء اصطناعي متعددة الأجهزة", description: "بنية موصلات قابلة للتوسع عبر أهم الأجهزة القابلة للارتداء.", icon: "network", accent: "blue" },
    { id: "modularRevenueDesign", title: "تصميم إيرادات معياري", description: "مسارات B2C وB2B مدمجة في المنصة منذ اليوم الأول.", icon: "layers", accent: "purple" },
    { id: "behavioralIntelligence", title: "طبقة الذكاء السلوكي", description: "قاعدة بيانات مملوكة لخط الأساس الصحي تنمو مع كل مستخدم.", icon: "database", accent: "orange" },
    { id: "privacyGovernance", title: "حوكمة تراعي الخصوصية", description: "نموذج بيانات مجهول الهوية مع امتثال بمستوى مؤسسي.", icon: "shield", accent: "pink" },
  ],
  sectors: [
    { id: "aiArchitecture", label: ["هندسة", "الذكاء"] },
    { id: "deviceNetwork", label: ["شبكة", "الأجهزة"] },
    { id: "revenueLayers", label: ["طبقات", "الإيرادات"] },
    { id: "dataIntelligence", label: ["ذكاء", "البيانات"] },
    { id: "privacy", label: ["الخصوصية"] },
  ],
};
