# Ancient Labs Website (V1) — Design Specification (Locked)

## 1. Design Tokens

### Color Palette
*Rationale: A strictly neutral, monochrome foundation to establish "infrastructure" credibility. One muted accent for interactive elements.*

*   **Backgrounds**
    *   `bg-default`: `#FFFFFF` (White)
    *   `bg-subtle`: `#F9FAFB` (Gray-50) — Used for cards/sections
    *   `bg-surface`: `#F3F4F6` (Gray-100) — Used for inputs/hovers
*   **Text**
    *   `text-primary`: `#111827` (Gray-900) — Headings, primary body
    *   `text-secondary`: `#4B5563` (Gray-600) — Supporting text
    *   `text-tertiary`: `#9CA3AF` (Gray-400) — Meta data, placeholders
    *   `text-inverse`: `#FFFFFF` (White) — On dark backgrounds
*   **Borders**
    *   `border-default`: `#E5E7EB` (Gray-200)
    *   `border-subtle`: `#F3F4F6` (Gray-100)
*   **Accent (Muted Indigo)**
    *   `accent-primary`: `#4F46E5` (Indigo-600) — Primary buttons, active states
    *   `accent-hover`: `#4338CA` (Indigo-700)
    *   `accent-subtle`: `#EEF2FF` (Indigo-50) — Badge backgrounds

### Typography
*Rationale: Clean, legible sans-serif (e.g., Inter or Geist Sans) with tight tracking for headings.*

*   **Scale**
    *   `Display`: 48px / 1.1 (Desktop), 36px (Mobile) — Hero headings
    *   `H1`: 36px / 1.2 — Section headings
    *   `H2`: 24px / 1.3 — Card titles
    *   `H3`: 20px / 1.4 — Subsections
    *   `Body`: 16px / 1.5 — Main text
    *   `Small`: 14px / 1.5 — UI elements, footer
    *   `Tiny`: 12px / 1.5 — Labels, tags
*   **Weights**
    *   `Regular`: 400
    *   `Medium`: 500
    *   `Semibold`: 600

### Spacing & Layout
*Rationale: Generous whitespace to convey confidence.*

*   **Container**: Max-width `1200px` (centered)
*   **Section Padding**: `py-24` (96px) desktop, `py-16` (64px) mobile
*   **Element Spacing**:
    *   `gap-4` (16px) — Tight groups
    *   `gap-8` (32px) — Card grids
    *   `gap-12` (48px) — Section content separation

### Border Radius
*   `rounded-sm`: 4px — Buttons, Inputs
*   `rounded-md`: 8px — Cards, Fast Trust Block

### Button Styles
*   **Primary**: `bg-indigo-600 text-white hover:bg-indigo-700 px-5 py-2.5 rounded-sm font-medium text-sm transition-colors`
    *   *Correction*: Uses accent color for primary action.
*   **Secondary**: `bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 px-5 py-2.5 rounded-sm font-medium text-sm transition-colors`
*   **Ghost**: `text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors`

---

## 2. Reusable Components

### Header
*   **Left**: Logomark + "Ancient Labs" (Semibold, tracking-tight)
*   **Center (Desktop)**: Services, Payments, Process, About
*   **Right**: "Book Readiness Call" (Secondary Button)
*   **Mobile**: Hamburger menu opens full-screen overlay.

### Footer
*   **Top**: 4-column grid (Company info, Site Links, Resources, Legal).
*   **Bottom**: Copyright text.
*   **Style**: `bg-subtle` or clean white with top border.

### CTA Band
*   **Content**: "Ready to build your data foundation?"
*   **Actions**:
    1.  Book an AI Readiness Call (Primary)
    2.  Request Architecture Review (Secondary)
*   **Visual**: Simple centered layout, `bg-subtle` background to separate from content.

### Card (Feature/Service)
*   **Structure**: Border (`border-default`), Padding (`p-6` or `p-8`), `bg-white`.
*   **Content**: Icon (monochrome SVG), Title (H2/H3), Description (Body text secondary).
*   **Interaction**: Subtle border color darken on hover.

### "Fast Trust" Block
*   **Purpose**: Instant credibility for execs.
*   **Style**: Compact grid, strong border or subtle background.
*   **Content Slots**:
    *   *Background*: "Ex-Stripe/Uber engineering leadership."
    *   *Shipped*: "$1B+ in payments volume processed." (Quantified)
    *   *Engagement*: "2-3 week sprints. Systems, not slides."

### Section Container
*   **Header**: Label (uppercase, small, tracking-wide, text-secondary) + Title (H1/Display).
*   **Body**: Content slot (Grid or list).

---

## 3. Low-Fidelity Wireframes

### Page: Home (/)

