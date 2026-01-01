import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { CTABand } from "@/components/CTABand";
import { FastTrustBlock } from "@/components/FastTrustBlock";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { ArrowRightLeft, ScrollText, BarChart3 } from "lucide-react";
import { runtimeConfig } from "@/lib/runtimeConfig";

export const metadata: Metadata = {
  title: "Payments Infrastructure",
  description:
    "Financial infrastructure patterns for regulated marketplaces—reconciliation, ledgering, and ops tooling built to audit standards.",
};

export default function PaymentsPage() {
  const { calendlyUrl } = runtimeConfig;
  const trustItems = [
    { label: "Volume", value: "$1B+ processed for regulated marketplaces." },
    { label: "Compliance", value: "PCI-aware architecture patterns & audit logs." },
    { label: "Reliability", value: "Redundancy designed for finance and ops teams." },
  ];

  return (
    <>
      <Section className="pb-12">
        <Container className="max-w-4xl">
          <SectionHeader
            eyebrow="Payments"
            title="Financial infrastructure for scale."
            description="Ledgering, reconciliation, and ops tooling for marketplaces, fintechs, and regulated platforms."
          />
        </Container>
      </Section>

      <FastTrustBlock items={trustItems} />

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Capabilities"
            title="Built for accuracy."
            description="The boring infrastructure that keeps money and data in sync."
            className="mb-12"
          />
          <div className="grid gap-8 md:grid-cols-3">
            <Card
              title="Reconciliation"
              icon={<ArrowRightLeft className="h-6 w-6" />}
            >
              Automated matching of gateway payouts (Stripe/Adyen) to your internal
              databases. Catch penny gaps before they become million-dollar holes.
            </Card>
            <Card
              title="Double-entry ledgering"
              icon={<ScrollText className="h-6 w-6" />}
            >
              Immutable journal design tailored to your products. We implement
              double-entry systems that survive audits.
            </Card>
            <Card
              title="Ops tooling"
              icon={<BarChart3 className="h-6 w-6" />}
            >
              Dashboards for finance teams, not just devs—dispute workflows,
              refunds, and monitoring built on your source of truth.
            </Card>
          </div>
        </Container>
      </Section>
      <CTABand
        headline="Need regulated-grade infrastructure?"
        description="Book an AI Readiness Call or request an Architecture Review focused on your payments stack."
        calendlyUrl={calendlyUrl}
      />
    </>
  );
}
