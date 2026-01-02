/**
 * Single source of truth for all marketing copy.
 * Edit copy here without touching layout components.
 */

export const siteCopy = {
  // Homepage
  home: {
    hero: {
      badge: "Mid-Market Data & AI Studio",
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
        { label: "Background", value: "Engineering leadership from high-scale fintechs." },
        { label: "Proof", value: "$1B+ in payments volume processed." },
        { label: "Engagements", value: "2-week sprints. Systems, not slides." },
      ],
    },
    valueProp: {
      eyebrow: "What we do",
      title: "AI data readiness, not generic AI consulting.",
      description: "We fix your data foundation so you can ship one reliable, ROI-positive AI use case in 90 days. Narrow scope. Clear outcomes.",
      cards: [
        {
          title: "AI Foundations",
          copy: "Clean data pipelines ready for LLM context windows. Structured data models that keep you vendor-agnostic.",
        },
        {
          title: "Financial Infrastructure",
          copy: "Reconciliation and ledgering for complex flows. Automated matching of payouts to your internal source of truth.",
        },
        {
          title: "Strategic Optionality",
          copy: "Own your data so you can switch models or vendors anytime. No black boxes, no lock-in.",
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
      title: "Engagement models built for speed.",
      description: "Fixed-scope sprints with tangible deliverables. No open-ended consulting.",
    },
    offers: [
      {
        duration: "2 Weeks",
        title: "The Foundation Sprint",
        description: "For messy data environments that need a reset before layering AI.",
        bullets: [
          "Comprehensive data audit & schema cleanup",
          "Initial ETL/ELT pipeline deployment",
          "Documentation for your engineering team",
        ],
      },
      {
        duration: "1 Week",
        title: "Architecture Review",
        description: "Validation before big spend—pressure-test your stack and roadmap.",
        bullets: [
          "Stack selection + buy vs. build memo",
          "Security & compliance assessment",
          "Executive-ready roadmap presentation",
        ],
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
      description: "Transparent, iterative, and rigorous. We treat your infrastructure with the same care we treat our own.",
    },
    steps: [
      {
        period: "Week 0",
        title: "The Audit",
        description: "We sign an NDA, access your VPC and repo, and map the territory. We identify bottlenecks, security risks, and architectural debt before writing a single line of code.",
      },
      {
        period: "Day 2",
        title: "The Strategy",
        description: "We propose the stack and schema. No 50-page PDFs—just a clear Notion doc and a diagram explaining what we're building and why.",
      },
      {
        period: "Weeks 1-2",
        title: "The Build",
        description: "We deploy code to your environment. We set up the pipelines, the warehouses, and the API endpoints. You see progress in git commits, not status emails.",
      },
      {
        period: "Week 3",
        title: "The Handoff",
        description: "We don't just leave. We document everything and run a training session for your team. You own the code, the keys, and the roadmap.",
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
      title: "A small studio of senior engineers.",
      description: "Founded by Michael Kerr (ex-Stripe/Uber) to bridge the gap between enterprise ambition and mid-market realities.",
    },
    bio: [
      "We started Ancient Labs after watching mid-market teams get sold \"AI transformations\" by agencies that couldn't ship code—or locked into enterprise platforms that were too rigid to adapt.",
      "We're engineers, not consultants. We've built payment rails moving billions and data systems for public companies. We bring that rigor to your infrastructure.",
      "Every engagement is hands-on, repo-first, and focused on tangible outcomes. No black boxes, no mystery retainers.",
    ],
    quote: "We believe AI is an infrastructure problem, not a magic trick.",
    nextSteps: {
      eyebrow: "Where to next",
      title: "See how we work.",
      description: "Jump straight into the services or payments detail pages.",
      links: [
        { label: "View our Services", href: "/services" },
        { label: "Explore Payments", href: "/payments" },
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
