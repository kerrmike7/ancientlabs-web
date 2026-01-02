import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { CTABand } from "@/components/CTABand";
import { runtimeConfig } from "@/lib/runtimeConfig";
import { getEssayBySlug, getAllEssays } from "@/lib/essays";

interface EssayPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const essays = getAllEssays();
  return essays.map((essay) => ({
    slug: essay.slug,
  }));
}

export async function generateMetadata({
  params,
}: EssayPageProps): Promise<Metadata> {
  const { slug } = await params;
  const essay = await getEssayBySlug(slug);

  if (!essay) {
    return {
      title: "Essay Not Found",
    };
  }

  return {
    title: essay.title,
    description: essay.summary,
    openGraph: {
      title: essay.title,
      description: essay.summary,
      images: essay.heroImage ? [essay.heroImage] : undefined,
    },
  };
}

export default async function EssayPage({ params }: EssayPageProps) {
  const { slug } = await params;
  const essay = await getEssayBySlug(slug);

  if (!essay) {
    notFound();
  }

  return (
    <>
      <Section className="pb-12 pt-24">
        <Container className="max-w-3xl">
          <article>
            {essay.heroImage && (
              <div className="mb-8">
                <Image
                  src={essay.heroImage}
                  alt={essay.heroImageAlt || essay.title}
                  width={1200}
                  height={600}
                  className="w-full rounded-md"
                />
              </div>
            )}
            <header className="mb-12">
              <div className="mb-4 flex items-center gap-4 text-sm text-text-tertiary">
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
              <h1 className="text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl mb-6">
                {essay.title}
              </h1>
              <p className="text-xl text-text-secondary">{essay.summary}</p>
            </header>

            <div
              className="essay-content space-y-6 text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: essay.contentHtml }}
            />
          </article>
        </Container>
      </Section>

      <CTABand
        headline="Want to discuss this?"
        description="Book an AI Readiness Call or request an Architecture Review."
      />
    </>
  );
}
