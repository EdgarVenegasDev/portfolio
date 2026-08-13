"use client";

import Link from "next/link";
import Footer from "@/components/layout/Footer";
import CaseStudyNav from "@/components/case-study/CaseStudyNav";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import CaseStudySection from "@/components/case-study/CaseStudySection";
import ArchitectureDiagram from "@/components/case-study/ArchitectureDiagram";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { caseStudies } from "@/lib/data/caseStudies";

const copy = {
  en: { overview: "Overview", problem: "The Problem", solution: "The Solution", architecture: "Architecture", integrations: "Integrations", challenges: "Challenges", learned: "What I Learned", technology: "Technology", live: "Live Project", github: "GitHub", next: "Next project", nextTitle: "Cabo101" },
  es: { overview: "Overview", problem: "El Problema", solution: "La Solución", architecture: "Arquitectura", integrations: "Integraciones", challenges: "Retos", learned: "Qué Aprendí", technology: "Tecnología", live: "Ver Proyecto", github: "GitHub", next: "Siguiente proyecto", nextTitle: "Cabo101" },
};

export default function CaboBayPage() {
  const { language } = useLanguage();
  const content = caseStudies[language]["cabo-bay"];
  const c = copy[language];

  return (
    <div className="bg-[var(--paper)]">
      <CaseStudyNav />

      <main>
        <CaseStudyHero content={content} liveLabel={c.live} githubLabel={c.github} />

        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-12">
          <CaseStudySection label="01" title={c.overview}>
            <p>{content.overview}</p>
          </CaseStudySection>

          <CaseStudySection label="02" title={c.problem}>
            <p>{content.problem}</p>
          </CaseStudySection>

          <CaseStudySection label="03" title={c.solution}>
            <p>{content.solution}</p>
          </CaseStudySection>

          <CaseStudySection label="04" title={c.architecture}>
            <ArchitectureDiagram nodes={content.architecture} />
          </CaseStudySection>

          <CaseStudySection label="05" title={c.integrations}>
            <p>{content.integrations}</p>
          </CaseStudySection>

          <CaseStudySection label="06" title={c.challenges}>
            <p>{content.challenges}</p>
          </CaseStudySection>

          <CaseStudySection label="07" title={c.learned}>
            <p>{content.learned}</p>
          </CaseStudySection>

          <CaseStudySection label="08" title={c.technology}>
            <div className="flex flex-col gap-6">
              {content.technology.map((group) => (
                <div key={group.group}>
                  <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--muted)]">
                    {group.group}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
                    {group.items.map((item) => (
                      <span key={item} className="font-[family-name:var(--font-mono)] text-sm text-[var(--ink)]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CaseStudySection>
        </div>

        <div className="mx-auto max-w-[1400px] px-6 pb-32 pt-8 sm:px-10 lg:px-12">
          <Link href="/work/cabo101" className="group flex items-center justify-between gap-6 border-t border-[var(--line)] py-10">
            <div>
              <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                {c.next}
              </p>
              <p className="mt-2 text-3xl font-medium tracking-[-0.03em] text-[var(--ink)] transition-transform duration-500 group-hover:translate-x-2 sm:text-4xl">
                {c.nextTitle}
              </p>
            </div>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--line)] transition-all duration-500 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white">
              →
            </span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}