import type { SupportedLocale } from "@/content/i18n/Config";
import type { NavItem } from "@/types/home/Home";

export type NavigationCopy = {
  brandLabel: string;
  homeLabel: string;
  investorBadgeLabel: string;
  requestDeckLabel: string;
  languageLabel: string;
  languageOptions: { value: SupportedLocale; label: string }[];
  mobileDialogLabel: string;
  primaryNavLabel: string;
  mobileNavLabel: string;
  skipToContentLabel: string;
  openNavigationLabel: string;
  closeNavigationLabel: string;
  items: NavItem[];
};
