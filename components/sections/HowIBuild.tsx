"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import GeometricShape from "@/components/motion/GeometricShape";
import ColorWipe from "@/components/motion/ColorWipe";
import ParallaxImageCard from "@/components/motion/ParallaxImageCard";
import Reveal from "@/components/motion/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { buildProcessImages } from "@/lib/data/buildProcessImages";

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

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 pb-24 pt-20 sm:px-10 sm:pb-32 sm:pt-28 lg:px-12 lg:pb-40 lg:pt-32">
          <Reveal>
            <p className="mb-5 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-white/50">
              {t.howIBuild.label}
            </p>
            <h2 className="max-w-2xl text-3xl font-medium leading-tight tracking-[-0.03em] text-white sm:text-5xl">
              {t.howIBuild.title}
            </h2>
          </Reveal>

          <div className="mt-16 flex flex-col gap-16 sm:mt-20 sm:gap-20 lg:mt-24 lg:gap-24">
            {t.howIBuild.steps.map((step, index) => (
              <Reveal key={step.title} delay={(index % 4) * 0.05}>
                <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-10">
                  <div className="border-t border-white/10 pt-6 sm:pt-7">

                    <h3 className="text-xl font-medium tracking-[-0.02em] text-white sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-4 max-w-md text-sm leading-7 text-white/60">
                      {step.description}
                    </p>
                  </div>

                  <div className="relative aspect-[4/3] w-full sm:aspect-[16/11]">
                    <ParallaxImageCard label={step.title} src={buildProcessImages[index]} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-20 border-t border-white/10 pt-10 sm:mt-24 sm:pt-12 lg:mt-28">
              <p className="max-w-2xl text-2xl font-medium leading-snug tracking-[-0.02em] text-white sm:text-3xl">
                {t.howIWork.title1} <span className="text-[var(--story-yellow)]">{t.howIWork.title2}</span>
              </p>
              <p className="mt-6 max-w-xl text-base leading-7 text-white/60">
                {t.howIWork.statement}
              </p>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/40">
                {t.howIWork.description}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </ColorWipe>
  );
}