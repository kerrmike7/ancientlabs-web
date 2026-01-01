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
      viewBox="0 0 24 24"
      role="img"
      aria-label={ariaLabel}
      className={cn("block", className)}
      {...props}
    >
      <path
        d="M7 3h10v2c0 1.5-1 3-3 4v7a4 4 0 0 1-8 0V9C8 8 7 6.5 7 5V3z"
        fill="currentColor"
      />
      <path
        d="M12 8c1.5 2 2 3.5 2 5a2 2 0 0 1-4 0c0-1.5.5-3 2-5z"
        fill="currentColor"
        className="text-white dark:text-neutral-900"
      />
    </svg>
  );
}
