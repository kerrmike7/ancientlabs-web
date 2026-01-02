import type { SVGAttributes } from "react";
import { cn } from "@/lib/utils";

interface LogoProps extends SVGAttributes<SVGSVGElement> {
  "aria-label"?: string;
}

export function Logo({
  className,
  "aria-label": ariaLabel = "Ancient Labs logo",
  style,
  ...props
}: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 64 64"
      role="img"
      aria-label={ariaLabel}
      className={cn("block fill-current", className)}
      style={{
        color: "var(--color-text-primary, #111827)",
        ...style,
      }}
      {...props}
    >
      <rect x="16" y="12" width="6" height="40" rx="1" fill="currentColor" />
      <rect x="29" y="12" width="6" height="40" rx="1" fill="currentColor" />
      <rect x="42" y="12" width="6" height="40" rx="1" fill="currentColor" />
    </svg>
  );
}
