import { footerContent as arFooterContent } from "@/content/ar/home/footer/FooterContent";
import { footerContent as enFooterContent } from "@/content/en/home/footer/FooterContent";
import type { SupportedLocale } from "@/content/i18n/Config";

import type { FooterContentData } from "./FooterTypes";

const footerContentByLocale: Record<SupportedLocale, FooterContentData> = {
  en: enFooterContent,
  ar: arFooterContent,
};

export function getFooterContent(locale: SupportedLocale): FooterContentData {
  return footerContentByLocale[locale];
}
