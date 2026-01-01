# Today — Ancient Labs Website (V1)

Goal: **ship a credible, working V1 today** — real pages, real CTAs (that convert), working contact form, deployed to `ancientlabs.co` with a clean preview → production flow.

## A) Project setup (morning)

1) **Create Next.js app (App Router) + Tailwind**
- **Do**: Run `npx create-next-app@latest` with TypeScript, Tailwind, App Router.
- **Done when**: `next dev` runs, `next build` succeeds, Tailwind utility classes render in the browser.

2) **Set up layout shell**
- **Do**: Implement `app/layout.tsx` with global container + base typography; add `Header` + `Footer` components.
- **Done when**: All pages share the same header/footer and base spacing on desktop + mobile.

3) **Add minimal design tokens + primitives**
- **Do**: Define Tailwind theme tokens (colors, spacing, radii, typography) and create primitives: `Container`, `Section`, `Button`, `Card`, `Badge`, plus a `cn()` helper.
- **Done when**: You can build sections using these primitives without ad-hoc one-off styling.

3.1) **Create `siteConfig.ts`**
- **Do**: Add a small `siteConfig.ts` with:
  - Site name, tagline
  - Domains (`ancientlabs.co`, `goodtechproject.com`)
  - Nav items
  - Two CTA configs (labels + hrefs)
  - Social links (optional)
- **Done when**: Header/footer + CTA components read from `siteConfig` instead of hardcoding values all over the codebase.

## B) Routing + navigation

4) **Implement routes (empty but real)**
- **Do**: Create `app/(site)/` routes for:
  - `/`, `/services`, `/process`, `/payments`, `/insights`, `/about`, `/contact`, `/privacy`
- **Done when**: All routes render without errors and linkable paths exist for nav.

5) **Navigation + mobile menu**
- **Do**: Implement top nav with active state + simple mobile menu (no heavy animation).
- **Done when**: You can move between all pages on desktop and mobile without layout glitches.

6) **Global CTAs with real links**
- **Do**:
  - Wire the two CTAs from `siteConfig`:
    - “Book an AI Readiness Call” → real calendar link (e.g., Calendly).
    - “Request an Architecture Review” → either a separate calendar link or `/contact#architecture-review`.
  - Reuse a shared CTA component on all pages.
- **Done when**:
  - No placeholder `#` links remain.
  - Every page has at least one of the two CTAs.

## C) Pages (V1-only, keep scope tight)

7) **Home page V1 (not V1.1)**
- **Do**: Build a tight V1 Home page with:
  - Hero (clear positioning) + 3 bullets
  - The two CTAs above the fold
  - “What we do” section (e.g., AI foundations + payments systems cards)
  - “Not a fit” section
  - CTA band
  - Fast trust micro-section (background, what you’ve shipped, how engagements run)
- **Done when**: A new visitor can understand “what you do” in <60 seconds and see a plausible background, without fancy motion or extra storytelling.

8) **Services page V1**
- **Do**:
  - Two core offers + simple deliverables lists
  - Short “Not a fit” recap
  - CTA band
- **Done when**: A buyer can see what they get in a sprint/engagement and who this is **not** for.

9) **Payments landing page V1**
- **Do**:
  - Headline for regulated/infra buyers
  - 3 capability cards (e.g., APIs, reconciliation, internal tools)
  - Fast trust block repeated/adjusted for payments
  - CTA band
- **Done when**: A payments/infra exec sees themselves on the page and has a clear next step.

10) **Process page V1**
- **Do**:
  - 5-step timeline of how engagements run
  - 3 principles bullets
- **Done when**: A prospect can see what working together looks like end-to-end.

11) **About page V1**
- **Do**:
  - Short bio + credibility bullets (no heavy storytelling)
  - Link back to services/payments
- **Done when**: An exec can quickly answer “Who’s behind this?” without scrolling forever.

12) **Insights page V1**
- **Do**:
  - Simple explanation + link to Substack
  - Link/mention of the Good Tech Project essays hub
- **Done when**: Page loads fast, has one main external link, and no pseudo-blog on-site.

13) **Privacy page boilerplate**
- **Do**: Add a basic privacy policy and footer link.
- **Done when**: `/privacy` renders cleanly and is reachable from the footer.

*(Anything beyond this – case-study sections, extra motion, deep principles content – is V1.1, not today.)*

## D) Contact + form wiring (afternoon)

14) **Contact page form + endpoint env var + states**
- **Do**:
  - Build a lightweight contact form on `/contact`.
  - Use a hosted form provider (Formspree / Web3Forms / similar).
  - Configure `NEXT_PUBLIC_CONTACT_ENDPOINT` (or equivalent) for the POST target.
  - Add clear success + error UI, and disable the button while submitting.
- **Done when**: Form submits successfully in dev against the real endpoint and shows proper states.

15) **Honeypot + basic validation**
- **Do**:
  - Add a honeypot field for spam.
  - Add basic required-field validation (name, email, message).
- **Done when**: Normal users never see the honeypot, obvious bot submissions get dropped by the provider, and validation errors are clear.

## E) SEO + deploy (late afternoon)

16) **Metadata + OG defaults**
- **Do**: Implement Next.js `metadata` for global defaults + per-page titles/descriptions; add a default OG image reference.
- **Done when**: Build has no missing metadata issues; sharing a key page shows coherent title/description/image.

17) **robots + sitemap**
- **Do**: Add simple `robots.txt` and `sitemap.xml` for all static routes.
- **Done when**: Both files exist at the root and list/include the planned pages.

18) **Deploy to Vercel (preview/prod workflow)**
- **Do**:
  - Create Vercel project for the main site.
  - Set env vars (contact endpoint, any CTA URLs if env-based).
  - Ensure non-main branches get Preview deployments; `main` deploys to Production.
- **Done when**: Vercel shows a working Production URL + at least one Preview deployment from a branch.

19) **Connect ancientlabs.co to main site**
- **Do**:
  - Add `ancientlabs.co` (and `www.ancientlabs.co` with redirect) as domains in Vercel.
  - Point Porkbun DNS records to Vercel per their docs.
- **Done when**: Visiting `ancientlabs.co` shows the marketing site and canonical redirect behavior is correct.

## F) GoodTechProject (separate, simple project)

20) **Create GoodTechProject Vercel project (Option A)**
- **Do**:
  - Spin up a tiny Next.js or static project for `goodtechproject.com` (can reuse the same UI shell if easy).
  - Create a single “essays hub” page with links to Substack and any key essays.
  - Connect `goodtechproject.com` in Vercel and configure Porkbun DNS.
- **Done when**: Visiting `goodtechproject.com` shows the hub page and the main site remains isolated.

## G) Final QA (end of day)

21) **Responsive + link + CTA QA**
- **Do**: Quick pass on mobile/tablet/desktop; click through nav, CTAs, `/insights` external link, GoodTechProject, and contact form.
- **Done when**: No broken links, obvious layout issues, or dead CTAs.

22) **Production form submission test**
- **Do**: Submit a real test message from the Production site and verify receipt via the form provider.
- **Done when**: You’ve seen at least one successful production submission end-to-end.

