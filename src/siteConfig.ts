// External Calendly URL constant
export const CALENDLY_URL = "https://calendly.com/michael-ancientlabs/30min";

export const siteConfig = {
  name: "Ancient Labs",
  description: "Mid-Market Data & AI Studio",
  url: "https://ancientlabs.co",
  domains: {
    primary: "ancientlabs.co",
    essays: "goodtechproject.com",
  },
  links: {
    twitter: "https://twitter.com/ancientlabs",
    github: "https://github.com/ancientlabs",
  },
  nav: [
    { label: "Services", href: "/services" },
    { label: "Process", href: "/process" },
    { label: "About", href: "/about" },
    { label: "Insights", href: "/insights" },
  ],
  ctas: {
    readiness: {
      label: "Book AI Readiness Call",
      href: CALENDLY_URL,
    },
    architecture: {
      label: "Request Architecture Review",
      href: "/contact?topic=architecture#contact-form",
    },
  },
};
