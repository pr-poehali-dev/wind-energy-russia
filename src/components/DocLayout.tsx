import Icon from "@/components/ui/icon";
import { sections } from "@/components/DocUI";

interface DocLayoutProps {
  active: string;
  menuOpen: boolean;
  onMenuToggle: () => void;
  scrollTo: (id: string) => void;
  children: React.ReactNode;
}

export default function DocLayout({ active, menuOpen, onMenuToggle, scrollTo, children }: DocLayoutProps) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "hsl(var(--background))" }}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-doc flex items-center justify-between px-6 h-14">
        <div className="flex items-center gap-3">
          <span className="mono text-xs doc-accent font-medium tracking-widest uppercase">Исследование</span>
          <span className="text-xs" style={{ color: "hsl(var(--doc-line))" }}>|</span>
          <span className="text-xs hidden sm:block" style={{ color: "hsl(var(--doc-muted))" }}>Ветроэнергетика в России</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="mono text-xs hidden md:block" style={{ color: "hsl(var(--doc-muted))" }}>2024</span>
          <button className="md:hidden p-1" onClick={onMenuToggle}>
            <Icon name={menuOpen ? "X" : "Menu"} size={18} />
          </button>
        </div>
      </header>

      {/* Mobile nav overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-14 px-6 md:hidden overflow-y-auto">
          <nav className="py-6 space-y-1">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="w-full text-left flex items-center gap-3 py-3 border-b border-doc"
              >
                <span className="mono text-xs" style={{ color: "hsl(var(--doc-muted))" }}>{s.num}</span>
                <span className="text-sm" style={{ color: active === s.id ? "hsl(var(--doc-accent))" : "hsl(var(--doc-dark))" }}>
                  {s.title}
                </span>
              </button>
            ))}
          </nav>
        </div>
      )}

      <div className="flex pt-14">
        {/* Sidebar nav */}
        <aside className="hidden md:flex flex-col fixed left-0 top-14 bottom-0 w-56 border-r border-doc bg-white overflow-y-auto py-8 px-0">
          <nav className="space-y-0.5">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="w-full text-left flex items-center gap-3 px-5 py-2.5 border-l-2 transition-all duration-200"
                style={{
                  borderLeftColor: active === s.id ? "hsl(var(--doc-accent))" : "transparent",
                  backgroundColor: active === s.id ? "hsl(var(--doc-accent-light))" : "transparent",
                }}
              >
                <span className="mono text-xs w-5 shrink-0" style={{ color: "hsl(var(--doc-muted))" }}>{s.num}</span>
                <span className="text-xs leading-tight" style={{ color: active === s.id ? "hsl(var(--doc-accent))" : "hsl(var(--doc-dark))", fontWeight: active === s.id ? 500 : 400 }}>
                  {s.title}
                </span>
              </button>
            ))}
          </nav>
          <div className="mt-auto px-5 py-6">
            <div className="h-px" style={{ backgroundColor: "hsl(var(--doc-line))" }} />
            <p className="text-xs mt-4" style={{ color: "hsl(var(--doc-muted))" }}>
              Ветровая энергетика<br />в энергосистеме РФ
            </p>
          </div>
        </aside>

        {/* Content */}
        <main className="md:ml-56 flex-1 px-6 md:px-12 py-16 space-y-24" style={{ maxWidth: "calc(100vw)" }}>
          <div style={{ maxWidth: "720px" }}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
