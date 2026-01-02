import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { CTABand } from "@/components/CTABand";
import { FastTrustBlock } from "@/components/FastTrustBlock";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/Card";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { ArrowRightLeft, ScrollText, BarChart3 } from "lucide-react";
import { siteCopy } from "@/content/siteCopy";

export const metadata: Metadata = {
  title: "Payments Infrastructure",
  description:
    "Financial infrastructure patterns for regulated marketplaces—reconciliation, ledgering, and ops tooling built to audit standards.",
};

export default function PaymentsPage() {
  const { payments } = siteCopy;

  return (
    <>
      <Section className="pb-12">
        <Container className="max-w-4xl">
          <Reveal>
            <SectionHeader
              eyebrow={payments.hero.eyebrow}
              title={payments.hero.title}
              description={payments.hero.description}
            />
          </Reveal>
        </Container>
      </Section>

      <FastTrustBlock items={payments.trust.items} />

      <Section>
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow={payments.capabilities.eyebrow}
              title={payments.capabilities.title}
              description={payments.capabilities.description}
              className="mb-12"
            />
          </Reveal>
          <Reveal className="grid gap-8 md:grid-cols-3">
            {[
              { icon: ArrowRightLeft, copy: payments.capabilities.cards[0] },
              { icon: ScrollText, copy: payments.capabilities.cards[1] },
              { icon: BarChart3, copy: payments.capabilities.cards[2] },
            ].map(({ icon: Icon, copy }) => (
              <Card key={copy.title}>
                <CardHeader className="flex flex-col gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent-subtle text-accent-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <CardTitle>{copy.title}</CardTitle>
                </CardHeader>
                <CardContent>{copy.copy}</CardContent>
              </Card>
            ))}
          </Reveal>
        </Container>
      </Section>
      <CTABand
        headline={payments.ctaBand.headline}
        description={payments.ctaBand.description}
      />
    </>
  );
}
