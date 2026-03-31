"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

import type { SupportedLocale } from "./Config";

type LocaleContextValue = {
  locale: SupportedLocale;
  direction: "ltr" | "rtl";
  setLocale: (locale: SupportedLocale) => void;
};

const defaultLocale: SupportedLocale = "en";
const rtlLocales = new Set<SupportedLocale>(["ar"]);
const localeStorageKey = "afia-locale";
const localeChangeEvent = "afia-locale-change";

const LocaleContext = createContext<LocaleContextValue | null>(null);

function readStoredLocale(): SupportedLocale {
  const storedLocale = window.localStorage.getItem(localeStorageKey);

  return storedLocale === "en" || storedLocale === "ar"
    ? storedLocale
    : defaultLocale;
}

function subscribe(onStoreChange: () => void) {
  const handleStorage = (event: StorageEvent) => {
    if (event.key === localeStorageKey) {
      onStoreChange();
    }
  };

  const handleLocaleChange = () => {
    onStoreChange();
  };

  window.addEventListener("storage", handleStorage);
  window.addEventListener(localeChangeEvent, handleLocaleChange);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(localeChangeEvent, handleLocaleChange);
  };
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(
    subscribe,
    readStoredLocale,
    () => defaultLocale,
  );

  useEffect(() => {
    const direction = rtlLocales.has(locale) ? "rtl" : "ltr";

    document.documentElement.lang = locale;
    document.documentElement.dir = direction;
  }, [locale]);

  const setLocale = (nextLocale: SupportedLocale) => {
    window.localStorage.setItem(localeStorageKey, nextLocale);
    window.dispatchEvent(new Event(localeChangeEvent));
  };

  const value = useMemo<LocaleContextValue>(() => {
    return {
      locale,
      direction: rtlLocales.has(locale) ? "rtl" : "ltr",
      setLocale,
    };
  }, [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider.");
  }

  return context;
}
