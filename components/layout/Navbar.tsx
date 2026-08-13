"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import LanguageToggle from "@/components/ui/LanguageToggle";

export default function Navbar() {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const diff = latest - lastY.current;

    if (latest < 80) {
      setHidden(false);
    } else if (diff > 4) {
      setHidden(true);
    } else if (diff < -4) {
      setHidden(false);
    }

    lastY.current = latest;
  });

  const navigation = [
    { label: t.nav.work, href: "#work" },
    { label: t.nav.process, href: "#how-i-work" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <motion.header
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 bg-[var(--paper)]/90 backdrop-blur-sm"
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 sm:px-10 lg:px-12">
        <a href="#top" className="text-sm font-semibold tracking-[-0.02em] text-[var(--ink)]">
          EV
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.16em] text-[var(--muted)] transition-colors duration-300 hover:text-[var(--ink)]">
              {item.label}
            </a>
          ))}
        </div>

        <LanguageToggle />
      </nav>
    </motion.header>
  );
}
