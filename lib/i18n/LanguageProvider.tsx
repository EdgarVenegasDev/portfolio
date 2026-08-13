"use client";

import {
  createContext,
  useContext,
  useSyncExternalStore,
  type ReactNode,
} from "react";

import {
  translations,
  type Language,
} from "./translations";

type TranslationData = (typeof translations)["en"];

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: TranslationData;
};

const STORAGE_KEY = "portfolio-language";
const LANGUAGE_CHANGE_EVENT = "portfolio-language-change";

const LanguageContext =
  createContext<LanguageContextValue | null>(null);

function getStoredLanguage(): Language {
  if (typeof window === "undefined") {
    return "en";
  }

  const storedLanguage = localStorage.getItem(STORAGE_KEY);

  return storedLanguage === "es" ? "es" : "en";
}

function subscribe(callback: () => void) {
  const handleStorageChange = () => {
    callback();
  };

  const handleLanguageChange = () => {
    callback();
  };

  window.addEventListener(
    "storage",
    handleStorageChange,
  );

  window.addEventListener(
    LANGUAGE_CHANGE_EVENT,
    handleLanguageChange,
  );

  return () => {
    window.removeEventListener(
      "storage",
      handleStorageChange,
    );

    window.removeEventListener(
      LANGUAGE_CHANGE_EVENT,
      handleLanguageChange,
    );
  };
}

function getServerLanguage(): Language {
  return "en";
}

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const language = useSyncExternalStore(
    subscribe,
    getStoredLanguage,
    getServerLanguage,
  );

  function setLanguage(nextLanguage: Language) {
    localStorage.setItem(STORAGE_KEY, nextLanguage);

    window.dispatchEvent(
      new Event(LANGUAGE_CHANGE_EVENT),
    );
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider",
    );
  }

  return context;
}