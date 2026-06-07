import Icon from "@/components/ui/icon";

export const sections = [
  { id: "intro", num: "01", title: "Введение" },
  { id: "system", num: "02", title: "Энергосистема России" },
  { id: "wind", num: "03", title: "Ветровая энергия" },
  { id: "russia", num: "04", title: "ВЭС в России" },
  { id: "problems", num: "05", title: "Почему невыгодно" },
  { id: "comparison", num: "06", title: "Сравнение со странами" },
  { id: "conclusions", num: "07", title: "Выводы" },
  { id: "sources", num: "08", title: "Источники" },
];

export function StatCard({ value, label, unit }: { value: string; label: string; unit?: string }) {
  return (
    <div className="border border-doc bg-white p-5">
      <div className="flex items-baseline gap-1">
        <span className="text-3xl font-semibold doc-accent mono">{value}</span>
        {unit && <span className="text-sm doc-muted mono">{unit}</span>}
      </div>
      <p className="mt-1 text-sm" style={{ color: "hsl(var(--doc-muted))" }}>{label}</p>
    </div>
  );
}

export function SectionTitle({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-start gap-4 mb-8 pb-6" style={{ borderBottom: "1px solid hsl(var(--doc-line))" }}>
      <span className="mono text-xs pt-1.5" style={{ color: "hsl(var(--doc-muted))" }}>{num}</span>
      <h2 className="text-2xl font-semibold" style={{ color: "hsl(var(--doc-dark))", letterSpacing: "-0.03em" }}>{title}</h2>
    </div>
  );
}

export function BarChart({ data }: { data: { label: string; value: number; color?: string }[] }) {
  const max = Math.max(...data.map(d => d.value));
  return (
    <div className="space-y-3 mt-4">
      {data.map((d, i) => (
        <div key={i} className="flex items-center gap-3">
          <span className="text-xs w-28 shrink-0" style={{ color: "hsl(var(--doc-muted))" }}>{d.label}</span>
          <div className="flex-1 h-6 bg-doc-surface rounded-sm overflow-hidden">
            <div
              className="h-full rounded-sm flex items-center px-2"
              style={{
                width: `${(d.value / max) * 100}%`,
                backgroundColor: d.color || "hsl(var(--doc-accent))",
                minWidth: "2.5rem",
                transition: "width 1s cubic-bezier(0.4,0,0.2,1)"
              }}
            >
              <span className="text-xs text-white mono font-medium">{d.value}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function CompareBar({ country, value, total, color }: { country: string; value: number; total: number; color: string }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between items-baseline mb-1.5">
        <span className="text-sm font-medium" style={{ color: "hsl(var(--doc-dark))" }}>{country}</span>
        <span className="mono text-xs" style={{ color: "hsl(var(--doc-muted))" }}>{value} ГВт</span>
      </div>
      <div className="h-3 rounded-sm overflow-hidden" style={{ backgroundColor: "hsl(var(--doc-line))" }}>
        <div
          className="h-full rounded-sm"
          style={{ width: `${(value / total) * 100}%`, backgroundColor: color, transition: "width 1s" }}
        />
      </div>
    </div>
  );
}

export function WindTurbineScheme() {
  return (
    <div className="bg-doc-surface border border-doc p-6 text-center">
      <svg width="180" height="200" viewBox="0 0 180 200" className="mx-auto">
        <line x1="90" y1="40" x2="90" y2="185" stroke="hsl(220, 25%, 15%)" strokeWidth="4" strokeLinecap="round" />
        <circle cx="90" cy="40" r="5" fill="hsl(213, 90%, 42%)" />
        <line x1="90" y1="40" x2="90" y2="5" stroke="hsl(220, 10%, 55%)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="90" y1="40" x2="57" y2="80" stroke="hsl(220, 10%, 55%)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="90" y1="40" x2="123" y2="80" stroke="hsl(220, 10%, 55%)" strokeWidth="2.5" strokeLinecap="round" />
        <ellipse cx="90" cy="185" rx="30" ry="6" fill="hsl(220, 15%, 90%)" />
        <text x="90" y="7" textAnchor="middle" fontSize="9" fill="hsl(220, 10%, 55%)" fontFamily="IBM Plex Mono">лопасть</text>
        <text x="90" y="105" textAnchor="middle" fontSize="9" fill="hsl(220, 10%, 55%)" fontFamily="IBM Plex Mono">мачта</text>
        <text x="90" y="198" textAnchor="middle" fontSize="9" fill="hsl(220, 10%, 55%)" fontFamily="IBM Plex Mono">фундамент</text>
      </svg>
      <p className="text-xs mt-3" style={{ color: "hsl(var(--doc-muted))" }}>Схема ветровой турбины</p>
    </div>
  );
}

export function RussiaMap() {
  const regions = [
    { name: "Ямал", mw: 72, left: "52%", top: "18%" },
    { name: "Мурманск", mw: 202, left: "26%", top: "10%" },
    { name: "Сахалин", mw: 5, left: "84%", top: "30%" },
    { name: "Кубань", mw: 150, left: "30%", top: "62%" },
    { name: "Ставрополь", mw: 210, left: "35%", top: "55%" },
  ];

  return (
    <div className="bg-doc-surface border border-doc p-6 relative" style={{ minHeight: "240px" }}>
      <p className="text-xs mono mb-4" style={{ color: "hsl(var(--doc-muted))" }}>Ключевые регионы ВЭС (размер = мощность, МВт)</p>
      <div className="relative" style={{ height: "180px" }}>
        {regions.map((r, i) => {
          const size = Math.max(30, r.mw / 6);
          return (
            <div
              key={i}
              className="absolute flex flex-col items-center"
              style={{ left: r.left, top: r.top, transform: "translateX(-50%)" }}
            >
              <div
                className="rounded-full flex items-center justify-center text-white mono font-medium"
                style={{
                  width: size + "px",
                  height: size + "px",
                  fontSize: "9px",
                  backgroundColor: "hsl(213, 90%, 42%)",
                  opacity: 0.7 + i * 0.06,
                }}
              >
                {r.mw}
              </div>
              <span className="mt-1 whitespace-nowrap" style={{ color: "hsl(var(--doc-dark))", fontSize: "9px" }}>{r.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
