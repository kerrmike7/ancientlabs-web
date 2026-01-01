import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export function Card({ title, icon, children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-md border border-border-default bg-bg-default p-6 transition-colors hover:border-border-default/80",
        className
      )}
      {...props}
    >
      {icon && <div className="text-text-primary mb-2">{icon}</div>}
      <h3 className="text-xl font-semibold text-text-primary">{title}</h3>
      <div className="text-text-secondary text-base leading-relaxed">
        {children}
      </div>
    </div>
  );
}
