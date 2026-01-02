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
        <div className="grid gap-8 sm:grid-cols-3 sm:divide-x sm:divide-border-default/70">
          {items.map((item, index) => (
            <div
              key={index}
              className="space-y-2 text-left sm:px-6 sm:text-center"
            >
              <p className="text-label">{item.label}</p>
              <p className="text-lg font-semibold leading-snug text-text-primary">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
