/**
 * Single source of truth for all marketing copy.
 * Edit copy here without touching layout components.
 */

export const siteCopy = {
  // Homepage
  home: {
    hero: {
      badge: "AI Data Readiness Studio",
      headline: "AI didn't fail you. Your data wasn't ready.",
      subheadline: [
        "Ancient Labs helps teams fix fragmented data and ship one reliable, ROI-positive AI use case in 90 days — without rebuilding their entire stack.",
      ],
      bullets: [
        "Fragmented data across silos prevents AI from accessing the context it needs.",
        "Missing ownership and lineage means AI outputs can't be trusted or audited.",
        "AI pilots fail to harden into production systems because the data foundation isn't reliable.",
      ],
    },
    trust: {
      items: [
        {
          label: "Data before AI",
          value:
            "Reliable AI starts with owned, well-modeled data. Tools, prompts, and models only work when the underlying data is clear, consistent, and trusted.",
        },
        {
          label: "Narrow scope wins",
          value:
            "Most AI initiatives fail by trying to do too much. We focus on one outcome, one data surface, and one use case—until it works in production.",
        },
        {
          label: "Production over pilots",
          value:
            "If it can’t be measured, audited, and owned, it isn’t done. We build AI systems that survive real users, real data, and real accountability.",
        },
      ],
    },
    valueProp: {
      eyebrow: "What we do",
      title: "AI data readiness, not generic AI consulting.",
      description: "We fix the invisible data and operational blockers so AI becomes reliable. We start by getting the data right—then, if it makes sense, ship one use case tied to a real KPI.",
      cards: [
        {
          title: "Vertical AI-Ready Data Layer",
          copy: "A clean, mapped schema that unifies the systems that matter—analytics, CRM, operations, and feedback—ready for LLM/RAG and reporting.",
        },
        {
          title: "AI Readiness Scoring & Analytics",
          copy: "Assess data coverage, structure, and ownership gaps. Prioritize fixes and pick one use case your team can ship and measure.",
        },
        {
          title: "AI Pilot Turnaround",
          copy: "If your pilot stalled, we diagnose why (data, integration, governance), salvage what's useful, and relaunch one working workflow in production.",
        },
      ],
    },
    notAFit: {
      eyebrow: "Positioning",
      title: "Who we are not.",
      description: "Saying no keeps engagements tight and outcomes honest.",
      items: [
        {
          title: "A creative agency for chatbots.",
          copy: "We don't build gimmicks. We ship the data plumbing that makes AI reliable.",
        },
        {
          title: "A single-vendor implementation shop.",
          copy: "No Palantir-only reselling here. We pick the right boring tech for your scale.",
        },
        {
          title: "Staff augmentation for maintenance tickets.",
          copy: "You get accountable sprints with defined outcomes, not open-ended hourly billing.",
        },
      ],
    },
    ctaBand: {
      headline: "Stop guessing. Fix the foundations.",
    },
  },

  // Services
  services: {
    hero: {
      eyebrow: "Services",
      title: "Engagements designed for clarity and momentum.",
      description:
        "Fixed-scope work to get your data ready for AI — and ship something real. No open-ended consulting.",
    },
    offers: [
      {
        duration: "2–4 weeks",
        title: "AI Data Readiness Assessment",
        description:
          "For teams with scattered data who need clarity before investing further in AI.\n\nWe map your systems, assess data maturity, and identify which AI use cases are actually feasible — and worth building.",
        bullets: [
          "Map core systems (CRM, analytics, ops, finance, support)",
          "Score AI readiness across data, infrastructure, and governance",
          "Identify 2–3 viable AI use cases with effort vs. impact trade-offs",
        ],
        price: "From €3,000",
      },
      {
        duration: "6–10 weeks",
        title: "Data Readiness Implementation Sprint",
        description:
          "Turn readiness into reality by building the minimum data foundation needed for one real outcome.\n\nThis sprint focuses on connecting, cleaning, and governing only the data required to support a chosen use case.",
        bullets: [
          "Build pipelines between 2–4 key systems",
          "Define schemas, labels, and access rules",
          "Establish data quality checks and ROI tracking",
        ],
        price: "Typical projects €15,000–30,000",
      },
      {
        duration: "6–12 weeks",
        title: "AI Use Case to Production",
        description:
          "Once your data foundation is in place, we help you ship a single AI workflow tied to a real KPI.\n\nThis might be internal search, support automation, analytics augmentation, or decision support — depending on your data.",
        bullets: [
          "Design and ship one production-ready AI use case",
          "Measure impact against a defined business KPI",
          "Ensure observability, governance, and handover",
        ],
        price: "Scoped after assessment",
      },
    ],
    notAFit: {
      eyebrow: "Positioning",
      title: "Who is this not for?",
      description: "Clarity about fit keeps engagements tight.",
      items: [
        "Teams seeking long-term staff augmentation or maintenance.",
        "Pre-seed startups without validated product/data volume.",
        "Marketing-led \"AI buzz\" projects with no infra outcomes.",
      ],
    },
    ctaBand: {
      headline: "Ready to scope your sprint?",
      description: "Start with an AI Readiness Call or jump straight into the Architecture Review.",
    },
  },

  // Payments
  payments: {
    hero: {
      eyebrow: "Payments",
      title: "Financial infrastructure for scale.",
      description: "Ledgering, reconciliation, and ops tooling for marketplaces, fintechs, and regulated platforms.",
    },
    trust: {
      items: [
        { label: "Volume", value: "$1B+ processed for regulated marketplaces." },
        { label: "Compliance", value: "PCI-aware architecture patterns & audit logs." },
        { label: "Reliability", value: "Redundancy designed for finance and ops teams." },
      ],
    },
    capabilities: {
      eyebrow: "Capabilities",
      title: "Built for accuracy.",
      description: "The boring infrastructure that keeps money and data in sync.",
      cards: [
        {
          title: "Reconciliation",
          copy: "Automated matching of gateway payouts (Stripe/Adyen) to your internal databases. Catch penny gaps before they become million-dollar holes.",
        },
        {
          title: "Double-entry ledgering",
          copy: "Immutable journal design tailored to your products. We implement double-entry systems that survive audits.",
        },
        {
          title: "Ops tooling",
          copy: "Dashboards for finance teams, not just devs—dispute workflows, refunds, and monitoring built on your source of truth.",
        },
      ],
    },
    ctaBand: {
      headline: "Need regulated-grade infrastructure?",
      description: "Book an AI Readiness Call or request an Architecture Review focused on your payments stack.",
    },
  },

  // Process
  process: {
    hero: {
      eyebrow: "Process",
      title: "How we work.",
      description:
        "A structured path from scattered data to one AI use case in production. Each phase ends with a clear decision—continue, pause, or stop with value in hand.",
    },
    steps: [
      {
        period: "WEEK 0",
        title: "Intro & Discovery (No obligation)",
        description:
          "We start with a short working session to understand your goals, constraints, and context. We look at what you’ve already tried—or wanted to try—with AI, and where things stalled. We assess business goals, existing systems, past AI attempts, and organisational readiness. Decision gate: Proceed to AI Readiness Assessment.",
      },
      {
        period: "WEEKS 1–2",
        title: "AI Readiness Assessment",
        description:
          "We dig into your data and systems to understand what’s actually possible. This is mostly interviews, light audits, and hands-on review—not heavy build work. You get a readiness score, clear blockers, and 2–3 realistic AI use cases ranked by effort vs. impact. Decision gate: Proceed to Data Foundations—or stop with a clear plan.",
      },
      {
        period: "WEEKS 3–4",
        title: "Planning & Architecture",
        description:
          "We translate findings into a concrete plan with current-state and proposed architecture diagrams, a prioritised foundation roadmap, and clear scope for implementation. Decision gate: Sign off on Data Foundations work.",
      },
      {
        period: "WEEKS 5–10",
        title: "Data Foundations Build",
        description:
          "We implement the minimum infrastructure needed to make AI viable. We wire and clean data from the right systems, define schemas and access rules, set up ETL/ELT pipelines, and add governance plus health checks. Outcome: a production-ready data foundation with trusted analytics. Decision gate: Proceed to an AI use case—or pause with production-ready foundations.",
      },
      {
        period: "WEEKS 11–18",
        title: "AI Use Case Build",
        description:
          "We ship one AI workflow tied to a real KPI. We scope, integrate, validate, and iterate the solution—whether that’s internal search, support automation, analytics augmentation, or decision support. Outcome: one AI use case live in production.",
      },
      {
        period: "FINAL STEP",
        title: "Handoff & Ownership",
        description:
          "You own the code, data, and documentation. We run a walkthrough with your team and leave you with a clear roadmap for iteration, expansion, or independence.",
      },
    ],
    principles: {
      eyebrow: "Our principles",
      title: "How we make decisions.",
      description: "Guidelines we bring into every engagement.",
      items: [
        {
          title: "Ownership",
          copy: "You own the IP and the code. No proprietary black boxes.",
        },
        {
          title: "Simplicity",
          copy: "Boring tech is better tech. We choose standard, proven tools over hype.",
        },
        {
          title: "Security First",
          copy: "We assume breach. Least-privilege access and encryption are defaults, not features.",
        },
      ],
    },
  },

  // About
  about: {
    hero: {
      eyebrow: "About",
      title: "A small studio focused on AI data foundations.",
      description: "Ancient Labs helps growing teams make AI reliable by fixing the data and systems underneath it.",
    },
    intro: "We work with organizations whose data is scattered across tools, teams, and vendors — and who want real outcomes from AI without large budgets, long timelines, or costly experimentation. Our focus is narrow by design: get the data foundation right, then ship something that works.",
    sections: [
      {
        heading: "Why we exist",
        paragraphs: [
          "We started Ancient Labs after seeing the same pattern repeat.",
          "Teams were eager to adopt AI. Pilots were launched. Tools were bought. But without clean, connected, well-owned data, nothing ever made it to production.",
          "The problem wasn't ambition or models — it was foundations.",
          "AI only creates value when data is structured, reliable, and designed for real use cases. That's the gap we exist to close.",
        ],
      },
      {
        heading: "Who we work with",
        paragraphs: [
          "We focus on growing teams with low data readiness — where data is fragmented, ownership is unclear, and outcomes still matter.",
          "This often includes:",
        ],
        bullets: [
          "Service businesses with scattered customer, booking, and behavioral data",
          "E-commerce and digital platforms struggling to unify analytics, operations, and AI use cases",
          "Non-profits and mission-driven organizations that need clearer data to demonstrate impact",
          "Regulated or high-stakes environments where \"experiments\" aren't enough",
        ],
        closing: "Different sectors. The same underlying data problem.",
      },
      {
        heading: "How we work",
        paragraphs: [
          "Ancient Labs can engage as focused advisors — or as hands-on builders.",
          "We lead AI readiness, data architecture, and system design directly. When timelines or scope require it, we scale delivery through a trusted bench of senior engineers we've worked with for years.",
          "This allows us to stay founder-led and outcome-driven, while supporting projects that range from small, targeted builds to larger, time-sensitive initiatives.",
          "Every engagement is scoped around a concrete outcome — not open-ended exploration.",
        ],
      },
    ],
    quote: "AI is an infrastructure problem, not a magic trick. When the foundations are right, AI becomes boring — and that's when it starts working.",
    nextSteps: {
      eyebrow: "Where to next",
      title: "See how we work.",
      description: "Jump straight into the services or process detail pages.",
      links: [
        { label: "View our Services", href: "/services" },
        { label: "View our Process", href: "/process" },
      ],
    },
    ctaBand: {
      headline: "Want to work directly with the founding team?",
      description: "We run the engagements ourselves—start the conversation via the Readiness Call or Architecture Review.",
    },
  },

  // Insights
  insights: {
    hero: {
      eyebrow: "Insights",
      title: "Thinking & writing.",
      description: "Essays on data strategy, AI engineering, and building durable infrastructure.",
    },
    links: [
      {
        label: "Substack",
        title: "Ancient Labs on Substack",
        description: "Our primary channel for deep dives into data architecture and engineering culture.",
        href: "https://ancientlabs.substack.com",
      },
      {
        label: "Essay Hub",
        title: "The Good Tech Project",
        description: "A collection of broader essays on technology, society, and building good software.",
        href: "https://goodtechproject.com",
      },
    ],
    ctaBand: {
      headline: "Want infrastructure notes in your inbox?",
      description: "Grab a call or request an Architecture Review and we'll send the latest thinking afterward.",
    },
  },

  // Global CTA labels (already in siteConfig, but keeping for consistency)
  ctas: {
    readiness: "Book AI Readiness Call",
    architecture: "Request Architecture Review",
  },
};
