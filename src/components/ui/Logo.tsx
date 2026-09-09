import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/kenvora-icon.png"
        srcSet="/brand/kenvora-icon.png 1x, /brand/kenvora-icon@2x.png 2x"
        alt=""
        width={28}
        height={28}
        className="shrink-0 rounded-[7px]"
      />
      <span className="text-[17px] font-semibold tracking-tight text-white">
        Kenvora
      </span>
    </span>
  );
}
