import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { CTABand } from "@/components/CTABand";
import { SectionHeader } from "@/components/SectionHeader";
import { Badge } from "@/components/Badge";
import { Card } from "@/components/Card";
import { Check } from "lucide-react";
import { runtimeConfig } from "@/lib/runtimeConfig";
import { siteCopy } from "@/content/siteCopy";

export const metadata: Metadata = {
  title: "AI Data Readiness Services",
  description:
    "Fixed-scope engagements to assess readiness, implement the data foundation, and ship one production AI use case.",
};

export default function ServicesPage() {
  const { calendlyUrl } = runtimeConfig;
  const { services } = siteCopy;

  return (
    <>
      <Section className="pb-12">
        <Container>
          <SectionHeader
            eyebrow={services.hero.eyebrow}
            title={services.hero.title}
            description={services.hero.description}
          />
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {services.offers.map((offer) => (
              <Card
                key={offer.title}
                title={offer.title}
                icon={<Badge variant="accent">{offer.duration}</Badge>}
                className="h-full border-border-default/80 p-8"
              >
                <div className="space-y-4 text-text-secondary mb-6 whitespace-pre-line">
                  <p>{offer.description}</p>
                </div>
                <ul className="space-y-3">
                  {offer.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent-primary" />
                      <span className="text-sm text-text-primary">{bullet}</span>
                    </li>
                  ))}
                </ul>
                {offer.price && (
                  <p className="mt-6 text-sm font-semibold text-text-secondary">
                    {offer.price}
                  </p>
                )}
              </Card>
            ))}
          </div>
        </Container>
      </Section>
      <CTABand
        headline={services.ctaBand.headline}
        description={services.ctaBand.description}
        calendlyUrl={calendlyUrl}
      />
    </>
  );
}
