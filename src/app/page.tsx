import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/siteConfig";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { FastTrustBlock } from "@/components/FastTrustBlock";
import { CTABand } from "@/components/CTABand";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/Card";
import { Reveal } from "@/components/Reveal";
import {
  Database,
  CreditCard,
  LayoutTemplate,
  ArrowUpRight,
} from "lucide-react";
import { Badge } from "@/components/Badge";
import { SectionHeader } from "@/components/SectionHeader";
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
  const proofLinks = [
    {
      title: "AI Readiness Scorecard",
      href: "/scorecard",
      description: "A tangible benchmark that shows if your data is ready for AI.",
    },
    {
      title: "90-Day Use Case Blueprint",
      href: "/blueprint",
      description: "A deliverable that sequences discovery, data build, and launch.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Section className="pb-16 pt-24 md:pb-24 md:pt-32">
        <Reveal className="max-w-3xl space-y-8">
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
          <h1 className="text-display text-text-primary text-balance">
            {home.hero.headline}
          </h1>
          <div className="space-y-4 text-lg leading-relaxed text-text-secondary">
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
              <Button size="lg" variant="default">
                {siteConfig.ctas.readiness.label}
              </Button>
            </a>
            <Link href={contactHref}>
              <Button size="lg" variant="secondary">
                {siteConfig.ctas.architecture.label}
              </Button>
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* Fast Trust Block */}
      <Reveal>
        <FastTrustBlock items={home.trust.items} />
      </Reveal>

      {/* Value Prop Section */}
      <Section>
        <SectionHeader
          eyebrow={home.valueProp.eyebrow}
          title={home.valueProp.title}
          description={home.valueProp.description}
        />
        <Reveal className="mt-12 grid gap-8 md:grid-cols-3">
          {[Database, CreditCard, LayoutTemplate].map((Icon, index) => (
            <Card key={home.valueProp.cards[index].title}>
              <CardHeader className="flex flex-col gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent-subtle text-accent-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <CardTitle>{home.valueProp.cards[index].title}</CardTitle>
              </CardHeader>
              <CardContent>{home.valueProp.cards[index].copy}</CardContent>
            </Card>
          ))}
        </Reveal>
        <Reveal className="mt-10 grid gap-6 lg:grid-cols-2">
          {proofLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-2xl border border-border-default/80 bg-bg-default/90 p-6 shadow-sm transition-colors hover:border-border-default"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-label mb-2">Proof Object</p>
                  <h3 className="text-xl font-semibold text-text-primary">
                    {link.title}
                  </h3>
                </div>
                <span className="text-text-secondary transition group-hover:text-accent-primary">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {link.description}
              </p>
            </Link>
          ))}
        </Reveal>
      </Section>

      {/* CTA Band */}
      <CTABand
        headline={home.ctaBand.headline}
        contactHref={contactHref}
      />
    </div>
  );
}
