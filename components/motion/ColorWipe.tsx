"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

type ColorWipeProps = {
  from: string;
  children: ReactNode;
  className?: string;
};


export default function ColorWipe({ from, children, className = "" }: ColorWipeProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.25"],
  });

  const clip = useTransform(
    scrollYProgress,
    [0, 1],
    ["circle(150% at 50% 0%)", "circle(0% at 50% 0%)"],
  );

  return (
    <div ref={ref} className={`relative ${className}`}>
      {children}
      <motion.div
        aria-hidden="true"
        style={{ clipPath: clip, backgroundColor: from }}
        className="pointer-events-none absolute inset-0 z-30"
      />
    </div>
  );
}