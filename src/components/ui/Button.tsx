import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  icon?: boolean;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  icon = true,
  external,
}: ButtonProps) {
  const isExternal = external ?? (href.startsWith("http") || href.startsWith("mailto:"));

  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-[color:var(--color-blue)] focus-visible:outline-offset-4 whitespace-nowrap";

  const sizes = {
    md: "px-5 py-2.5 text-[14px]",
    lg: "px-7 py-3.5 text-[15px]",
  };

  const variants = {
    primary:
      "text-white bg-[linear-gradient(120deg,#4F7CFF,#7C5CFF)] shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset,0_8px_24px_-8px_rgba(79,124,255,0.55)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.14)_inset,0_10px_32px_-6px_rgba(124,92,255,0.65)] hover:-translate-y-0.5",
    secondary:
      "text-[color:var(--color-text)] glass hover:border-white/20 hover:-translate-y-0.5",
    ghost:
      "text-[color:var(--color-text-muted)] hover:text-white",
  };

  const content = (
    <>
      {children}
      {icon && (
        <ArrowRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
          strokeWidth={2}
        />
      )}
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={cn(base, sizes[size], variants[variant], className)}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(base, sizes[size], variants[variant], className)}>
      {content}
    </Link>
  );
}
