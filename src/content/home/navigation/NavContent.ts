// Locale-aware navigation resolver that preserves section-specific content files.
import { navContent as arNavContent } from "@/content/ar/home/navigation/NavContent";
import { navContent as enNavContent } from "@/content/en/home/navigation/NavContent";
import type { SupportedLocale } from "@/content/i18n/Config";

import type { NavigationCopy } from "./NavigationTypes";

const navigationContent: Record<SupportedLocale, NavigationCopy> = {
  en: enNavContent,
  ar: arNavContent,
};

export function getNavigationContent(locale: SupportedLocale): NavigationCopy {
  return navigationContent[locale];
}
