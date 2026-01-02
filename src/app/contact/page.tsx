import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { Mail, Calendar } from "lucide-react";
import { siteConfig } from "@/siteConfig";
import { runtimeConfig } from "@/lib/runtimeConfig";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Let’s talk infrastructure—email michael@ancientlabs.co or send a message through the Web3Forms-powered contact form.",
};

interface ContactPageProps {
  searchParams?: {
    intent?: string;
  };
}

export default function ContactPage({ searchParams }: ContactPageProps) {
  const { calendlyUrl, contactEndpoint, web3FormsKey } = runtimeConfig;
  const contactHref = siteConfig.ctas.architecture.href;
  const readinessHref = calendlyUrl || contactHref;
  const defaultIntent =
    typeof searchParams?.intent === "string" && searchParams.intent.trim().length > 0
      ? searchParams.intent
      : "readiness";

  return (
    <Section className="py-12 md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Left Column: Info */}
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Let&apos;s talk infrastructure.</h1>
            <p className="text-xl text-text-secondary mb-12">
               Ready to move beyond the hype? Tell us about your data challenges.
            </p>
            
            <div className="space-y-8">
                <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-bg-subtle flex items-center justify-center shrink-0">
                         <Mail className="h-6 w-6 text-accent-primary" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-text-primary mb-1">Email Us</h3>
                         <p className="text-text-secondary mb-2">For general inquiries.</p>
                        <a href="mailto:michael@ancientlabs.co" className="text-accent-primary font-medium hover:underline">michael@ancientlabs.co</a>
                    </div>
                </div>

                 <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-bg-subtle flex items-center justify-center shrink-0">
                         <Calendar className="h-6 w-6 text-accent-primary" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-text-primary mb-1">
                          {siteConfig.ctas.readiness.label}
                        </h3>
                         <p className="text-text-secondary mb-2">Skip the back-and-forth.</p>
                        <a
                          href={readinessHref}
                          className="text-accent-primary font-medium hover:underline block"
                        >
                          {siteConfig.ctas.readiness.label} &rarr;
                        </a>
                    </div>
                </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div>
            <div id="contact-form" className="-mt-24 pt-24" aria-hidden="true" />
            <div className="rounded-lg border border-border-default bg-bg-default p-6 sm:p-8 shadow-sm">
            <ContactForm
              contactEndpoint={contactEndpoint}
              accessKey={web3FormsKey}
              fallbackEmail="michael@ancientlabs.co"
              defaultIntent={defaultIntent}
            />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
