"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type ParallaxImageCardProps = {
  label: string;
};

export default function ParallaxImageCard({ label }: ParallaxImageCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <div ref={ref} className="h-full">
      <motion.div
        style={{ y }}
        className="flex h-48 w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5 sm:h-full"
      >
        <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-white/30">
          {label}
        </span>
      </motion.div>
    </div>
  );
}