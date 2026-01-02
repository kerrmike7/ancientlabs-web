import { cn } from "@/lib/utils";

interface LogoProps extends React.SVGAttributes<SVGSVGElement> {
  "aria-label"?: string;
}

export function Logo({
  className,
  "aria-label": ariaLabel = "Ancient Labs logo",
  ...props
}: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      role="img"
      aria-label={ariaLabel}
      className={cn("block", className)}
      {...props}
    >
      <rect x="4" y="6" width="4" height="20" rx="1" fill="currentColor" />
      <rect x="14" y="6" width="4" height="20" rx="1" fill="currentColor" />
      <rect x="24" y="6" width="4" height="20" rx="1" fill="currentColor" />
      <rect x="4" y="4" width="24" height="2" rx="1" fill="currentColor" />
    </svg>
  );
}
