import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { CTABand } from "@/components/CTABand";
import { siteConfig } from "@/siteConfig";
import { ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { runtimeConfig } from "@/lib/runtimeConfig";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Thinking and writing on data strategy, AI engineering, and the Good Tech Project essays hub.",
};

export default function InsightsPage() {
  const { calendlyUrl } = runtimeConfig;
  return (
    <>
      <Section className="pb-12">
        <Container>
          <SectionHeader
            eyebrow="Insights"
            title="Thinking & writing."
            description="Essays on data strategy, AI engineering, and building durable infrastructure."
          />
        </Container>
      </Section>

      <Section className="pt-0 pb-24">
        <Container>
             <div className="grid gap-6 md:grid-cols-2 max-w-4xl">
                 <a 
                    href="https://ancientlabs.substack.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group block rounded-md border border-border-default bg-bg-default p-8 transition-colors hover:border-accent-primary/50 hover:bg-bg-subtle"
                 >
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-semibold uppercase tracking-wider text-text-tertiary">Substack</span>
                         <ExternalLink className="h-5 w-5 text-text-tertiary group-hover:text-accent-primary transition-colors" />
                    </div>
                    <h2 className="text-2xl font-bold text-text-primary mb-2 group-hover:text-accent-primary transition-colors">Ancient Labs on Substack</h2>
                    <p className="text-text-secondary">Our primary channel for deep dives into data architecture and engineering culture.</p>
                 </a>

                 <a 
                    href={`https://${siteConfig.domains.essays}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                     className="group block rounded-md border border-border-default bg-bg-default p-8 transition-colors hover:border-accent-primary/50 hover:bg-bg-subtle"
                 >
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-semibold uppercase tracking-wider text-text-tertiary">Essay Hub</span>
                         <ExternalLink className="h-5 w-5 text-text-tertiary group-hover:text-accent-primary transition-colors" />
                    </div>
                    <h2 className="text-2xl font-bold text-text-primary mb-2 group-hover:text-accent-primary transition-colors">The Good Tech Project</h2>
                     <p className="text-text-secondary">A collection of broader essays on technology, society, and building good software.</p>
                 </a>
             </div>
        </Container>
      </Section>

      <CTABand
        headline="Want infrastructure notes in your inbox?"
        description="Grab a call or request an Architecture Review and we’ll send the latest thinking afterward."
        calendlyUrl={calendlyUrl}
      />
    </>
  );
}
