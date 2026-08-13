"use client";

import { useMemo, useState } from "react";
import type { Subject } from "@/lib/data/education";

type SubjectListProps = {
  subjects: Subject[];
  viewLabel: string;
  hideLabel: string;
  searchPlaceholder: string;
  noResultsLabel: string;
};

export default function SubjectList({
  subjects,
  viewLabel,
  hideLabel,
  searchPlaceholder,
  noResultsLabel,
}: SubjectListProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return subjects;
    const q = query.toLowerCase();
    return subjects.filter((s) => s.name.toLowerCase().includes(q));
  }, [subjects, query]);

  return (
    <div className="mt-4">
      <button
        onClick={() => setOpen((v) => !v)}
        className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.14em] text-white/50 underline decoration-white/20 underline-offset-4 transition-colors duration-300 hover:text-white/80"
      >
        {open ? hideLabel : viewLabel} ({subjects.length})
      </button>

      {open && (
        <div className="mt-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={searchPlaceholder}
            className="w-full max-w-xs rounded-full border border-white/15 bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/30 outline-none transition-colors duration-300 focus:border-white/40"
          />

          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
            {filtered.length === 0 ? (
              <p className="text-sm text-white/40">{noResultsLabel}</p>
            ) : (
              filtered.map((subject) => (
                <span key={subject.name} className="text-sm text-white/70">
                  {subject.name}
                </span>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}