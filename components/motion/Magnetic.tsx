"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import type { ReactNode } from "react";

type MagneticProps = {
  children: ReactNode;
  strength?: number;
};

export default function Magnetic({
  children,
  strength = 0.25,
}: MagneticProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 250,
    damping: 18,
  });

  const springY = useSpring(y, {
    stiffness: 250,
    damping: 18,
  });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();

    const relativeX =
      event.clientX - rect.left - rect.width / 2;

    const relativeY =
      event.clientY - rect.top - rect.height / 2;

    x.set(relativeX * strength);
    y.set(relativeY * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}
