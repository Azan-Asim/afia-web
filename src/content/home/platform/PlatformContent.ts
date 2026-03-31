import { platformContent as arPlatformContent } from "@/content/ar/home/platform/PlatformContent";
import { platformContent as enPlatformContent } from "@/content/en/home/platform/PlatformContent";
import type { SupportedLocale } from "@/content/i18n/Config";

import type { PlatformContentData } from "./PlatformTypes";

const platformContentByLocale: Record<SupportedLocale, PlatformContentData> = {
  en: enPlatformContent,
  ar: arPlatformContent,
};

export function getPlatformContent(locale: SupportedLocale): PlatformContentData {
  return platformContentByLocale[locale];
}
