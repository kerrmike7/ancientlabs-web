import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Ancient Labs collects, uses, and protects personal information shared through the site and engagements.",
};

export default function PrivacyPage() {
  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow="Legal"
          title="Privacy Policy"
          description="How we collect, use, and protect your information when you interact with Ancient Labs."
          className="mb-2"
        />
        <p className="text-sm text-text-secondary">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        <div className="mt-8 space-y-6 text-base leading-relaxed text-text-secondary">
          <p>This Privacy Policy describes how Ancient Labs (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and protects your information when you visit our website or use our services.</p>

          <h2 className="text-2xl font-semibold text-text-primary">Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc space-y-2 pl-6 text-text-secondary">
            <li><strong>Contact Information:</strong> Name, email address, and other contact details you provide when contacting us or requesting services.</li>
            <li><strong>Usage Data:</strong> Information about how you use our website, including pages visited and time spent.</li>
            <li><strong>Communication Data:</strong> Information from emails, calls, or other communications with us.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-text-primary">How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc space-y-2 pl-6 text-text-secondary">
            <li>Respond to your inquiries and provide our services</li>
            <li>Improve our website and services</li>
            <li>Send you relevant information about our services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-semibold text-text-primary">Information Sharing</h2>
          <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or required by law.</p>

          <h2 className="text-2xl font-semibold text-text-primary">Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

          <h2 className="text-2xl font-semibold text-text-primary">Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc space-y-2 pl-6 text-text-secondary">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt out of marketing communications</li>
          </ul>

          <h2 className="text-2xl font-semibold text-text-primary">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:michael@ancientlabs.co" className="text-accent-primary underline">
              michael@ancientlabs.co
            </a>
            .
          </p>
        </div>
      </Container>
    </Section>
  );
}
