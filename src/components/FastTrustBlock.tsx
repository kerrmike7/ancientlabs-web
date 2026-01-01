import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface TrustItem {
  label: string;
  value: string;
}

interface FastTrustBlockProps {
  items: TrustItem[];
  className?: string;
}

export function FastTrustBlock({ items, className }: FastTrustBlockProps) {
  return (
    <div className={cn("border-y border-border-default bg-bg-subtle py-12", className)}>
      <Container>
        <div className="grid gap-8 sm:grid-cols-3">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col gap-2 border-l-2 border-border-default pl-6 sm:border-l sm:pl-0 sm:first:border-l-0 sm:first:pl-0 sm:text-center sm:block">
              <div className="text-sm font-medium uppercase tracking-wide text-text-secondary">
                {item.label}
              </div>
              <div className="text-lg font-semibold text-text-primary">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
