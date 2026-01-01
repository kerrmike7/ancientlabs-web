import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section className={cn("py-16 md:py-24", className)} {...props}>
      <Container>{children}</Container>
    </section>
  );
}
