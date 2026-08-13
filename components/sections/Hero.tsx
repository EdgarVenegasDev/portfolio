"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Magnetic from "@/components/motion/Magnetic";
import GeometricShape from "@/components/motion/GeometricShape";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const triangleRotate = useTransform(scrollYProgress, [0.4, 0.9], [0, 180]);

  // derivadas directamente de la rotación, no del scroll por separado
  const contentOpacity = useTransform(triangleRotate, [0, 180], [1, 0]);
  const contentY = useTransform(triangleRotate, [0, 180], [0, -60]);

  return (
    <div ref={ref} id="top" className="relative bg-[var(--paper)]" style={{ height: "230vh" }}>
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-6">
        <div className="flex items-center gap-10 sm:gap-16">
          <GeometricShape type="triangle" size={64} rotate={triangleRotate} />
          <GeometricShape type="square" size={64} />
          <GeometricShape type="circle" size={64} />
        </div>

        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="mt-14 max-w-2xl text-center"
        >
          <p className="text-2xl font-medium leading-snug tracking-[-0.02em] text-[var(--ink)] sm:text-4xl">
            {t.hero.quote}
          </p>

          <p className="mt-6 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
            — {t.hero.name}
          </p>
          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
            {t.hero.role}
          </p>

          <Magnetic>
            <a href="#work" className="group mt-12 inline-flex flex-col items-center gap-3 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--ink)]">
              {t.hero.cta}
              <motion.span
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] transition-colors duration-500 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white"
              >
                ↓
              </motion.span>
            </a>
          </Magnetic>
        </motion.div>
      </div>
    </div>
  );
}