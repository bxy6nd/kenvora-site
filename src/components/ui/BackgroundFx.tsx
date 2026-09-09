export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="grid-bg absolute inset-0" />
      <div
        className="absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-40 blur-[110px] animate-glow-pulse"
        style={{
          background:
            "radial-gradient(closest-side, rgba(79,124,255,0.55), rgba(124,92,255,0.25), transparent)",
        }}
      />
      <div
        className="absolute right-[8%] top-[18%] h-[280px] w-[280px] rounded-full opacity-30 blur-[90px]"
        style={{ background: "radial-gradient(closest-side, #7C5CFF, transparent)" }}
      />
      <div className="absolute inset-0 noise-overlay opacity-40" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[color:var(--color-bg)]" />
    </div>
  );
}

export function SectionGlow({ className }: { className?: string }) {
  return (
    <div
      className={
        "pointer-events-none absolute h-[380px] w-[380px] rounded-full opacity-[0.18] blur-[100px] " +
        (className ?? "")
      }
      style={{ background: "radial-gradient(closest-side, #4F7CFF, transparent)" }}
    />
  );
}
