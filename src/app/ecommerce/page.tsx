import type { Metadata } from "next";
import { PersonaTemplate } from "@/components/PersonaTemplate";
import { getPersonaBySlug } from "@/lib/personas";
import { notFound } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
  const persona = await getPersonaBySlug("ecommerce");
  if (!persona) {
    return {};
  }
  return {
    title: `${persona.frontmatter.title} | Ancient Labs`,
    description: persona.frontmatter.description,
  };
}

export default async function EcommercePage() {
  const persona = await getPersonaBySlug("ecommerce");
  if (!persona) {
    notFound();
  }

  return (
    <PersonaTemplate
      frontmatter={persona.frontmatter}
      contentHtml={persona.contentHtml}
    />
  );
}
