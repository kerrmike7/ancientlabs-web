import Link from "next/link";
import { siteConfig } from "@/siteConfig";
import { Button } from "./Button";
import { Container } from "./Container";
import { Section } from "./Section";

interface CTABandProps {
  eyebrow?: string;
  headline?: string;
  description?: string;
  calendlyUrl?: string;
}

export function CTABand({
  eyebrow,
  headline = "Ready to build your data foundation?",
  description,
  calendlyUrl,
}: CTABandProps) {
  const readinessUrl = calendlyUrl ?? "";

  return (
    <Section className="border-y border-border-default bg-bg-subtle">
      <Container className="text-center">
        <div className="mx-auto max-w-2xl space-y-4">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">
              {eyebrow}
            </p>
          )}
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            {headline}
          </h2>
          {description && (
            <p className="text-base text-text-secondary">{description}</p>
          )}
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {readinessUrl ? (
            <Link href={readinessUrl}>
              <Button size="lg" variant="primary">
                {siteConfig.ctas.readiness.label}
              </Button>
            </Link>
          ) : (
            <Button
              size="lg"
              variant="primary"
              disabled
              title="Calendly not configured"
            >
              {siteConfig.ctas.readiness.label}
            </Button>
          )}
          <Link href={siteConfig.ctas.architecture.href}>
            <Button size="lg" variant="secondary">
              {siteConfig.ctas.architecture.label}
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
