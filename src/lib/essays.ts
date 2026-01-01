import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export interface EssayFrontmatter {
  title: string;
  slug: string;
  date: string;
  summary: string;
  tags: string[];
  status: "draft" | "published";
  heroImage?: string;
  heroImageAlt?: string;
}

export interface Essay extends EssayFrontmatter {
  content: string;
  contentHtml: string;
}

const essaysDirectory = path.join(process.cwd(), "content/essays");

export function getAllEssays(): EssayFrontmatter[] {
  if (!fs.existsSync(essaysDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(essaysDirectory);
  const essays = fileNames
    .filter((name) => name.endsWith(".md") && name !== "_TEMPLATE.md")
    .map((fileName) => {
      const fullPath = path.join(essaysDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        title: data.title || "",
        slug: data.slug || fileName.replace(/\.md$/, ""),
        date: data.date || "",
        summary: data.summary || "",
        tags: data.tags || [],
        status: data.status || "draft",
        heroImage: data.heroImage,
        heroImageAlt: data.heroImageAlt,
      } as EssayFrontmatter;
    })
    .filter((essay) => essay.status === "published")
    .sort((a, b) => {
      // Sort by date descending (newest first)
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return essays;
}

export async function getEssayBySlug(slug: string): Promise<Essay | null> {
  if (!fs.existsSync(essaysDirectory)) {
    return null;
  }

  const fileNames = fs.readdirSync(essaysDirectory);
  const fileName = fileNames.find(
    (name) => name.endsWith(".md") && name !== "_TEMPLATE.md" && name.includes(slug)
  );

  if (!fileName) {
    return null;
  }

  const fullPath = path.join(essaysDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // Process markdown to HTML
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    title: data.title || "",
    slug: data.slug || slug,
    date: data.date || "",
    summary: data.summary || "",
    tags: data.tags || [],
    status: data.status || "draft",
    heroImage: data.heroImage,
    heroImageAlt: data.heroImageAlt,
    content,
    contentHtml,
  } as Essay;
}
