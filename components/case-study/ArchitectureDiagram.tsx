import GeometricShape from "@/components/motion/GeometricShape";

type ArchitectureDiagramProps = {
  nodes: string[];
};

export default function ArchitectureDiagram({ nodes }: ArchitectureDiagramProps) {
  return (
    <div className="flex flex-col items-center gap-3 py-4">
      {nodes.map((node, index) => (
        <div key={node} className="flex flex-col items-center gap-3">
          <div className="w-full min-w-[220px] rounded-xl border border-[var(--line)] px-6 py-4 text-center">
            <span className="font-[family-name:var(--font-mono)] text-sm text-[var(--ink)]">{node}</span>
          </div>
          {index < nodes.length - 1 && <GeometricShape type="triangle" size={14} rotate={180} stroke="var(--muted)" strokeWidth={2} />}
        </div>
      ))}
    </div>
  );
}