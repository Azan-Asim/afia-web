import { investmentContent as arInvestmentContent } from "@/content/ar/home/investment/InvestmentContent";
import { investmentContent as enInvestmentContent } from "@/content/en/home/investment/InvestmentContent";
import type { SupportedLocale } from "@/content/i18n/Config";

import type { InvestmentContentData } from "./InvestmentTypes";

const investmentContentByLocale: Record<SupportedLocale, InvestmentContentData> = {
  en: enInvestmentContent,
  ar: arInvestmentContent,
};

export function getInvestmentContent(locale: SupportedLocale): InvestmentContentData {
  return investmentContentByLocale[locale];
}
