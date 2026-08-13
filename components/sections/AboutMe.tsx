"use client";

import GeometricShape from "@/components/motion/GeometricShape";
import ColorWipe from "@/components/motion/ColorWipe";
import Reveal from "@/components/motion/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import EducationAndCertifications from "@/components/about/EducationAndCertifications";

export default function AboutMe() {
  const { t } = useLanguage();

  return (
    <ColorWipe from="var(--story-maroon)">
      <section id="about" className="relative overflow-hidden bg-[var(--story-navy)] py-32 sm:py-40">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 opacity-[0.08] sm:-right-10 sm:-top-10">
          <svg viewBox="0 0 400 400" width="440" height="440">
            <circle cx="200" cy="200" r="190" fill="none" stroke="#ffffff" strokeWidth="1" />
            <circle cx="200" cy="200" r="140" fill="none" stroke="#ffffff" strokeWidth="1" />
            <circle cx="200" cy="200" r="90" fill="none" stroke="#ffffff" strokeWidth="1" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-[760px] px-6 sm:px-10 lg:px-12">
          <Reveal>
            <div className="flex items-center gap-4">
              <GeometricShape type="circle" size={36} stroke="#ffffff" strokeWidth={1.2} />
              <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-white/50">
                {t.about.label}
              </p>
            </div>

            <p className="mt-8 text-3xl font-medium leading-[1.25] tracking-[-0.02em] text-white sm:text-4xl">
              {t.about.intro}
            </p>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/60">
              {t.about.introSecondary}
            </p>
          </Reveal>

          {/* Languages */}
          <Reveal delay={0.05}>
            <div className="mt-20 border-t border-white/10 pt-10">
              <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-white/40">
                {t.about.languagesLabel}
              </p>
              <div className="mt-6 flex flex-col gap-3">
                {t.about.languages.map((lang) => (
                  <div key={lang.name} className="flex items-baseline justify-between gap-6">
                    <span className="text-lg font-medium text-white">{lang.name}</span>
                    <span className="font-[family-name:var(--font-mono)] text-xs text-white/50">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Technologies */}
          <Reveal delay={0.08}>
            <div className="mt-14 border-t border-white/10 pt-10">
              <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-white/40">
                {t.about.technologiesLabel}
              </p>
              <div className="mt-6 flex flex-col gap-6">
                {t.about.technologies.map((group) => (
                  <div key={group.group} className="flex flex-col gap-2 sm:flex-row sm:gap-8">
                    <span className="w-32 shrink-0 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.14em] text-white/40">
                      {group.group}
                    </span>
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                      {group.items.map((item) => (
                        <span key={item} className="text-sm text-white/85">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Still learning */}
          <Reveal delay={0.1}>
            <div className="mt-14 border-t border-white/10 pt-10">
              <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-white/40">
                {t.about.learningLabel}
              </p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                {t.about.learning.map((item) => (
                  <span key={item} className="text-sm text-white/85">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Certifications */}
          <EducationAndCertifications />
        </div>
      </section>
    </ColorWipe>
  );
}