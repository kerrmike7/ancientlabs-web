import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { PersonaFrontmatter } from "@/components/PersonaTemplate";

const personasDirectory = path.join(process.cwd(), "content/personas");

export function getPersonaFrontmatter(
  slug: string
): PersonaFrontmatter | null {
  const filePath = path.join(personasDirectory, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);
  return data as PersonaFrontmatter;
}
