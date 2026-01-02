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

const readinessAreas = [
  {
    title: "Data Surface",
    points: [
      "Systems mapped end-to-end (source → models → consumers)",
      "Defined owners for schemas, lineage, and incident response",
      "Quality checks logged with accountable remediation",
    ],
  },
  {
    title: "Governance & Access",
    points: [
      "Role-based access aligned to business teams",
      "Audit trail for sensitive data handling",
      "Service accounts and secrets managed centrally",
    ],
  },
  {
    title: "Workflow Readiness",
    points: [
      "Candidate AI use cases mapped to data they require",
      "Success metrics defined before build",
      "Feedback loop for post-launch adjustments",
    ],
  },
];

const deliverables = [
  "Executive-readable score (green / amber / red) across each pillar",
  "Top three blockers with how-to-fix guidance and owners",
  "6–12 month sequence of projects with effort vs. impact",
  "Evidence appendix so finance, ops, and engineering stay aligned",
];

export const metadata: Metadata = {
  title: "AI Readiness Scorecard",
  description:
    "A tangible snapshot of how close your organization is to shipping a reliable AI use case.",
};

export default function ScorecardPage() {
  return (
    <div className="flex flex-col">
      <Section className="pb-10">
        <Reveal>
          <SectionHeader
            align="center"
            eyebrow="Proof Object"
            title="AI Readiness Scorecard"
            description="A concise, board-ready snapshot that shows whether your data, ownership, and workflows can support an ROI-positive AI use case."
          />
        </Reveal>
      </Section>

      <Section className="pt-0">
        <Reveal className="grid gap-8 lg:grid-cols-3">
          {readinessAreas.map((area) => (
            <Card key={area.title}>
              <CardHeader>
                <CardTitle>{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm leading-relaxed">
                  {area.points.map((point) => (
                    <li key={point} className="flex gap-2 text-text-secondary">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-primary" />
                      <span>{point}</span>
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
            What shows up in the scorecard
          </h3>
          <ul className="space-y-3 text-base leading-relaxed text-text-secondary">
            {deliverables.map((item) => (
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
              Want to benchmark your team?
            </h3>
            <p className="text-text-secondary">
              We can walk through a recent scorecard or create one for your org
              in a single working session.
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
