# Ancient Labs Website (V1) — PRD (Reference)

## 1) Purpose & Context

Ancient Labs is a mid-market data & AI foundation studio.

This website is **not** content marketing or SEO-first growth. Its primary job is to:

- Support warm outbound conversations
- Establish instant credibility
- Clearly articulate positioning vs Palantir, consultancies, and AI agencies
- Convert qualified prospects into readiness or architecture calls

This is a **V1 marketing site**, not a product.

## 2) Target Audience

### Primary

- Mid-market executives (CTO, Head of Data, Head of Innovation)
- Payments, financial infrastructure, hospitality, marketplaces
- Orgs with AI ambition but unclear data foundations

### Secondary

- Banks / central banks / regulated orgs evaluating vendors
- Internal champions forwarding links to decision-makers

## 3) Positioning (Single Source of Truth)

Ancient Labs:

- Builds AI-ready data foundations
- Is stack-agnostic but opinionated
- Serves mid-market organizations
- Implements systems (not just advice)
- Preserves optionality, avoids vendor lock-in

We are not:

- A chatbot agency
- A generic AI consultancy
- A vendor platform like Palantir Foundry

## 4) Success Metrics (V1)

- Site can be used confidently in warm outbound emails
- Prospects understand “what we do” in **<60 seconds**
- At least **one clear CTA per page**
- Site can be deployed and iterated without redesign

## 5) Scope (V1)

### In scope

- Static marketing pages
- Clear service articulation
- Conversion CTAs
- Lightweight contact form
- Modern, Framer-quality UI
 - Simple “fast trust” content blocks for execs (background, what’s been shipped, how engagements run)

### Out of scope (explicit)

- Blog CMS
- Auth / accounts
- Dashboards
- Product UI
- SEO scaling or programmatic content
 - Complex host-based multi-domain routing (GoodTechProject uses separate Vercel project for V1)

## 5.1) Home Page V1 vs V1.1

- **V1 (today)**:
  - Hero with clear positioning
  - 3 supporting bullets
  - The two CTAs
  - “What we do” section (e.g., AI foundations, payment systems)
  - “Not a fit” section
  - CTA band
- **V1.1 (later)**:
  - Expanded credibility/principles
  - Additional storytelling, motion, or case-study-style content
  - Any visual polish that goes beyond what’s needed to ship V1 today

## 6) Information Architecture

Pages to build:

- `/` — Landing / Conversion
- `/services` — Offers & fit
- `/process` — How we work
- `/payments` — Financial & payments systems landing
- `/insights` — Link-out to Substack
- `/about` — Credibility & principles
- `/contact` — Contact & CTA
- `/privacy` — Boilerplate

## 7) Core CTAs

Only **two CTAs** in the entire site:

- **Book an AI Readiness Call**
- **Request an Architecture Review**

- No generic “Contact us” language.
- Each CTA must link to a **real destination**:
  - “Book an AI Readiness Call” → calendar link (e.g., Calendly)
  - “Request an Architecture Review” → either a dedicated calendar link or a clear contact flow (e.g., `/contact#architecture-review`)
- CTA targets should be configured centrally (e.g., site config / env vars), not hardcoded per component.

## 8) Design & UX Principles

- Modern, calm, high-trust aesthetic
- More “Vercel / Linear” than “agency”
- Minimal animations, subtle motion
- Clear hierarchy, generous spacing
- Avoid visual noise or gimmicks

## 8.1) Fast Trust Content (Exec-Focused)

Executives and internal champions must be able to quickly answer “Is this person legit?”.

- Add a small **“fast trust” block** on:
  - `/` (Home)
  - `/payments`
- Fast trust block should briefly cover:
  - **Background** (2–3 bullets)
  - **What you’ve shipped** (integrations, data systems, payments infra, etc.)
  - **How engagements run** (e.g., 2–3 week sprint, clear deliverables)
-
This should be concise and scannable, not a long-form case study.

## 9) Technical Requirements

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Deployed on Vercel
- No backend beyond form submission
- Env-based configuration for forms
- SEO metadata + OG tags
 - robots.txt + sitemap.xml for static routes

### 9.1) Contact Form Implementation (Serverless)

- Use a simple, hosted form provider (e.g., Formspree, Web3Forms, or similar).
- Configure an environment variable (e.g., `NEXT_PUBLIC_CONTACT_ENDPOINT`) for the submission endpoint.
- Requirements:
  - Basic client-side validation for required fields
  - Clear success + error UI states
  - Submit button disabled while submitting
  - Tested against the real endpoint in **production**, not just locally

## 9.2) Domains & Environments (V1)

### Domains

- **Primary marketing site**: `ancientlabs.co`
- **Essays hub (side property)**: `goodtechproject.com`
  - Purpose: a simple page that links to essays (Substack) and related writing.
- **Substack**: used for monthly essays (link-out; no onsite blog/CMS).

### Environments

- **Production**: publicly viewed site(s) on the primary domain(s).
- **Preview / Dev**: a safe environment to test changes before they reach production (Vercel preview deployments / non-production domains).
- For V1:
  - `ancientlabs.co` is served from the main marketing site project.
  - `goodtechproject.com` is a **separate Vercel project** with a single “essays hub” page.
  - Host-based routing within a single app is explicitly deferred to a later iteration.

## 10) Future-Proofing (Non-Build)

The site should hint at but not expose:

- AI Readiness Scoring Engine
- Reference Architecture
- Stack selection logic

Language should suggest “systems & method” without publishing IP.

## Founder Advice (Constraint Reminder)

Do not:

- Invent features
- Expand scope
- Turn this into a “platform”

Your edge is clarity and constraint.

