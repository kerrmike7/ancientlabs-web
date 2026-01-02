import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { CTABand } from "@/components/CTABand";
import { SectionHeader } from "@/components/SectionHeader";
import { Badge } from "@/components/Badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/Card";
import { Check, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { siteCopy } from "@/content/siteCopy";

export const metadata: Metadata = {
  title: "AI Data Readiness Services",
  description:
    "Fixed-scope engagements to assess readiness, implement the data foundation, and ship one production AI use case.",
};

export default function ServicesPage() {
  const { services } = siteCopy;
  const proofLinks = [
    {
      title: "AI Readiness Scorecard",
      href: "/scorecard",
      description: "A diagnostic artifact teams can share with leadership.",
    },
    {
      title: "90-Day Use Case Blueprint",
      href: "/blueprint",
      description: "A concrete plan for shipping one KPI-tied workflow.",
    },
  ];
  const personas = [
    {
      title: "Hospitality",
      description: "Unify guest + ops data to unlock service and revenue use cases.",
      href: "/hospitality",
    },
    {
      title: "E-commerce",
      description: "Reconcile storefront, marketing, and ops data before scaling AI.",
      href: "/ecommerce",
    },
    {
      title: "Non-profits",
      description: "Make reporting and impact-oriented AI feasible on lean teams.",
      href: "/nonprofit",
    },
  ];

  return (
    <>
      <Section className="pb-12">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow={services.hero.eyebrow}
              title={services.hero.title}
              description={services.hero.description}
            />
          </Reveal>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <Reveal className="grid gap-8 md:grid-cols-2">
            {services.offers.map((offer) => (
              <Card key={offer.title} className="h-full">
                <CardHeader className="space-y-3">
                  <Badge variant="accent" className="w-fit">
                    {offer.duration}
                  </Badge>
                  <CardTitle className="text-2xl">{offer.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-text-secondary whitespace-pre-line">
                  <p>{offer.description}</p>
                  <ul className="space-y-3">
                    {offer.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent-primary" />
                        <span className="text-sm text-text-primary">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                {offer.price && (
                  <CardFooter>
                    <p className="text-sm font-semibold text-text-secondary">
                      {offer.price}
                    </p>
                  </CardFooter>
                )}
              </Card>
            ))}
          </Reveal>
          <Reveal className="mt-12 grid gap-6 lg:grid-cols-2">
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
          <Reveal className="mt-12 grid gap-6 md:grid-cols-3">
            {personas.map((persona) => (
              <Link
                key={persona.href}
                href={persona.href}
                className="group rounded-2xl border border-border-default/70 bg-bg-default/90 p-5 transition hover:border-border-default"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-label mb-2">Persona</p>
                    <h3 className="text-lg font-semibold text-text-primary">
                      {persona.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-text-secondary transition group-hover:text-accent-primary" />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {persona.description}
                </p>
              </Link>
            ))}
          </Reveal>
        </Container>
      </Section>
      <CTABand
        headline={services.ctaBand.headline}
        description={services.ctaBand.description}
      />
    </>
  );
}
