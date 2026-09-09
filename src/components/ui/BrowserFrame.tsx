import { cn } from "@/lib/utils";

export function BrowserFrame({
  label,
  className,
  children,
}: {
  label?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-white/10 bg-[color:var(--color-bg-soft)] shadow-[0_20px_60px_-24px_rgba(0,0,0,0.7)]",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.02] px-3.5 py-2.5">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
        </div>
        {label && (
          <span className="ml-2 truncate rounded-md bg-white/[0.04] px-2.5 py-1 text-[11px] text-[color:var(--color-text-dim)]">
            {label}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}
