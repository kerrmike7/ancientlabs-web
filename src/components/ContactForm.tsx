"use client";

import { useState } from "react";
import { Button } from "./Button";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

interface ContactFormProps {
  contactEndpoint?: string;
  accessKey?: string;
  fallbackEmail?: string;
  defaultIntent?: string;
}

export function ContactForm({
  contactEndpoint,
  accessKey,
  fallbackEmail = "michael@ancientlabs.co",
  defaultIntent = "readiness",
}: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Check if form is configured
  const isConfigured = Boolean(contactEndpoint && accessKey);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    // Honeypot check
    if (formData.get("_gotcha")) {
        // Silently fail for bots
        setStatus("success");
        return;
    }

    setStatus("submitting");

    if (!contactEndpoint || !accessKey) {
      setStatus("error");
      setErrorMessage(
        `Contact form is not configured. Please email us directly at ${fallbackEmail}.`
      );
      return;
    }

    // Add access key to form data
    formData.append("access_key", accessKey);

    try {
      const response = await fetch(contactEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json().catch(() => ({}));
        if (data.success !== false) {
          setStatus("success");
          form.reset();
        } else {
          throw new Error(data.message || "Form submission failed");
        }
      } else {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.message || data.error || "Form submission failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again or email us directly.");
    }
  }

  // Show configuration error if env vars are missing
  if (!isConfigured) {
    return (
      <div className="rounded-md bg-red-50 p-6 border border-red-100 flex flex-col items-center text-center">
        <AlertCircle className="h-12 w-12 text-red-600 mb-4" />
        <h3 className="text-lg font-semibold text-red-900 mb-2">Contact Form Unavailable</h3>
        <p className="text-red-700">
          The contact form is not configured. Please email us directly at{" "}
          <a
            href={`mailto:${fallbackEmail}`}
            className="underline hover:no-underline"
          >
            {fallbackEmail}
          </a>
          .
        </p>
      </div>
    );
  }

  if (status === "success") {
    return (
        <div className="rounded-md bg-green-50 p-6 border border-green-100 flex flex-col items-center text-center">
            <CheckCircle className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold text-green-900 mb-2">Message Sent</h3>
            <p className="text-green-700">
                Thanks for reaching out. We&apos;ll get back to you within 24 hours.
            </p>
            <Button
                variant="ghost"
                className="mt-6 text-green-700 hover:text-green-900 hover:bg-green-100"
                onClick={() => setStatus("idle")}
            >
                Send another message
            </Button>
        </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
       {status === "error" && (
        <div className="rounded-md bg-red-50 p-4 flex items-start gap-3 text-red-700 border border-red-100">
             <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
             <p className="text-sm">{errorMessage}</p>
        </div>
       )}

      <input type="hidden" name="intent" value={defaultIntent} />
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-text-primary">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            disabled={status === "submitting"}
            className="w-full rounded-sm border border-border-default bg-bg-surface px-3 py-2 text-sm text-text-primary placeholder:text-text-tertiary focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary disabled:opacity-50"
            placeholder="Jane Doe"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-text-primary">
            Work Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
             disabled={status === "submitting"}
            className="w-full rounded-sm border border-border-default bg-bg-surface px-3 py-2 text-sm text-text-primary placeholder:text-text-tertiary focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary disabled:opacity-50"
            placeholder="jane@company.com"
          />
        </div>
      </div>
      
      <div className="space-y-2">
          <label htmlFor="topic" className="text-sm font-medium text-text-primary">
            Topic
          </label>
          <div className="relative">
             <select
                id="topic"
                name="topic"
                 disabled={status === "submitting"}
                className="w-full appearance-none rounded-sm border border-border-default bg-bg-surface px-3 py-2 text-sm text-text-primary focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary disabled:opacity-50"
                defaultValue="readiness"
             >
                <option value="readiness">AI Readiness Call</option>
                <option value="architecture">Architecture Review</option>
                <option value="other">Other Inquiry</option>
             </select>
             {/* Chevron */}
             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-text-secondary">
               <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                 <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
               </svg>
             </div>
          </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-text-primary">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
           disabled={status === "submitting"}
          className="w-full rounded-sm border border-border-default bg-bg-surface px-3 py-2 text-sm text-text-primary placeholder:text-text-tertiary focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary resize-y disabled:opacity-50"
          placeholder="Tell us about your infrastructure..."
        />
      </div>

       {/* Honeypot */}
       <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
      <p className="mt-2 text-xs text-text-secondary">
        We&apos;ll route this to an AI Readiness Call or Architecture Review based on your topic.
      </p>
    </form>
  );
}
