import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { CTABand } from "@/components/CTABand";
import { FastTrustBlock } from "@/components/FastTrustBlock";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { ArrowRightLeft, ScrollText, BarChart3 } from "lucide-react";
import { runtimeConfig } from "@/lib/runtimeConfig";
import { siteCopy } from "@/content/siteCopy";

export const metadata: Metadata = {
  title: "Payments Infrastructure",
  description:
    "Financial infrastructure patterns for regulated marketplaces—reconciliation, ledgering, and ops tooling built to audit standards.",
};

export default function PaymentsPage() {
  const { calendlyUrls } = runtimeConfig;
  const { payments } = siteCopy;

  return (
    <>
      <Section className="pb-12">
        <Container className="max-w-4xl">
          <SectionHeader
            eyebrow={payments.hero.eyebrow}
            title={payments.hero.title}
            description={payments.hero.description}
          />
        </Container>
      </Section>

      <FastTrustBlock items={payments.trust.items} />

      <Section>
        <Container>
          <SectionHeader
            eyebrow={payments.capabilities.eyebrow}
            title={payments.capabilities.title}
            description={payments.capabilities.description}
            className="mb-12"
          />
          <div className="grid gap-8 md:grid-cols-3">
            <Card
              title={payments.capabilities.cards[0].title}
              icon={<ArrowRightLeft className="h-6 w-6" />}
            >
              {payments.capabilities.cards[0].copy}
            </Card>
            <Card
              title={payments.capabilities.cards[1].title}
              icon={<ScrollText className="h-6 w-6" />}
            >
              {payments.capabilities.cards[1].copy}
            </Card>
            <Card
              title={payments.capabilities.cards[2].title}
              icon={<BarChart3 className="h-6 w-6" />}
            >
              {payments.capabilities.cards[2].copy}
            </Card>
          </div>
        </Container>
      </Section>
      <CTABand
        headline={payments.ctaBand.headline}
        description={payments.ctaBand.description}
        calendlyLinks={calendlyUrls}
      />
    </>
  );
}
