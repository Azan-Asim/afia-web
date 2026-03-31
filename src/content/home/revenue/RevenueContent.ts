import { revenueContent as arRevenueContent } from "@/content/ar/home/revenue/RevenueContent";
import { revenueContent as enRevenueContent } from "@/content/en/home/revenue/RevenueContent";
import type { SupportedLocale } from "@/content/i18n/Config";

import type { RevenueContentData } from "./RevenueTypes";

const revenueContentByLocale: Record<SupportedLocale, RevenueContentData> = {
  en: enRevenueContent,
  ar: arRevenueContent,
};

export function getRevenueContent(locale: SupportedLocale): RevenueContentData {
  return revenueContentByLocale[locale];
}
