import { heroContent as arHeroContent } from "@/content/ar/home/hero/HeroContent";
import { heroContent as enHeroContent } from "@/content/en/home/hero/HeroContent";
import type { SupportedLocale } from "@/content/i18n/Config";

import type { HeroContentData } from "./HeroTypes";

const heroContentByLocale: Record<SupportedLocale, HeroContentData> = {
  en: enHeroContent,
  ar: arHeroContent,
};

export function getHeroContent(locale: SupportedLocale): HeroContentData {
  return heroContentByLocale[locale];
}
