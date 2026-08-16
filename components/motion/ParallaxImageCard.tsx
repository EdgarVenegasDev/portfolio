"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type ParallaxImageCardProps = {
  label: string;
  src?: string;
  alt?: string;
  fit?: "cover" | "contain";
};

export default function ParallaxImageCard({
  label,
  src,
  alt,
  fit = "cover",
}: ParallaxImageCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  const isContain = fit === "contain";

  return (
    <div
      ref={ref}
      className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5"
    >
      {src ? (
        <motion.div
          style={{ y: isContain ? 0 : y }}
          className={isContain ? "absolute inset-0" : "absolute -inset-y-[8%] inset-x-0"}
        >
          <Image
            src={src}
            alt={alt ?? label}
            fill
            className={isContain ? "object-contain" : "object-cover"}
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </motion.div>
      ) : (
        <motion.div style={{ y }} className="flex h-full w-full items-center justify-center">
          <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-white/30">
            {label}
          </span>
        </motion.div>
      )}
    </div>
  );
}