import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { CTABand } from "@/components/CTABand";
import { SectionHeader } from "@/components/SectionHeader";
import { Badge } from "@/components/Badge";
import { Card } from "@/components/Card";
import { Check, XCircle } from "lucide-react";
import { runtimeConfig } from "@/lib/runtimeConfig";

export const metadata: Metadata = {
  title: "Services & Engagement Models",
  description:
    "Two fixed-scope sprints: the Foundation Sprint for messy data, and the Architecture Review for rapid validation.",
};

export default function ServicesPage() {
  const { calendlyUrl } = runtimeConfig;
  const offers = [
    {
      duration: "2 Weeks",
      title: "The Foundation Sprint",
      description:
        "For messy data environments that need a reset before layering AI.",
      bullets: [
        "Comprehensive data audit & schema cleanup",
        "Initial ETL/ELT pipeline deployment",
        "Documentation for your engineering team",
      ],
    },
    {
      duration: "1 Week",
      title: "Architecture Review",
      description:
        "Validation before big spend—pressure-test your stack and roadmap.",
      bullets: [
        "Stack selection + buy vs. build memo",
        "Security & compliance assessment",
        "Executive-ready roadmap presentation",
      ],
    },
  ];

  const notAFit = [
    "Teams seeking long-term staff augmentation or maintenance.",
    "Pre-seed startups without validated product/data volume.",
    "Marketing-led \"AI buzz\" projects with no infra outcomes.",
  ];

  return (
    <>
      <Section className="pb-12">
        <Container>
          <SectionHeader
            eyebrow="Services"
            title="Engagement models built for speed."
            description="Fixed-scope sprints with tangible deliverables. No open-ended consulting."
          />
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {offers.map((offer) => (
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
            eyebrow="Positioning"
            title="Who is this not for?"
            description="Clarity about fit keeps engagements tight."
            className="mb-12"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {notAFit.map((item) => (
              <div key={item} className="flex gap-4">
                <XCircle className="h-6 w-6 text-text-tertiary" />
                <p className="text-text-secondary">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <CTABand
        headline="Ready to scope your sprint?"
        description="Start with an AI Readiness Call or jump straight into the Architecture Review."
        calendlyUrl={calendlyUrl}
      />
    </>
  );
}
