"use client";

import { motion, type MotionValue } from "framer-motion";

type ShapeType = "triangle" | "square" | "circle";

type GeometricShapeProps = {
  type: ShapeType;
  size?: number;
  rotate?: MotionValue<number> | number;
  stroke?: string;
  strokeWidth?: number;
  className?: string;
};

export default function GeometricShape({
  type,
  size = 96,
  rotate = 0,
  stroke = "var(--ink)",
  strokeWidth = 1.4,
  className = "",
}: GeometricShapeProps) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      style={{ rotate }}
      className={className}
    >
      {type === "circle" && (
        <circle cx="50" cy="50" r="42" fill="none" stroke={stroke} strokeWidth={strokeWidth} />
      )}
      {type === "square" && (
        <rect x="10" y="10" width="80" height="80" fill="none" stroke={stroke} strokeWidth={strokeWidth} />
      )}
      {type === "triangle" && (
        <polygon points="50,8 92,88 8,88" fill="none" stroke={stroke} strokeWidth={strokeWidth} />
      )}
    </motion.svg>
  );
}