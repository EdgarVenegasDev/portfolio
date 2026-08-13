"use client";

import Link from "next/link";
import LanguageToggle from "@/components/ui/LanguageToggle";

export default function CaseStudyNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[var(--paper)]/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 sm:px-10 lg:px-12">
        <Link href="/#work" className="flex items-center gap-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.16em] text-[var(--muted)] transition-colors duration-300 hover:text-[var(--ink)]">
          ← Back
        </Link>
        <Link href="/" className="text-sm font-semibold tracking-[-0.02em] text-[var(--ink)]">
          EV
        </Link>
        <LanguageToggle />
      </nav>
    </header>
  );
}