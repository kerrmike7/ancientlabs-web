import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { CTABand } from "@/components/CTABand";
import { SectionHeader } from "@/components/SectionHeader";
import Link from "next/link";
import { runtimeConfig } from "@/lib/runtimeConfig";

export const metadata: Metadata = {
  title: "About Ancient Labs",
  description:
    "A senior engineering studio led by Michael Kerr (ex-Stripe/Uber) delivering production-grade data and AI systems.",
};

export default function AboutPage() {
  const { calendlyUrl } = runtimeConfig;
  return (
    <>
      <Section className="pb-12">
        <Container>
          <SectionHeader
            eyebrow="About"
            title="A small studio of senior engineers."
            description="Founded by Michael Kerr (ex-Stripe/Uber) to bridge the gap between enterprise ambition and mid-market realities."
          />
        </Container>
      </Section>

      <Section className="pt-0">
        <Container className="max-w-3xl space-y-8">
          <div className="space-y-6 text-lg leading-relaxed text-text-secondary">
            <p>
              We started Ancient Labs after watching mid-market teams get sold
              &ldquo;AI transformations&rdquo; by agencies that couldn&apos;t ship code—or
              locked into enterprise platforms that were too rigid to adapt.
            </p>
            <p>
              We&apos;re engineers, not consultants. We&apos;ve built payment rails moving
              billions and data systems for public companies. We bring that rigor
              to your infrastructure.
            </p>
            <p>
              Every engagement is hands-on, repo-first, and focused on tangible
              outcomes. No black boxes, no mystery retainers.
            </p>
          </div>

          <div className="border-l-4 border-accent-primary bg-bg-subtle/60 px-6 py-4">
            <blockquote className="text-xl font-medium text-text-primary italic">
              &quot;We believe AI is an infrastructure problem, not a magic trick.&quot;
            </blockquote>
          </div>
        </Container>
      </Section>
       <Section className="bg-bg-subtle">
        <Container>
            <SectionHeader
              eyebrow="Where to next"
              title="See how we work."
              description="Jump straight into the services or payments detail pages."
              className="mb-6"
            />
            <div className="flex gap-4">
                 <Link href="/services" className="text-accent-primary font-medium hover:underline underline-offset-4">
                    View our Services &rarr;
                </Link>
                 <Link href="/payments" className="text-accent-primary font-medium hover:underline underline-offset-4">
                    Explore Payments &rarr;
                </Link>
            </div>
        </Container>
       </Section>

      <CTABand
        headline="Want to work directly with the founding team?"
        description="We run the engagements ourselves—start the conversation via the Readiness Call or Architecture Review."
        calendlyUrl={calendlyUrl}
      />
    </>
  );
}
