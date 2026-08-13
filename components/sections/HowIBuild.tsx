"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import GeometricShape from "@/components/motion/GeometricShape";
import ColorWipe from "@/components/motion/ColorWipe";
import ParallaxImageCard from "@/components/motion/ParallaxImageCard";
import Reveal from "@/components/motion/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function HowIBuild() {
  const { t } = useLanguage();
  const stickyRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: stickyProgress } = useScroll({
    target: stickyRef,
    offset: ["start start", "end end"],
  });

  const circleScale = useTransform(stickyProgress, [0, 1], [1, 1.15]);

  return (
    <ColorWipe from="var(--story-yellow)">
      <section id="how-i-work" className="relative bg-[var(--story-maroon)]">
        <div ref={stickyRef} style={{ height: "150vh" }} className="relative">
          <div className="sticky top-0 flex h-screen items-center justify-center px-6">
            <div className="flex items-center gap-10 sm:gap-16">
              <GeometricShape type="triangle" size={48} rotate={180} stroke="#ffffff" />
              <GeometricShape type="square" size={48} rotate={180} stroke="#ffffff" />
              <motion.div style={{ scale: circleScale }}>
                <GeometricShape type="circle" size={48} stroke="#ffffff" />
              </motion.div>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 pb-40 sm:px-10 lg:px-12">
          <Reveal>
            <p className="mb-4 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-white/50">
              {t.howIBuild.label}
            </p>
            <h2 className="max-w-2xl text-3xl font-medium leading-tight tracking-[-0.03em] text-white sm:text-5xl">
              {t.howIBuild.title}
            </h2>
          </Reveal>

          <div className="mt-20 flex flex-col gap-20">
            {t.howIBuild.steps.map((step, index) => (
              <Reveal key={step.title} delay={(index % 4) * 0.05}>
                <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
                  <div className="border-t border-white/10 pt-6">
                    <p className="mb-2 font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] text-[var(--story-yellow)]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-xl font-medium tracking-[-0.02em] text-white sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-7 text-white/60">
                      {step.description}
                    </p>
                  </div>

                  <ParallaxImageCard label={t.howIBuild.imageLabel} />
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-24 border-t border-white/10 pt-12">
              <p className="max-w-2xl text-2xl font-medium leading-snug tracking-[-0.02em] text-white sm:text-3xl">
                {t.howIWork.title1} <span className="text-[var(--story-yellow)]">{t.howIWork.title2}</span>
              </p>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/60">
                {t.howIWork.statement}
              </p>
              <p className="mt-3 max-w-xl text-sm leading-7 text-white/40">
                {t.howIWork.description}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </ColorWipe>
  );
}