**1. Hero Section**
*   **Tagline**: [Badge: "Mid-Market Data & AI Studio"]
*   **Headline**: AI-Ready Data Foundations for the Mid-Market.
*   **Subhead**: (Split for scannability)
    *   Line 1: We build stack-agnostic data systems that preserve optionality and avoid vendor lock-in.
    *   Line 2: No chatbots, no generic consulting—just shipped infrastructure.
*   **Actions**:
    *   [Primary Button: Book AI Readiness Call] (Indigo)
    *   [Secondary Button: Request Architecture Review] (Neutral)

**2. Fast Trust Block (Horizontal Bar)**
*   *Grid of 3 items:*
    *   **Who**: "Engineering leadership from high-scale fintechs."
    *   **What**: "$1B+ in payments volume processed." (Quantified Anchor)
    *   **How**: "2-week sprints with clear deliverables."

**3. Value Prop (The "What We Do" Grid)**
*   *Headline*: "Systems, not advice."
*   *Card 1*: **AI Foundations**. Clean data pipelines ready for LLM context windows.
*   *Card 2*: **Financial Infrastructure**. Reconciliation and ledgering for complex flows.
*   *Card 3*: **Strategic Optionality**. Own your data. Switch models/vendors anytime.

**4. Anti-Positioning ("Not a Fit")**
*   *Headline*: "Who we are not."
*   *List*:
    *   We are not a creative agency for marketing chatbots.
    *   We are not a single-vendor implementation shop (e.g., Palantir-only).
    *   We do not staff augmentation for maintenance tickets.

**5. CTA Band**
*   *Text*: "Stop guessing. Start building."
*   *Actions*: [Book Call] [Review Architecture]

### Page: Services (/services)

**1. Header**
*   *Title*: Engagement Models
*   *Sub*: Designed for speed and tangible outcomes.

**2. Core Offers (Two-Column Layout)**
*   **Offer 1: The Foundation Sprint** (2 Weeks)
    *   *Best for*: Orgs with messy data needing a reset.
    *   *Deliverables*: Data audit, schema cleanup, initial pipeline deployment.
*   **Offer 2: The Architecture Review** (1 Week)
    *   *Best for*: Validation before big spend.
    *   *Deliverables*: Stack selection, buy vs. build memo, security assessment.

**3. "Not a fit" Recap**
*   (Brief version of Home page section)

**4. CTA Band**

### Page: Payments (/payments)

**1. Hero**
*   *Headline*: Financial Infrastructure for Scale.
*   *Sub*: Ledgering, reconciliation, and payment ops for marketplaces and fintechs.

**2. Trust Signals (Fast Trust Variation)**
*   "Experience handling $1B+ volume." | "PCI-compliant architecture patterns."

**3. Capabilities (Grid)**
*   *Reconciliation*: Automated matching of gateway payouts to internal DB.
*   *Ledgering*: Double-entry systems for truth.
*   *Ops Tooling*: Dashboards for finance teams, not just devs.

**4. CTA Band**

### Page: Process (/process)

**1. Hero**
*   *Headline*: How We Work.
*   *Sub*: Transparent, iterative, and rigorous.

**2. Timeline Component (Vertical)**
*   *Step 1*: **Audit (Week 0)**. We access your VPC/repo and map the territory.
*   *Step 2*: **Strategy (Day 2)**. We propose the stack and schema.
*   *Step 3*: **Build (Weeks 1-2)**. We deploy code to your environment.
*   *Step 4*: **Handoff**. Documentation and training for your team.

**3. Principles**
*   *Ownership*: You own the IP and the code.
*   *Simplicity*: Boring tech is better tech.

**4. CTA Band**

### Page: About (/about)

**1. Hero**
*   *Headline*: About Ancient Labs.
*   *Sub*: A small studio of senior engineers.

**2. Credibility / Bio**
*   (Short text block): "Founded by [Name], ex-[Company]. We exist to bridge the gap between enterprise ambition and mid-market reality."

**3. Philosophy**
*   "We believe AI is an infrastructure problem, not a magic trick."

**4. CTA Band**

### Page: Contact (/contact)

**1. Layout: Split or Centered**
*   **Left/Top**:
    *   *Headline*: Let's talk infrastructure.
    *   *Email*: hello@ancientlabs.co
    *   *CTAs*: Links to Calendar directly if preferred.
*   **Right/Bottom (The Form)**:
    *   Name (Input)
    *   Work Email (Input)
    *   Topic (Dropdown: AI Readiness, Architecture Review, Other)
    *   Message (Textarea)
    *   [Submit Button - Primary]

### Page: Insights (/insights)

**1. Hero**
*   *Headline*: Thinking & Writing.
*   *Sub*: Essays on data strategy and AI engineering.

**2. Content**
*   *Primary Link*: "Read our essays on Substack ->"
*   *Secondary Link*: "Visit the Good Tech Project ->"

**3. CTA Band**
