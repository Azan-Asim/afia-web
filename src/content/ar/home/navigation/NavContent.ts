import type { NavigationCopy } from "@/content/home/navigation/NavigationTypes";

export const navContent: NavigationCopy = {
  brandLabel: "أفيا",
  homeLabel: "الصفحة الرئيسية لأفيا",
  investorBadgeLabel: "المستثمرين",
  requestDeckLabel: "اطلب العرض",
  languageLabel: "اللغة",
  languageOptions: [
    { value: "en", label: "English" },
    { value: "ar", label: "العربية" },
  ],
  mobileDialogLabel: "التنقل على الجوال",
  primaryNavLabel: "التنقل الرئيسي",
  mobileNavLabel: "تنقل الجوال",
  skipToContentLabel: "انتقل إلى المحتوى",
  openNavigationLabel: "افتح التنقل",
  closeNavigationLabel: "أغلق التنقل",
  items: [
    { href: "#opportunity", label: "الفرصة" },
    { href: "#platform", label: "المنصة" },
    { href: "#investment", label: "الاستثمار" },
    { href: "#revenue", label: "الإيرادات" },
    { href: "#moat", label: "الميزة التنافسية" },
    { href: "#swot", label: "تحليل SWOT" },
    { href: "#contact", label: "التواصل" },
  ],
};
