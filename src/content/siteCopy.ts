/**
 * Single source of truth for all marketing copy.
 * Edit copy here without touching layout components.
 */

export const siteCopy = {
  // Homepage
  home: {
    hero: {
      badge: "AI Data Readiness Studio",
      headline: "AI didn't fail you. The foundations weren't ready.",
      subheadline: [
        "Ancient Labs builds the data foundations required to run one reliable, ROI-positive AI use case in production — typically within 90 days.",
      ],
      bullets: [
        "We bring fragmented data into a single, usable context so AI can operate correctly.",
        "We establish clear ownership, lineage, and structure so outputs can be trusted and audited.",
        "We turn stalled AI pilots into production systems by fixing the data underneath them.",
      ],
    },
    trust: {
      items: [
        {
          label: "Data before AI",
          value:
            "Reliable AI starts with owned, well-modeled data. Models and prompts only work when the underlying data is clear, consistent, and trusted.",
        },
        {
          label: "Narrow scope wins",
          value:
            "Most AI initiatives fail by attempting too much at once. We focus on one outcome, one data surface, and one use case—until it runs in production.",
        },
        {
          label: "Production over pilots",
          value:
            "If it can't be measured, audited, and owned, it isn't finished. We build systems that survive real users and real accountability.",
        },
      ],
    },
    valueProp: {
      eyebrow: "What we do",
      title: "AI data readiness — not generic AI consulting.",
      description:
        "We fix the data and operational foundations that make AI usable. Then we ship one production AI use case tied to a real KPI.",
      cards: [
        {
          title: "AI-Ready Data Foundations",
          copy:
            "A clean, mapped data layer that connects the systems that matter — analytics, CRM, operations, and feedback — structured for reporting and LLM/RAG.",
        },
        {
          title: "Readiness Scoring & Direction",
          copy:
            "We assess coverage, structure, and ownership gaps, then define exactly which AI use case is worth building — and which are not.",
        },
        {
          title: "Pilot Recovery & Hardening",
          copy:
            "If an AI pilot stalled, we identify the failure point, repair the data foundations, and relaunch a single workflow into production.",
        },
      ],
    },
    notAFit: {
      eyebrow: "Scope",
      title: "When this work makes sense.",
      description: "Clear boundaries lead to real outcomes.",
      items: [
        {
          title: "Production matters.",
          copy:
            "We work with teams aiming to run AI in real workflows — not demos, prompts, or experiments.",
        },
        {
          title: "Infrastructure over hype.",
          copy:
            "This work focuses on data foundations and system design, not surface-level AI features.",
        },
        {
          title: "Ownership is required.",
          copy:
            "We partner with teams who want to understand and own their data — not outsource responsibility.",
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
      title: "Engagements designed to reach production.",
      description:
        "Fixed-scope work to establish AI-ready data foundations and ship one real use case. No open-ended consulting.",
    },
    offers: [
      {
        duration: "2–4 weeks",
        title: "AI Data Readiness Assessment",
        description:
          "For teams who want clarity before investing further in AI.\n\nWe assess your systems, data structure, and ownership to determine what is realistically shippable.",
        bullets: [
          "Map core systems across data, analytics, and operations",
          "Score readiness across structure, access, and governance",
          "Identify 2–3 viable AI use cases ranked by effort vs. impact",
        ],
        price: "From €3,000",
      },
      {
        duration: "6–10 weeks",
        title: "Data Foundations Sprint",
        description:
          "We build the minimum data foundation required to support one production outcome.\n\nNo excess pipelines. No speculative architecture.",
        bullets: [
          "Connect and clean 2–4 critical systems",
          "Define schemas, labels, and access rules",
          "Implement data quality checks and KPI tracking",
        ],
        price: "Typical projects €15,000–30,000",
      },
      {
        duration: "6–12 weeks",
        title: "AI Use Case to Production",
        description:
          "With foundations in place, we ship one AI workflow tied to a real KPI.\n\nSearch, automation, analytics augmentation, or decision support — based on your data.",
        bullets: [
          "Design and deploy one production AI workflow",
          "Measure business impact against a defined KPI",
          "Ensure observability, governance, and handover",
        ],
        price: "Scoped after assessment",
      },
    ],
    notAFit: {
      eyebrow: "Fit",
      title: "This engagement works best when:",
      description: "A few conditions make the difference.",
      items: [
        "There is enough real data volume to support production use.",
        "The team can commit to decisions on ownership, access, and scope.",
        "The goal is a shippable outcome — not ongoing experimentation.",
      ],
    },
    ctaBand: {
      headline: "Ready to scope your sprint?",
      description:
        "Start with an AI Readiness Call or go straight to an Architecture Review.",
    },
  },

  // About
  about: {
    hero: {
      eyebrow: "About",
      title: "A specialized studio for AI data foundations.",
      description:
        "Ancient Labs helps teams make AI reliable by fixing the systems underneath it.",
    },
    intro:
      "We work with teams whose data is fragmented across tools and ownership is unclear — and who need AI to work in production, not demos.",
    sections: [
      {
        heading: "Why we exist",
        paragraphs: [
          "We kept seeing the same failure pattern.",
          "AI pilots launched quickly. Tools were purchased. Expectations were high.",
          "But without structured, owned, connected data, nothing reached production.",
          "The issue wasn't models or ambition. It was foundations.",
        ],
      },
      {
        heading: "Who we work with",
        paragraphs: [
          "We work with teams where data maturity is low — but outcomes still matter.",
        ],
        bullets: [
          "Service businesses with fragmented customer and operational data",
          "E-commerce and digital platforms struggling to unify analytics and AI",
          "Non-profits that need reliable data to demonstrate impact",
          "Regulated or high-stakes environments where experimentation isn't enough",
        ],
        closing: "Different sectors. The same structural problem.",
      },
      {
        heading: "How we work",
        paragraphs: [
          "We operate as a founder-led studio.",
          "We lead architecture, data design, and delivery directly.",
          "When scale is required, we extend through senior engineers we've worked with for years.",
          "Every engagement is scoped around a concrete outcome.",
        ],
      },
    ],
    quote:
      "AI is an infrastructure problem. When the foundations are right, AI becomes boring — and that's when it works.",
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
      headline: "Work directly with the founding team.",
      description:
        "Start with an AI Readiness Call or request an Architecture Review.",
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
          "We start with a short working session to understand your goals, constraints, and context. We look at what you've already tried—or wanted to try—with AI, and where things stalled. We assess business goals, existing systems, past AI attempts, and organisational readiness. Decision gate: Proceed to AI Readiness Assessment.",
      },
      {
        period: "WEEKS 1–2",
        title: "AI Readiness Assessment",
        description:
          "We dig into your data and systems to understand what's actually possible. This is mostly interviews, light audits, and hands-on review—not heavy build work. You get a readiness score, clear blockers, and 2–3 realistic AI use cases ranked by effort vs. impact. Decision gate: Proceed to Data Foundations—or stop with a clear plan.",
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
          "We ship one AI workflow tied to a real KPI. We scope, integrate, validate, and iterate the solution—whether that's internal search, support automation, analytics augmentation, or decision support. Outcome: one AI use case live in production.",
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
};
