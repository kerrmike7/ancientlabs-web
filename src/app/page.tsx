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
import { siteCopy } from "@/content/siteCopy";

export const metadata: Metadata = {
  title: "Mid-Market Data & AI Studio",
  description:
    "Modern data and AI infrastructure for mid-market operators—stack-agnostic, payments-proven, and shipped in focused sprints.",
};

export default function Home() {
  const { calendlyUrl } = runtimeConfig;
  const { home } = siteCopy;

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
            <Badge>{home.hero.badge}</Badge>
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-text-primary sm:text-6xl">
            {home.hero.headline}
          </h1>
          <div className="space-y-3 text-xl text-text-secondary">
            {home.hero.subheadline.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
          <ul className="space-y-3">
            {home.hero.bullets.map((item) => (
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
      <FastTrustBlock items={home.trust.items} />

      {/* Value Prop Section */}
      <Section>
        <SectionHeader
          eyebrow={home.valueProp.eyebrow}
          title={home.valueProp.title}
          description={home.valueProp.description}
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <Card title={home.valueProp.cards[0].title} icon={<Database className="h-6 w-6" />}>
            {home.valueProp.cards[0].copy}
          </Card>
          <Card
            title={home.valueProp.cards[1].title}
            icon={<CreditCard className="h-6 w-6" />}
          >
            {home.valueProp.cards[1].copy}
          </Card>
          <Card
            title={home.valueProp.cards[2].title}
            icon={<LayoutTemplate className="h-6 w-6" />}
          >
            {home.valueProp.cards[2].copy}
          </Card>
        </div>
      </Section>

      {/* Anti-Positioning Section */}
      <Section className="bg-bg-subtle">
        <SectionHeader
          eyebrow={home.notAFit.eyebrow}
          title={home.notAFit.title}
          description={home.notAFit.description}
        />
        <div className="mt-12 space-y-6">
          {home.notAFit.items.map((item) => (
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
        headline={home.ctaBand.headline}
        calendlyUrl={calendlyUrl}
      />
    </div>
  );
}
