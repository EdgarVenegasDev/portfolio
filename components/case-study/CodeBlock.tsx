type CodeBlockProps = {
  children: string;
};

export default function CodeBlock({ children }: CodeBlockProps) {
  return (
    <pre className="overflow-x-auto rounded-xl border border-[var(--line)] bg-[var(--paper)] p-5 font-[family-name:var(--font-mono)] text-xs leading-6 text-[var(--ink-soft)]">
      <code>{children}</code>
    </pre>
  );
}