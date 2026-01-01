import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { CTABand } from "@/components/CTABand";
import { Timeline } from "@/components/Timeline";
import { SectionHeader } from "@/components/SectionHeader";
import { ShieldCheck, Zap, Lock } from "lucide-react";
import { runtimeConfig } from "@/lib/runtimeConfig";

export const metadata: Metadata = {
  title: "Process",
  description:
    "Our four-step engagement: Audit, Strategy, Build, and Handoff—transparent, iterative, and rigorous.",
};

export default function ProcessPage() {
  const { calendlyUrl } = runtimeConfig;
  const steps = [
    {
      period: "Week 0",
      title: "The Audit",
      description: "We sign an NDA, access your VPC and repo, and map the territory. We identify bottlenecks, security risks, and architectural debt before writing a single line of code."
    },
    {
      period: "Day 2",
      title: "The Strategy",
      description: "We propose the stack and schema. No 50-page PDFs—just a clear Notion doc and a diagram explaining what we're building and why."
    },
    {
      period: "Weeks 1-2",
      title: "The Build",
      description: "We deploy code to your environment. We set up the pipelines, the warehouses, and the API endpoints. You see progress in git commits, not status emails."
    },
    {
      period: "Week 3",
      title: "The Handoff",
      description: "We don't just leave. We document everything and run a training session for your team. You own the code, the keys, and the roadmap."
    }
  ];

  return (
    <>
      <Section className="pb-12">
        <Container>
          <SectionHeader
            eyebrow="Process"
            title="How we work."
            description="Transparent, iterative, and rigorous. We treat your infrastructure with the same care we treat our own."
          />
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
            <Timeline steps={steps} />
        </Container>
      </Section>

      <Section className="bg-bg-subtle">
        <Container>
          <SectionHeader
            eyebrow="Our principles"
            title="How we make decisions."
            description="Guidelines we bring into every engagement."
            className="mb-12"
          />
            <div className="grid gap-8 md:grid-cols-3">
                 <div className="flex flex-col gap-3">
                    <ShieldCheck className="h-8 w-8 text-text-primary" />
                    <h4 className="font-bold text-text-primary">Ownership</h4>
                    <p className="text-text-secondary">You own the IP and the code. No proprietary black boxes.</p>
                </div>
                 <div className="flex flex-col gap-3">
                    <Zap className="h-8 w-8 text-text-primary" />
                    <h4 className="font-bold text-text-primary">Simplicity</h4>
                    <p className="text-text-secondary">Boring tech is better tech. We choose standard, proven tools over hype.</p>
                </div>
                 <div className="flex flex-col gap-3">
                    <Lock className="h-8 w-8 text-text-primary" />
                    <h4 className="font-bold text-text-primary">Security First</h4>
                    <p className="text-text-secondary">We assume breach. Least-privilege access and encryption are defaults, not features.</p>
                </div>
            </div>
        </Container>
      </Section>
      <CTABand calendlyUrl={calendlyUrl} />
    </>
  );
}
