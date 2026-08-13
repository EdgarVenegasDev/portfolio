"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center rounded-full border border-[var(--line)] p-0.5 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.12em]">
      <button
        onClick={() => setLanguage("es")}
        className={`rounded-full px-3 py-1.5 transition-colors duration-300 ${
          language === "es"
            ? "bg-[var(--ink)] text-white"
            : "text-[var(--muted)] hover:text-[var(--ink)]"
        }`}
      >
        Es
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`rounded-full px-3 py-1.5 transition-colors duration-300 ${
          language === "en"
            ? "bg-[var(--ink)] text-white"
            : "text-[var(--muted)] hover:text-[var(--ink)]"
        }`}
      >
        En
      </button>
    </div>
  );
}
