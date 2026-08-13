"use client";

import GeometricShape from "@/components/motion/GeometricShape";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-[var(--line)] bg-[var(--paper)]">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-6 py-10 sm:px-10 lg:px-12">
        <div className="flex items-center gap-3 opacity-40">
          <GeometricShape type="triangle" size={16} strokeWidth={1.6} />
          <GeometricShape type="square" size={16} strokeWidth={1.6} />
          <GeometricShape type="circle" size={16} strokeWidth={1.6} />
        </div>

        <div className="flex flex-col gap-4 font-[family-name:var(--font-mono)] text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Edgar Venegas</p>

          <div className="flex gap-6">
            <a href="https://github.com/EdgarVenegasDev" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--ink)]">
              {t.footer.github}
            </a>
            <a href="https://linkedin.com/in/edgar-venegas" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--ink)]">
              {t.footer.linkedin}
            </a>
            <a href="mailto:abraham_venegaz@hotmail.com" className="transition-colors hover:text-[var(--ink)]">
              {t.footer.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}