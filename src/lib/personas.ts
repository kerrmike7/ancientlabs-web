import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import type { PersonaFrontmatter } from "@/components/PersonaTemplate";

const personasDirectory = path.join(process.cwd(), "content/personas");

export async function getPersonaBySlug(slug: string): Promise<{
  frontmatter: PersonaFrontmatter;
  contentHtml: string;
} | null> {
  const filePath = path.join(personasDirectory, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);

  return {
    frontmatter: data as PersonaFrontmatter,
    contentHtml: processedContent.toString(),
  };
}
