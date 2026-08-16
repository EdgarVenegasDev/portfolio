"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useScroll, useTransform } from "framer-motion";
import GeometricShape from "@/components/motion/GeometricShape";
import ColorWipe from "@/components/motion/ColorWipe";
import ParallaxImageCard from "@/components/motion/ParallaxImageCard";
import Reveal from "@/components/motion/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { workCopy, workOrder } from "@/lib/data/workCopy";
import { workImages } from "@/lib/data/workImages";

type ApiProject = {
  id: number;
  slug: string;
  title: string;
  description: string;
  githubUrl: string | null;
  liveUrl: string | null;
  technologies: string;
  createdAt: string;
};

export default function SelectedWork() {
  const { language } = useLanguage();
  const stickyRef = useRef<HTMLDivElement>(null);
  const [projects, setProjects] = useState<ApiProject[] | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch("/api/projects")
      .then(async (res) => {
        if (!res.ok) throw new Error(`Request failed with ${res.status}`);
        const data = await res.json();
        if (!Array.isArray(data)) throw new Error("Unexpected response shape");
        return data as ApiProject[];
      })
      .then((data) => {
        if (!cancelled) setProjects(data);
      })
      .catch((error) => {
        console.error("Failed to load projects:", error);
        if (!cancelled) setProjects([]);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const { scrollYProgress: stickyProgress } = useScroll({
    target: stickyRef,
    offset: ["start start", "end end"],
  });

  const squareRotate = useTransform(stickyProgress, [0.1, 0.85], [0, 180]);

  const orderedProjects = projects
    ? workOrder
        .map((slug) => projects.find((p) => p.slug === slug))
        .filter((p): p is ApiProject => Boolean(p))
    : [];

  return (
    <ColorWipe from="var(--paper)">
      <section id="work" className="relative bg-[var(--story-yellow)]">
        <div ref={stickyRef} style={{ height: "200vh" }} className="relative">
          <div className="sticky top-0 flex h-screen items-center justify-center px-6">
            <div className="flex items-center gap-10 sm:gap-16">
              <GeometricShape type="triangle" size={56} rotate={180} stroke="#ffffff" />
              <GeometricShape type="square" size={56} rotate={squareRotate} stroke="#ffffff" />
              <GeometricShape type="circle" size={56} stroke="#ffffff" />
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 pb-40 sm:px-10 lg:px-12">
          <Reveal>
            <h2 className="max-w-2xl font-[family-name:var(--font-inter)] text-3xl font-medium leading-tight tracking-[-0.03em] text-white sm:text-5xl">
              Two projects. Two ways of building.
            </h2>
          </Reveal>

          {!projects && (
            <div className="mt-28 flex flex-col gap-8">
              {[0, 1, 2].map((i) => (
                <div key={i} className="h-64 animate-pulse rounded-2xl bg-white/5" />
              ))}
            </div>
          )}

          {projects && orderedProjects.length === 0 && (
            <p className="mt-28 font-[family-name:var(--font-mono)] text-sm text-white/50">
              Projects couldn&apos;t be loaded right now.
            </p>
          )}

          <div className="mt-28 flex flex-col gap-32">
            {orderedProjects.map((project, i) => {
              const reversed = i % 2 === 1;
              const copy = workCopy[language][project.slug];
              const techs = project.technologies.split(",").map((t) => t.trim());

              return (
                <Reveal key={project.slug}>
                  <Link href={`/work/${project.slug}`} className="group block">
                    <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
                      <div className={`lg:col-span-7 ${reversed ? "lg:order-2" : ""}`}>
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl transition-transform duration-700 ease-out group-hover:scale-[1.015]">
                          <ParallaxImageCard label={project.title} src={workImages[project.slug]} />
                        </div>
                      </div>

                      <div className={`relative lg:col-span-5 ${reversed ? "lg:order-1" : ""}`}>
                        <div className="relative">
                          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-white/60">
                            {copy?.category ?? project.title}
                          </p>

                          <h3 className="mt-3 text-4xl font-medium tracking-[-0.03em] text-white transition-transform duration-500 group-hover:translate-x-2 sm:text-5xl">
                            {project.title}
                          </h3>

                          <p className="mt-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.16em] text-white/50">
                            {copy?.tagline}
                          </p>

                          <p className="mt-6 max-w-md text-sm leading-7 text-white/75">
                            {copy?.story ?? project.description}
                          </p>

                          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                            {techs.map((tech) => (
                              <span key={tech} className="font-[family-name:var(--font-mono)] text-[11px] text-white/50">
                                {tech}
                              </span>
                            ))}
                          </div>

                          <span className="mt-10 inline-flex items-center gap-3 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.18em] text-white">
                            View case study
                      
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-32 flex flex-col items-center gap-3 border-t border-white/15 pt-16 text-center font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-white/50">
              <span>Cabo Bay — PHP / MySQL</span>
              <span className="text-white/30"></span>
              <span>Cabo101 — Next.js / React / Node.js</span>
              <span className="text-white/30"></span>
              <span>Portfolio — Next.js / PostgreSQL / Docker</span>
            </div>
          </Reveal>
        </div>
      </section>
    </ColorWipe>
  );
}