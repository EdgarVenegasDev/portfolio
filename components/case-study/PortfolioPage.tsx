"use client";

import Link from "next/link";
import Footer from "@/components/layout/Footer";
import CaseStudyNav from "@/components/case-study/CaseStudyNav";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import CaseStudySection from "@/components/case-study/CaseStudySection";
import ArchitectureDiagram from "@/components/case-study/ArchitectureDiagram";
import CodeBlock from "@/components/case-study/CodeBlock";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { portfolioCaseStudy } from "@/lib/data/portfolioCaseStudy";

const copy = {
  en: {
    overview: "Overview", challenge: "The Challenge", architecture: "Architecture", techStack: "Tech Stack",
    database: "Data Layer", api: "Project API", deployment: "Deployment Pipeline", security: "Infrastructure Security",
    learned: "What I Learned", result: "Result", live: "Live Project", github: "GitHub",
    next: "Next project", nextTitle: "Cabo Bay",
    requestFlowLabel: "Request flow", deployFlowLabel: "Deploy flow",
    beforeLabel: "Before", afterLabel: "After",
  },
  es: {
    overview: "Overview", challenge: "El Reto", architecture: "Arquitectura", techStack: "Stack Tecnológico",
    database: "Capa de Datos", api: "API de Proyectos", deployment: "Pipeline de Despliegue", security: "Seguridad de Infraestructura",
    learned: "Qué Aprendí", result: "Resultado", live: "Ver Proyecto", github: "GitHub",
    next: "Siguiente proyecto", nextTitle: "Cabo Bay",
    requestFlowLabel: "Flujo de petición", deployFlowLabel: "Flujo de despliegue",
    beforeLabel: "Antes", afterLabel: "Después",
  },
};

export default function PortfolioPage() {
  const { language } = useLanguage();
  const content = portfolioCaseStudy[language];
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

          <CaseStudySection label="02" title={c.challenge}>
            <p>{content.challengeIntro}</p>
            <div className="mt-8 flex flex-col gap-6">
              {content.goals.map((goal, index) => (
                <div key={goal.title}>
                  <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] text-[var(--muted)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-1 text-base font-medium text-[var(--ink)]">{goal.title}</p>
                  <p className="mt-1 text-sm leading-6 text-[var(--ink-soft)]">{goal.description}</p>
                </div>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection label="03" title={c.architecture}>
            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <p className="mb-2 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--muted)]">
                  {c.requestFlowLabel}
                </p>
                <ArchitectureDiagram nodes={content.requestFlow} />
              </div>
              <div>
                <p className="mb-2 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--muted)]">
                  {c.deployFlowLabel}
                </p>
                <ArchitectureDiagram nodes={content.deployFlow} />
              </div>
            </div>
          </CaseStudySection>

          <CaseStudySection label="04" title={c.techStack}>
            <div className="flex flex-col gap-6">
              {content.techStack.map((group) => (
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

          <CaseStudySection label="05" title={c.database}>
            <p>{content.databaseText}</p>
            <div className="mt-6">
              <CodeBlock>{content.databaseSchema}</CodeBlock>
            </div>
          </CaseStudySection>

          <CaseStudySection label="06" title={c.api}>
            <p>{content.apiText}</p>
            <div className="mt-6">
              <CodeBlock>{content.apiExample}</CodeBlock>
            </div>
          </CaseStudySection>

          <CaseStudySection label="07" title={c.deployment}>
            <p>{content.deploymentText}</p>
            <div className="mt-8 max-w-xs">
              <ArchitectureDiagram nodes={content.deploymentFlow} />
            </div>
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
              {content.ciChecks.map((check) => (
                <span key={check} className="rounded-full border border-[var(--line)] px-3 py-1 font-[family-name:var(--font-mono)] text-xs text-[var(--ink-soft)]">
                  {check}
                </span>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection label="08" title={c.security}>
            <p>{content.securityText}</p>
            <div className="mt-8 grid gap-10 sm:grid-cols-2">
              <div>
                <p className="mb-2 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--muted)]">
                  {c.beforeLabel}
                </p>
                <ArchitectureDiagram nodes={content.securityBefore} />
              </div>
              <div>
                <p className="mb-2 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--muted)]">
                  {c.afterLabel}
                </p>
                <ArchitectureDiagram nodes={content.securityAfter} />
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2">
              {content.securityMeasures.map((measure) => (
                <span key={measure} className="font-[family-name:var(--font-mono)] text-xs text-[var(--ink-soft)]">
                  · {measure}
                </span>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection label="09" title={c.learned}>
            <p>{content.learned}</p>
          </CaseStudySection>

          <CaseStudySection label="10" title={c.result}>
            <p>{content.result}</p>
          </CaseStudySection>
        </div>

        <div className="mx-auto max-w-[1400px] px-6 pb-32 pt-8 sm:px-10 lg:px-12">
          <Link href="/work/cabo-bay" className="group flex items-center justify-between gap-6 border-t border-[var(--line)] py-10">
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