  "use client";
import { opportunityContent as arOpportunityContent } from "@/content/ar/home/opportunity/OpportunityContent";
import { opportunityContent as enOpportunityContent } from "@/content/en/home/opportunity/OpportunityContent";
import type { SupportedLocale } from "@/content/i18n/Config";

import type { OpportunityContentData } from "./OpportunityTypes";

const opportunityContentByLocale: Record<SupportedLocale, OpportunityContentData> = {
  en: enOpportunityContent,
  ar: arOpportunityContent,
};

export function getOpportunityContent(locale: SupportedLocale): OpportunityContentData {
  return opportunityContentByLocale[locale];
}
