import { contactContent as arContactContent } from "@/content/ar/home/contact/ContactContent";
import { contactContent as enContactContent } from "@/content/en/home/contact/ContactContent";
import type { SupportedLocale } from "@/content/i18n/Config";

import type { ContactContentData } from "./ContactTypes";

const contactContentByLocale: Record<SupportedLocale, ContactContentData> = {
  en: enContactContent,
  ar: arContactContent,
};

export function getContactContent(locale: SupportedLocale): ContactContentData {
  return contactContentByLocale[locale];
}
