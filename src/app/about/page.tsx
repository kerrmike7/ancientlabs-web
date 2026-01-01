import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { CTABand } from "@/components/CTABand";
import { SectionHeader } from "@/components/SectionHeader";
import Link from "next/link";
import { runtimeConfig } from "@/lib/runtimeConfig";
import { siteCopy } from "@/content/siteCopy";

export const metadata: Metadata = {
  title: "About Ancient Labs",
  description:
    "A senior engineering studio led by Michael Kerr (ex-Stripe/Uber) delivering production-grade data and AI systems.",
};

export default function AboutPage() {
  const { calendlyUrl } = runtimeConfig;
  const { about } = siteCopy;
  return (
    <>
      <Section className="pb-12">
        <Container>
          <SectionHeader
            eyebrow={about.hero.eyebrow}
            title={about.hero.title}
            description={about.hero.description}
          />
        </Container>
      </Section>

      <Section className="pt-0">
        <Container className="max-w-3xl space-y-8">
          <div className="space-y-6 text-lg leading-relaxed text-text-secondary">
            {about.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="border-l-4 border-accent-primary bg-bg-subtle/60 px-6 py-4">
            <blockquote className="text-xl font-medium text-text-primary italic">
              &quot;{about.quote}&quot;
            </blockquote>
          </div>
        </Container>
      </Section>
       <Section className="bg-bg-subtle">
        <Container>
            <SectionHeader
              eyebrow={about.nextSteps.eyebrow}
              title={about.nextSteps.title}
              description={about.nextSteps.description}
              className="mb-6"
            />
            <div className="flex gap-4">
                 <Link href={about.nextSteps.links[0].href} className="text-accent-primary font-medium hover:underline underline-offset-4">
                    {about.nextSteps.links[0].label} &rarr;
                </Link>
                 <Link href={about.nextSteps.links[1].href} className="text-accent-primary font-medium hover:underline underline-offset-4">
                    {about.nextSteps.links[1].label} &rarr;
                </Link>
            </div>
        </Container>
       </Section>

      <CTABand
        headline={about.ctaBand.headline}
        description={about.ctaBand.description}
        calendlyUrl={calendlyUrl}
      />
    </>
  );
}
