import ParallaxImageCard from "@/components/motion/ParallaxImageCard";
import Reveal from "@/components/motion/Reveal";
import type { CaseStudyContent } from "@/lib/data/caseStudies";

type CaseStudyHeroProps = {
  content: CaseStudyContent;
  liveLabel: string;
  githubLabel: string;
};

export default function CaseStudyHero({ content, liveLabel, githubLabel }: CaseStudyHeroProps) {
  return (
    <div>
      <div className="mx-auto max-w-[1400px] px-6 pb-16 pt-40 sm:px-10 lg:px-12">
        <Reveal>
          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
            {content.category}
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-medium tracking-[-0.04em] text-[var(--ink)] sm:text-7xl">
            {content.title}
          </h1>
          <p className="mt-4 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
            {content.tagline}
          </p>
          <p className="mt-8 max-w-xl text-base leading-7 text-[var(--ink-soft)]">
            {content.summary}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            {content.live && (
              <a href={content.live} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[var(--ink)] px-6 py-3 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.16em] text-white transition-opacity duration-300 hover:opacity-80">
                {liveLabel}
              </a>
            )}
            <a href={content.github} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[var(--line)] px-6 py-3 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.16em] text-[var(--ink)] transition-colors duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]">
              {githubLabel}
            </a>
          </div>
        </Reveal>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-12">
        <Reveal delay={0.15}>
          <div className="h-[50vh] overflow-hidden rounded-2xl sm:h-[70vh]">
            <ParallaxImageCard label={content.title} />
          </div>
        </Reveal>
      </div>
    </div>
  );
}