import { cn } from "@/lib/utils";

interface TimelineStep {
  period: string;
  title: string;
  description: string;
}

interface TimelineProps {
  steps: TimelineStep[];
  className?: string;
}

export function Timeline({ steps, className }: TimelineProps) {
  return (
    <div className={cn("space-y-12", className)}>
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-12 relative">
           {/* Line */}
           {index !== steps.length - 1 && (
            <div className="absolute left-[19px] top-10 bottom-[-48px] w-0.5 bg-border-default md:hidden" />
           )}
           
          <div className="flex items-start gap-4 md:w-1/3 md:justify-end md:text-right shrink-0">
             <div className="md:hidden mt-1.5 relative z-10">
                <div className="h-10 w-10 rounded-full border border-border-default bg-bg-surface flex items-center justify-center text-xs font-medium text-text-secondary">
                    {index + 1}
                </div>
             </div>
             <div>
                <div className="text-sm font-semibold text-accent-primary uppercase tracking-wide mb-1">{step.period}</div>
                <h3 className="text-xl font-bold text-text-primary">{step.title}</h3>
             </div>
          </div>

           {/* Desktop Line/Dot */}
          <div className="hidden md:flex flex-col items-center relative">
              <div className="h-3 w-3 rounded-full bg-accent-primary mt-2 relative z-10" />
              {index !== steps.length - 1 && (
                <div className="w-0.5 bg-border-default absolute top-5 bottom-[-48px]" />
              )}
          </div>

          <div className="md:w-2/3 md:pt-1">
            <p className="text-text-secondary text-lg leading-relaxed">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
