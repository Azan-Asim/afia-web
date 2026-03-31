"use client";

import { getHomeContent } from "@/content/home/HomeContent";
import { useLocale } from "@/content/i18n/LocaleProvider";

export function useHomeContent() {
  const { locale } = useLocale();

  return getHomeContent(locale);
}
