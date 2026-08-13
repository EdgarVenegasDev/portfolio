"use client";

import Reveal from "@/components/motion/Reveal";
import SubjectList from "@/components/about/SubjectList";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { education } from "@/lib/data/education";

export default function EducationAndCertifications() {
  const { language } = useLanguage();
  const data = education[language];

  return (
    <>
      {/* Education */}
      <Reveal delay={0.1}>
        <div className="mt-14 border-t border-white/10 pt-10">
          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-white/40">
            {data.educationLabel}
          </p>

          <div className="mt-6 flex flex-col gap-10">
            {data.schools.map((school) => (
              <div key={school.institution} className="flex flex-col gap-5 sm:flex-row">
                <div className="h-32 w-full shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/5 sm:h-24 sm:w-32">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={school.image}
                    alt={school.institution}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>

                <div className="min-w-0">
                  <span className="text-lg font-medium text-white">{school.degree}</span>
                  <p className="mt-1 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.14em] text-white/50">
                    {school.institution}
                  </p>

                  <SubjectList
                    subjects={school.subjects}
                    viewLabel={data.viewSubjects}
                    hideLabel={data.hideSubjects}
                    searchPlaceholder={data.searchPlaceholder}
                    noResultsLabel={data.noResults}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Courses / Certifications */}
      <Reveal delay={0.12}>
        <div className="mt-14 border-t border-white/10 pt-10">
          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-white/40">
            {data.coursesLabel}
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {data.courses.map((course) => (
              <div key={course.title}>
                <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
                <p className="mt-3 text-sm font-medium text-white">{course.title}</p>
                {course.issuer && (
                  <p className="font-[family-name:var(--font-mono)] text-xs text-white/40">{course.issuer}</p>
                )}
              </div>
            ))}
          </div>

          <p className="mt-6 font-[family-name:var(--font-mono)] text-xs text-white/30">
            {data.comingSoon}
          </p>
        </div>
      </Reveal>

      {/* SoloLearn */}
      <Reveal delay={0.14}>
        <a href={data.sololearnUrl} target="_blank" rel="noopener noreferrer" className="group mt-10 flex items-center justify-between gap-6 rounded-2xl border border-white/10 px-6 py-5 transition-colors duration-300 hover:border-white/25">
          <div>
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.16em] text-white/40">
              {data.sololearnLabel}
            </p>
            <p className="mt-1 text-base font-medium text-white">{data.sololearnName}</p>
          </div>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-[var(--story-navy)]">
            →
          </span>
        </a>
      </Reveal>
    </>
  );
}