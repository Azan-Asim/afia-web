import { swotContent as arSwotContent } from "@/content/ar/home/swot/SwotContent";
import { swotContent as enSwotContent } from "@/content/en/home/swot/SwotContent";
import type { SupportedLocale } from "@/content/i18n/Config";

import type { SwotContentData } from "./SwotTypes";

const swotContentByLocale: Record<SupportedLocale, SwotContentData> = {
  en: enSwotContent,
  ar: arSwotContent,
};

export function getSwotContent(locale: SupportedLocale): SwotContentData {
  return swotContentByLocale[locale];
}
