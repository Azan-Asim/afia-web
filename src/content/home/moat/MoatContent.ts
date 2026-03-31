import { moatContent as arMoatContent } from "@/content/ar/home/moat/MoatContent";
import { moatContent as enMoatContent } from "@/content/en/home/moat/MoatContent";
import type { SupportedLocale } from "@/content/i18n/Config";

import type { MoatContentData } from "./MoatTypes";

const moatContentByLocale: Record<SupportedLocale, MoatContentData> = {
  en: enMoatContent,
  ar: arMoatContent,
};

export function getMoatContent(locale: SupportedLocale): MoatContentData {
  return moatContentByLocale[locale];
}
