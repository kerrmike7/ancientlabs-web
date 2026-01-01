import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { CTABand } from "@/components/CTABand";
import { Timeline } from "@/components/Timeline";
import { SectionHeader } from "@/components/SectionHeader";
import { ShieldCheck, Zap, Lock } from "lucide-react";
import { runtimeConfig } from "@/lib/runtimeConfig";
import { siteCopy } from "@/content/siteCopy";

export const metadata: Metadata = {
  title: "Process",
  description:
    "Our four-step engagement: Audit, Strategy, Build, and Handoff—transparent, iterative, and rigorous.",
};

export default function ProcessPage() {
  const { calendlyUrl } = runtimeConfig;
  const { process } = siteCopy;

  return (
    <>
      <Section className="pb-12">
        <Container>
          <SectionHeader
            eyebrow={process.hero.eyebrow}
            title={process.hero.title}
            description={process.hero.description}
          />
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
            <Timeline steps={process.steps} />
        </Container>
      </Section>

      <Section className="bg-bg-subtle">
        <Container>
          <SectionHeader
            eyebrow={process.principles.eyebrow}
            title={process.principles.title}
            description={process.principles.description}
            className="mb-12"
          />
            <div className="grid gap-8 md:grid-cols-3">
                 <div className="flex flex-col gap-3">
                    <ShieldCheck className="h-8 w-8 text-text-primary" />
                    <h4 className="font-bold text-text-primary">{process.principles.items[0].title}</h4>
                    <p className="text-text-secondary">{process.principles.items[0].copy}</p>
                </div>
                 <div className="flex flex-col gap-3">
                    <Zap className="h-8 w-8 text-text-primary" />
                    <h4 className="font-bold text-text-primary">{process.principles.items[1].title}</h4>
                    <p className="text-text-secondary">{process.principles.items[1].copy}</p>
                </div>
                 <div className="flex flex-col gap-3">
                    <Lock className="h-8 w-8 text-text-primary" />
                    <h4 className="font-bold text-text-primary">{process.principles.items[2].title}</h4>
                    <p className="text-text-secondary">{process.principles.items[2].copy}</p>
                </div>
            </div>
        </Container>
      </Section>
      <CTABand calendlyUrl={calendlyUrl} />
    </>
  );
}
