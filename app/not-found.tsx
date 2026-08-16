import Link from "next/link";
import GeometricShape from "@/components/motion/GeometricShape";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--paper)] px-6 text-center">
      <div className="flex items-center gap-6">
        <GeometricShape type="triangle" size={40} rotate={180} />
        <GeometricShape type="square" size={40} rotate={45} />
        <GeometricShape type="circle" size={40} />
      </div>

      <p className="mt-10 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
        404
      </p>

      <h1 className="mt-4 font-[family-name:var(--font-inter)] text-3xl font-medium tracking-[-0.02em] text-[var(--ink)] sm:text-4xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-2 text-sm text-[var(--muted)]">
        Esta página no existe.
      </p>

      <Link
        href="/"
        className="group mt-10 inline-flex items-center gap-3 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.18em] text-[var(--ink)]"
      >
        Back home
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] transition-all duration-500 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white">
          →
        </span>
      </Link>
    </div>
  );
}