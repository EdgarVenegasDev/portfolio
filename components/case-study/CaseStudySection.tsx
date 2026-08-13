import type { ReactNode } from "react";
import Reveal from "@/components/motion/Reveal";

type CaseStudySectionProps = {
  label: string;
  title: string;
  children: ReactNode;
};

export default function CaseStudySection({ label, title, children }: CaseStudySectionProps) {
  return (
    <Reveal>
      <div className="grid gap-6 border-t border-[var(--line)] py-16 lg:grid-cols-[200px_1fr] lg:gap-12">
        <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
          {label}
        </p>
        <div>
          <h3 className="text-2xl font-medium tracking-[-0.02em] text-[var(--ink)] sm:text-3xl">
            {title}
          </h3>
          <div className="mt-5 max-w-2xl text-sm leading-7 text-[var(--ink-soft)]">
            {children}
          </div>
        </div>
      </div>
    </Reveal>
  );
}