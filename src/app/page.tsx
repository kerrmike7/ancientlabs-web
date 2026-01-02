import Link from "next/link";
import Image from "next/image";
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
  const contactHref = siteConfig.ctas.architecture.href;
  const readinessHref = siteConfig.ctas.readiness.href;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Section className="pb-16 pt-24 md:pb-24 md:pt-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
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
            <a href={readinessHref} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="primary">
                {siteConfig.ctas.readiness.label}
              </Button>
            </a>
            <Link href={contactHref}>
              <Button size="lg" variant="secondary">
                {siteConfig.ctas.architecture.label}
              </Button>
            </Link>
          </div>
          </div>
          
          {/* Hero Image - Optional: Add /public/hero-dashboard.jpg when ready */}
          <div className="relative w-full aspect-[4/3] lg:aspect-square bg-bg-subtle rounded-md border border-border-default flex items-center justify-center">
            {/* Placeholder - remove this div when image is added */}
            <div className="text-center p-8 text-text-tertiary text-sm">
              <p className="mb-2">Hero image placeholder</p>
              <p className="text-xs">Add /public/hero-dashboard.jpg</p>
            </div>
            {/* Uncomment when image is ready:
            <Image
              src="/hero-dashboard.jpg"
              alt="Production data systems and analytics infrastructure"
              fill
              className="object-cover rounded-md opacity-90"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{
                filter: "grayscale(0.3) contrast(0.95) brightness(0.98)",
              }}
            />
            */}
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
        contactHref={contactHref}
      />
    </div>
  );
}
