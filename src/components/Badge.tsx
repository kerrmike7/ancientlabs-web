import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "neutral" | "accent";
}

export function Badge({
  children,
  className,
  variant = "neutral",
  ...props
}: BadgeProps) {
  const variants = {
    neutral:
      "border border-border-default bg-bg-subtle text-text-secondary",
    accent:
      "border border-accent-subtle/80 bg-accent-subtle text-accent-primary",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
