import type { NavigationCopy } from "@/content/home/navigation/NavigationTypes";

export const navContent: NavigationCopy = {
  brandLabel: "Afia",
  homeLabel: "Afia home",
  investorBadgeLabel: "Investor",
  requestDeckLabel: "Request Deck",
  languageLabel: "Language",
  languageOptions: [
    { value: "en", label: "English" },
    { value: "ar", label: "Arabic" },
  ],
  mobileDialogLabel: "Mobile navigation",
  primaryNavLabel: "Primary",
  mobileNavLabel: "Mobile",
  skipToContentLabel: "Skip to content",
  openNavigationLabel: "Open navigation",
  closeNavigationLabel: "Close navigation",
  items: [
    { href: "#opportunity", label: "Opportunity" },
    { href: "#platform", label: "Platform" },
    { href: "#investment", label: "Investment" },
    { href: "#revenue", label: "Revenue" },
    { href: "#moat", label: "Moat" },
    { href: "#swot", label: "SWOT" },
    { href: "#contact", label: "Contact" },
  ],
};
