import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/Card";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { CALENDLY_URL, siteConfig } from "@/siteConfig";
import Link from "next/link";

const phases = [
  {
    title: "Weeks 0–2 · Discovery",
    description:
      "Working sessions with data, ops, and commercial teams to map goals, constraints, and what has been tried already.",
    bullets: [
      "System + data flow diagram (source → warehouse → usage)",
      "Success metric + guardrails for the first use case",
      "Stakeholder map with decision cadence",
    ],
  },
  {
    title: "Weeks 3–6 · Foundation Build",
    description:
      "Connect, clean, and govern only the data needed for the chosen workflow. No speculative pipelines.",
    bullets: [
      "Connectors + transforms for 2–4 critical systems",
      "Schema + contract definitions with ownership",
      "Data quality monitors tied to the KPI",
    ],
  },
  {
    title: "Weeks 7–12 · Use Case Launch",
    description:
      "Implement the workflow end-to-end and embed it with the team that owns the KPI.",
    bullets: [
      "Integration plan (APIs, webhooks, or internal tooling)",
      "Evaluation harness + acceptance criteria",
      "Hypercare + training plan for operators",
    ],
  },
];

const blueprintIncludes = [
  "Single PDF/Slides artifact with visuals, estimates, and roles",
  "T-shirt sized project plan (S/M/L) with gating criteria",
  "Assumptions + risks list so leadership can make the call",
  "Optional: 30/60/90 implementation support scoped with your team",
];

export const metadata: Metadata = {
  title: "90-Day Use Case Blueprint",
  description:
    "A deliverable that translates readiness findings into a shippable, ROI-positive AI workflow.",
};

export default function BlueprintPage() {
  return (
    <div className="flex flex-col">
      <Section className="pb-10">
        <Reveal>
          <SectionHeader
            align="center"
            eyebrow="Proof Object"
            title="90-Day Use Case Blueprint"
            description="A tangible plan that shows how we ship one production AI workflow without boiling the ocean."
          />
        </Reveal>
      </Section>

      <Section className="pt-0">
        <Reveal className="grid gap-8 lg:grid-cols-3">
          {phases.map((phase) => (
            <Card key={phase.title}>
              <CardHeader className="space-y-2">
                <CardTitle className="text-xl">{phase.title}</CardTitle>
                <p className="text-sm text-text-secondary">{phase.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm leading-relaxed">
                  {phase.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2 text-text-secondary">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-primary" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </Reveal>
      </Section>

      <Section className="pt-0">
        <Reveal className="space-y-6">
          <h3 className="text-subheading text-text-primary">
            What the blueprint includes
          </h3>
          <ul className="space-y-3 text-base leading-relaxed text-text-secondary">
            {blueprintIncludes.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-accent-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <Section className="pt-0">
        <Reveal className="flex flex-col gap-4 rounded-2xl border border-border-default bg-bg-default/80 p-8 shadow-sm md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-label mb-2">Next step</p>
            <h3 className="text-2xl font-semibold text-text-primary">
              Want to preview the blueprint?
            </h3>
            <p className="text-text-secondary">
              We can walk you through an anonymized example or co-draft the
              first version for your team.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="default">Book AI Readiness Call</Button>
            </a>
            <Link href={siteConfig.ctas.architecture.href}>
              <Button variant="secondary">Request Architecture Review</Button>
            </Link>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}
