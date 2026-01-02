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
  const { home } = siteCopy;
  const readinessHref = siteConfig.ctas.readiness.href;
  const architectureHref = siteConfig.ctas.architecture.href;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Section className="pb-16 pt-24 md:pb-24 md:pt-32">
        <div className="max-w-3xl space-y-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Logo
                className="h-10 w-10 dark:text-white"
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
            <a
              href={readinessHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="primary">
                {siteConfig.ctas.readiness.label}
              </Button>
            </a>
            <Link href={architectureHref}>
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

      {/* CTA Band */}
      <CTABand
        headline={home.ctaBand.headline}
        contactHref={architectureHref}
      />
    </div>
  );
}
