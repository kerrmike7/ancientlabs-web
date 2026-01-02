import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { CTABand } from "@/components/CTABand";
import { Timeline } from "@/components/Timeline";
import { SectionHeader } from "@/components/SectionHeader";
import { ShieldCheck, Zap, Lock } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { siteCopy } from "@/content/siteCopy";

export const metadata: Metadata = {
  title: "Process",
  description:
    "Our four-step engagement: Audit, Strategy, Build, and Handoff—transparent, iterative, and rigorous.",
};

export default function ProcessPage() {
  const { process } = siteCopy;

  return (
    <>
      <Section className="pb-12">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow={process.hero.eyebrow}
              title={process.hero.title}
              description={process.hero.description}
            />
          </Reveal>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <Reveal>
            <Timeline steps={process.steps} />
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-bg-subtle">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow={process.principles.eyebrow}
              title={process.principles.title}
              description={process.principles.description}
              className="mb-12"
            />
            <div className="grid gap-8 md:grid-cols-3">
              {[ShieldCheck, Zap, Lock].map((Icon, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <Icon className="h-8 w-8 text-text-primary" />
                  <h4 className="font-bold text-text-primary">
                    {process.principles.items[index].title}
                  </h4>
                  <p className="text-text-secondary">
                    {process.principles.items[index].copy}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>
      <CTABand />
    </>
  );
}
