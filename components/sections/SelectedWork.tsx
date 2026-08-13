"use client";

import { useRef } from "react";
import Link from "next/link";
import { useScroll, useTransform } from "framer-motion";
import GeometricShape from "@/components/motion/GeometricShape";
import ColorWipe from "@/components/motion/ColorWipe";
import ParallaxImageCard from "@/components/motion/ParallaxImageCard";
import Magnetic from "@/components/motion/Magnetic";
import Reveal from "@/components/motion/Reveal";

const projects = [
  {
    index: "01",
    slug: "cabo-bay",
    title: "Cabo Bay",
    category: "PHP / MySQL",
    tagline: "Server-side architecture",
    story: "A traditional server-side web application built for a real transportation business in Los Cabos — reservations, gallery, and admin, all handled the way the web has worked for decades.",
    techs: ["PHP", "MySQL", "JavaScript", "Tailwind CSS"],
    imageLabel: "Cabo Bay",
  },
  {
    index: "02",
    slug: "cabo101",
    title: "Cabo101",
    category: "Next.js / React / Node.js",
    tagline: "Modern full-stack architecture",
    story: "A full-stack booking platform for transportation and tourism services — frontend, backend, database, payments and third-party integrations, built as one cohesive system.",
    techs: ["Next.js", "React", "TypeScript", "Node.js", "Prisma", "MariaDB", "Mercado Pago"],
    imageLabel: "Cabo101",
  },
];

export default function SelectedWork() {
  const stickyRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: stickyProgress } = useScroll({
    target: stickyRef,
    offset: ["start start", "end end"],
  });

  const squareRotate = useTransform(stickyProgress, [0.1, 0.85], [0, 180]);

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
            <p className="mb-6 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-white/70">
              Selected Work
            </p>
            <h2 className="max-w-2xl text-3xl font-medium leading-tight tracking-[-0.03em] text-white sm:text-5xl">
              Two projects. Two ways of building.
            </h2>
          </Reveal>

          <div className="mt-28 flex flex-col gap-32">
            {projects.map((project, i) => {
              const reversed = i % 2 === 1;

              return (
                <Reveal key={project.slug}>
                  <Link href={`/work/${project.slug}`} className="group block">
                    <div
                      className={`grid items-center gap-10 lg:grid-cols-12 lg:gap-16 ${
                        reversed ? "" : ""
                      }`}
                    >
                      <div className={`lg:col-span-7 ${reversed ? "lg:order-2" : ""}`}>
                        <div className="relative overflow-hidden rounded-2xl transition-transform duration-700 ease-out group-hover:scale-[1.015]">
                          <ParallaxImageCard label={project.imageLabel} />
                        </div>
                      </div>

                      <div className={`relative lg:col-span-5 ${reversed ? "lg:order-1" : ""}`}>
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute -top-10 left-0 select-none font-[family-name:var(--font-mono)] text-[7rem] font-medium leading-none text-white/10 sm:text-[9rem]"
                        >
                          {project.index}
                        </span>

                        <div className="relative">
                          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-white/60">
                            {project.category}
                          </p>

                          <h3 className="mt-3 text-4xl font-medium tracking-[-0.03em] text-white transition-transform duration-500 group-hover:translate-x-2 sm:text-5xl">
                            {project.title}
                          </h3>

                          <p className="mt-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.16em] text-white/50">
                            {project.tagline}
                          </p>

                          <p className="mt-6 max-w-md text-sm leading-7 text-white/75">
                            {project.story}
                          </p>

                          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                            {project.techs.map((tech) => (
                              <span key={tech} className="font-[family-name:var(--font-mono)] text-[11px] text-white/50">
                                {tech}
                              </span>
                            ))}
                          </div>

                          <Magnetic strength={0.15}>
                            <span className="mt-10 inline-flex items-center gap-3 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.18em] text-white">
                              View case study
                              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-[var(--story-yellow)]">
                                →
                              </span>
                            </span>
                          </Magnetic>
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
              <span className="text-white/30">↓</span>
              <span>Cabo101 — Next.js / React / Node.js</span>
            </div>
          </Reveal>
        </div>
      </section>
    </ColorWipe>
  );
}