import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { CTABand } from "@/components/CTABand";
import { SectionHeader } from "@/components/SectionHeader";
import { Badge } from "@/components/Badge";
import { Card } from "@/components/Card";
import { Check, XCircle } from "lucide-react";
import { runtimeConfig } from "@/lib/runtimeConfig";
import { siteCopy } from "@/content/siteCopy";

export const metadata: Metadata = {
  title: "Services & Engagement Models",
  description:
    "Two fixed-scope sprints: the Foundation Sprint for messy data, and the Architecture Review for rapid validation.",
};

export default function ServicesPage() {
  const { calendlyUrls } = runtimeConfig;
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
                <p className="text-text-secondary mb-6">{offer.description}</p>
                <ul className="space-y-3">
                  {offer.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent-primary" />
                      <span className="text-sm text-text-primary">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-bg-subtle">
        <Container>
          <SectionHeader
            eyebrow={services.notAFit.eyebrow}
            title={services.notAFit.title}
            description={services.notAFit.description}
            className="mb-12"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {services.notAFit.items.map((item) => (
              <div key={item} className="flex gap-4">
                <XCircle className="h-6 w-6 text-text-tertiary" />
                <p className="text-text-secondary">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <CTABand
        headline={services.ctaBand.headline}
        description={services.ctaBand.description}
        calendlyLinks={calendlyUrls}
      />
    </>
  );
}
