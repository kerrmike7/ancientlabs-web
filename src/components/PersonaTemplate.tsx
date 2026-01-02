import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import Link from "next/link";
import { CALENDLY_URL } from "@/siteConfig";

export interface PersonaFrontmatter {
  title: string;
  slug: string;
  description: string;
  ctaPrimaryLabel: string;
  ctaPrimaryHref: string;
  ctaSecondaryLabel: string;
  ctaSecondaryHref: string;
}

interface PersonaTemplateProps {
  frontmatter: PersonaFrontmatter;
  children: React.ReactNode;
}

export function PersonaTemplate({
  frontmatter,
  children,
}: PersonaTemplateProps) {
  const primaryHref =
    frontmatter.ctaPrimaryHref === "CALENDLY"
      ? CALENDLY_URL
      : frontmatter.ctaPrimaryHref;

  return (
    <div className="flex flex-col">
      <Section className="pb-10">
        <Reveal>
          <SectionHeader
            align="center"
            eyebrow="Persona"
            title={frontmatter.title}
            description={frontmatter.description}
          />
        </Reveal>
      </Section>
      <Section className="pt-0">
        <Reveal>
          <div className="persona-content mx-auto max-w-3xl space-y-8 text-lg leading-relaxed text-text-secondary">
            {children}
          </div>
        </Reveal>
      </Section>
      <Section className="pt-0">
        <Reveal className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-border-default bg-bg-default/85 p-8 shadow-sm md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-label mb-2">Ready to start?</p>
            <h3 className="text-2xl font-semibold text-text-primary">
              Fix the foundations, then ship one workflow.
            </h3>
            <p className="text-sm text-text-secondary">
              We tailor the plan for your industry, ownership model, and KPI.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={primaryHref} target="_blank" rel="noopener noreferrer">
              <Button variant="default">{frontmatter.ctaPrimaryLabel}</Button>
            </a>
            <Link href={frontmatter.ctaSecondaryHref}>
              <Button variant="secondary">{frontmatter.ctaSecondaryLabel}</Button>
            </Link>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}
