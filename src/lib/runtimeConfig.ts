type CalendlyIntent = "readiness" | "architecture";

const calendlyIntentTags: Record<CalendlyIntent, string> = {
  readiness: "cta-readiness",
  architecture: "cta-architecture-review",
};

const calendlyBaseUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "";

const buildCalendlyUrl = (intent: CalendlyIntent) => {
  if (!calendlyBaseUrl) {
    return "";
  }

  const intentTag = calendlyIntentTags[intent];

  try {
    const url = new URL(calendlyBaseUrl);
    url.searchParams.set("utm_content", intentTag);
    return url.toString();
  } catch {
    const separator = calendlyBaseUrl.includes("?") ? "&" : "?";
    return `${calendlyBaseUrl}${separator}utm_content=${intentTag}`;
  }
};

export const runtimeConfig = {
  calendlyUrl: calendlyBaseUrl,
  calendlyUrls: {
    readiness: buildCalendlyUrl("readiness"),
    architecture: buildCalendlyUrl("architecture"),
  },
  contactEndpoint: process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "",
  web3FormsKey: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "",
};

export const envWarnings = {
  calendlyConfigured: Boolean(runtimeConfig.calendlyUrl),
  contactFormConfigured:
    Boolean(runtimeConfig.contactEndpoint) &&
    Boolean(runtimeConfig.web3FormsKey),
};
