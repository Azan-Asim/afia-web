import { getContactContent } from "@/content/home/contact/ContactContent";
import { getFooterContent } from "@/content/home/footer/FooterContent";
import { getHeroContent } from "@/content/home/hero/HeroContent";
import { getInvestmentContent } from "@/content/home/investment/InvestmentContent";
import { getMoatContent } from "@/content/home/moat/MoatContent";
import { getNavigationContent } from "@/content/home/navigation/NavContent";
import { getOpportunityContent } from "@/content/home/opportunity/OpportunityContent";
import { getPlatformContent } from "@/content/home/platform/PlatformContent";
import { getRevenueContent } from "@/content/home/revenue/RevenueContent";
import { getSwotContent } from "@/content/home/swot/SwotContent";
import type { SupportedLocale } from "@/content/i18n/Config";

export function getHomeContent(locale: SupportedLocale) {
  return {
    contact: getContactContent(locale),
    footer: getFooterContent(locale),
    hero: getHeroContent(locale),
    investment: getInvestmentContent(locale),
    moat: getMoatContent(locale),
    navigation: getNavigationContent(locale),
    opportunity: getOpportunityContent(locale),
    platform: getPlatformContent(locale),
    revenue: getRevenueContent(locale),
    swot: getSwotContent(locale),
  };
}
