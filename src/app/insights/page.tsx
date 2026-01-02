import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { CTABand } from "@/components/CTABand";
import { ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { siteCopy } from "@/content/siteCopy";
import { getAllEssays } from "@/lib/essays";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Thinking and writing on data strategy, AI engineering, and the Good Tech Project essays hub.",
};

export default function InsightsPage() {
  const { insights } = siteCopy;
  const essays = getAllEssays();

  return (
    <>
      <Section className="pb-12">
        <Container>
          <SectionHeader
            eyebrow={insights.hero.eyebrow}
            title={insights.hero.title}
            description={insights.hero.description}
          />
        </Container>
      </Section>

      {essays.length > 0 && (
        <Section className="pt-0">
          <Container>
            <div className="space-y-6 max-w-4xl">
              {essays.map((essay) => (
                <Link
                  key={essay.slug}
                  href={`/insights/${essay.slug}`}
                  className="group block rounded-md border border-border-default bg-bg-default p-8 transition-colors hover:border-accent-primary/50 hover:bg-bg-subtle"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-text-primary mb-2 group-hover:text-accent-primary transition-colors">
                        {essay.title}
                      </h2>
                      <p className="text-text-secondary mb-3">{essay.summary}</p>
                      <div className="flex items-center gap-4 text-sm text-text-tertiary">
                        <time dateTime={essay.date}>
                          {new Date(essay.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                        {essay.tags.length > 0 && (
                          <div className="flex gap-2">
                            {essay.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 rounded text-xs bg-bg-subtle text-text-secondary"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <Section className={essays.length > 0 ? "pt-0 pb-24" : "pt-0 pb-24"}>
        <Container>
             <div className="grid gap-6 md:grid-cols-2 max-w-4xl">
                 {insights.links.map((link) => (
                   <a 
                      key={link.href}
                      href={link.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group block rounded-md border border-border-default bg-bg-default p-8 transition-colors hover:border-accent-primary/50 hover:bg-bg-subtle"
                   >
                      <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-semibold uppercase tracking-wider text-text-tertiary">{link.label}</span>
                           <ExternalLink className="h-5 w-5 text-text-tertiary group-hover:text-accent-primary transition-colors" />
                      </div>
                      <h2 className="text-2xl font-bold text-text-primary mb-2 group-hover:text-accent-primary transition-colors">{link.title}</h2>
                      <p className="text-text-secondary">{link.description}</p>
                   </a>
                 ))}
             </div>
        </Container>
      </Section>

      <CTABand
        headline={insights.ctaBand.headline}
        description={insights.ctaBand.description}
      />
    </>
  );
}
