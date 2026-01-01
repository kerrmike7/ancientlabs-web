import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/siteConfig";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { FastTrustBlock } from "@/components/FastTrustBlock";
import { CTABand } from "@/components/CTABand";
import { Card } from "@/components/Card";
import {
  Database,
  CreditCard,
  LayoutTemplate,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/Badge";
import { SectionHeader } from "@/components/SectionHeader";
import { runtimeConfig } from "@/lib/runtimeConfig";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Mid-Market Data & AI Studio",
  description:
    "Modern data and AI infrastructure for mid-market operators—stack-agnostic, payments-proven, and shipped in focused sprints.",
};

export default function Home() {
  const { calendlyUrl } = runtimeConfig;
  const trustItems = [
    { label: "Background", value: "Engineering leadership from high-scale fintechs." },
    { label: "Proof", value: "$1B+ in payments volume processed." },
    { label: "Engagements", value: "2-week sprints. Systems, not slides." },
  ];

  const heroBullets = [
    "Stack-agnostic data systems that preserve optionality.",
    "Payments-grade reliability across reconciliation and ledgers.",
    "Code shipped to your repo in 2-week sprints.",
  ];

  const notAFit = [
    {
      title: "A creative agency for chatbots.",
      copy:
        "We don't build gimmicks. We ship the data plumbing that makes AI reliable.",
    },
    {
      title: "A single-vendor implementation shop.",
      copy:
        "No Palantir-only reselling here. We pick the right boring tech for your scale.",
    },
    {
      title: "Staff augmentation for maintenance tickets.",
      copy:
        "You get accountable sprints with defined outcomes, not open-ended hourly billing.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Section className="pb-16 pt-24 md:pb-24 md:pt-32">
        <div className="max-w-3xl space-y-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Logo
                className="h-10 w-10 text-text-primary dark:text-white"
                aria-hidden="true"
              />
              <span className="text-lg font-medium tracking-wide text-text-secondary">
                {siteConfig.name}
              </span>
            </div>
            <Badge>Mid-Market Data & AI Studio</Badge>
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-text-primary sm:text-6xl">
            AI-Ready Data Foundations for the Mid-Market.
          </h1>
          <div className="space-y-3 text-xl text-text-secondary">
            <p>
              We build stack-agnostic data systems that preserve optionality
              and avoid vendor lock-in—especially when data and money move
              together.
            </p>
            <p>No chatbots, no generic consulting—just shipped infrastructure.</p>
          </div>
          <ul className="space-y-3">
            {heroBullets.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base text-text-secondary">
                <span className="mt-2 h-2 w-2 rounded-full bg-accent-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4 sm:flex-row">
            {calendlyUrl ? (
              <Link href={calendlyUrl}>
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
        </div>
      </Section>

      {/* Fast Trust Block */}
      <FastTrustBlock items={trustItems} />

      {/* Value Prop Section */}
      <Section>
        <SectionHeader
          eyebrow="What we do"
          title="Systems, not advice."
          description="Clear scope, shared repos, and infrastructure that your team can scale."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <Card title="AI Foundations" icon={<Database className="h-6 w-6" />}>
            Clean data pipelines ready for LLM context windows. Structured data
            models that keep you vendor-agnostic.
          </Card>
          <Card
            title="Financial Infrastructure"
            icon={<CreditCard className="h-6 w-6" />}
          >
            Reconciliation and ledgering for complex flows. Automated matching of
            payouts to your internal source of truth.
          </Card>
          <Card
            title="Strategic Optionality"
            icon={<LayoutTemplate className="h-6 w-6" />}
          >
            Own your data so you can switch models or vendors anytime. No black
            boxes, no lock-in.
          </Card>
        </div>
      </Section>

      {/* Anti-Positioning Section */}
      <Section className="bg-bg-subtle">
        <SectionHeader
          eyebrow="Positioning"
          title="Who we are not."
          description="Saying no keeps engagements tight and outcomes honest."
        />
        <div className="mt-12 space-y-6">
          {notAFit.map((item) => (
            <div key={item.title} className="flex gap-4">
              <XCircle className="h-6 w-6 shrink-0 text-text-tertiary" />
              <div>
                <h4 className="font-semibold text-text-primary">{item.title}</h4>
                <p className="text-text-secondary">{item.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Band */}
      <CTABand
        headline="Stop guessing. Start building."
        calendlyUrl={calendlyUrl}
      />
    </div>
  );
}
