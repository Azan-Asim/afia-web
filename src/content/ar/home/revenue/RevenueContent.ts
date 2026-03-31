import type { RevenueContentData } from "@/content/home/revenue/RevenueTypes";

export const revenueContent: RevenueContentData = {
  badgeLabel: "نموذج العمل",
  heading: "محرك إيرادات ذكاء اصطناعي متعدد الطبقات",
  funnelLabel: "قمع الإيرادات",
  revenueFunnel: [
    { id: "engagement", label: "التفاعل", icon: "users", width: "100%", accent: "green" },
    { id: "subscriptions", label: "الاشتراكات", icon: "star", width: "78%", accent: "blue" },
    { id: "marketplace", label: "السوق", icon: "globe", width: "62%", accent: "purple" },
    { id: "platformApi", label: "منصة API", icon: "layers", width: "48%", accent: "orange" },
    { id: "dataIntel", label: "ذكاء البيانات", icon: "database", width: "34%", accent: "pink" },
  ],
  revenueStreams: [
    { id: "subscriptions", title: "الاشتراكات", description: "إيرادات متكررة من خطط مجانية واحترافية وعائلية.", share: "45%", percent: 45, icon: "star", accent: "green" },
    { id: "aiMarketplace", title: "سوق الذكاء الاصطناعي", description: "تجارة مدفوعة بالقرارات ومرتبطة بأنماط الصحة الشخصية.", share: "28%", percent: 28, icon: "globe", accent: "blue" },
    { id: "dataIntelligence", title: "ذكاء البيانات", description: "رؤى صحة وعافية مجهولة الهوية للأبحاث والمؤسسات.", share: "15%", percent: 15, icon: "database", accent: "purple" },
    { id: "platformApi", title: "منصة API", description: "التأمين والرفاهية المؤسسية وبرمجيات الصحة بالذكاء الاصطناعي.", share: "12%", percent: 12, icon: "layers", accent: "orange" },
  ],
};
