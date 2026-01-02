import type { Metadata } from "next";
import PersonaContent from "@content/personas/nonprofit.mdx";
import {
  PersonaTemplate,
  type PersonaFrontmatter,
} from "@/components/PersonaTemplate";
import { getPersonaFrontmatter } from "@/lib/personas";

const personaMeta = getPersonaFrontmatter("nonprofit") as PersonaFrontmatter;

export const metadata: Metadata = {
  title: `${personaMeta.title} | Ancient Labs`,
  description: personaMeta.description,
};

export default function NonprofitPage() {
  return (
    <PersonaTemplate frontmatter={personaMeta}>
      <PersonaContent />
    </PersonaTemplate>
  );
}
