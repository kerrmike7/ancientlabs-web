# QA Checklist — Ancient Labs V1

Use this list before pushing to Preview or Production.

## Calendly CTA
- [ ] Both desktop header button and hero buttons open the Calendly link from `NEXT_PUBLIC_CALENDLY_URL`.
- [ ] CTA band buttons link to Calendly + `/contact#architecture-review`.
- [ ] When the env var is missing, the primary buttons render disabled with helpful title text.

## Contact Form (Web3Forms)
- [ ] Form loads successfully and shows the configured state (success/error) after submission.
- [ ] Honeypot + required-field validation block empty submissions.
- [ ] Success message surfaces after a successful Web3Forms response.

## Mobile Navigation
- [ ] Hamburger button opens the overlay without scrolling the underlying page.
- [ ] Navigating to a route closes the overlay automatically.
- [ ] Primary + secondary CTAs are visible in the overlay and respect env configuration.

## Release Checklist
Before merging `dev` → `main`:
- [ ] Verify all functionality on Preview URL (check Calendly CTAs, contact form submission)
- [ ] Verify all functionality on Production URL (ancientlabs.co)
- [ ] Confirm environment variables are set in Vercel for both Preview and Production
- [ ] Run `npm run lint` and `npm run build` locally (both should pass)
- [ ] Merge `dev` → `main` after all checks pass

## 2026-01-01 — Local QA Pass
- [x] Calendly CTAs — Header/hero/CTA band buttons across `/`, `/services`, `/payments`, `/process`, `/about`, `/insights`, and `/contact` resolve to `https://calendly.com/ancientlabs/ai-readiness`; CTA band secondary links point to `/contact#architecture-review`.
- [x] Calendly fallback — Restarted without `NEXT_PUBLIC_CALENDLY_URL`; header + hero + CTA band buttons render disabled with `title="Calendly not configured"` and contact page shows static label instead of link.
- [x] Contact form (Web3Forms) — Submitted happy path (httpbin endpoint) to reach success state, reset via “Send another message,” then forced a network failure to surface the inline error alert while inputs stayed populated.
- [x] Mobile navigation — Hamburger opens body-locking overlay, CTA buttons within overlay mirror env config, and selecting a route closes the panel automatically.
- [x] Metadata/OG — `metadataBase` stays `https://ancientlabs.co`; `og:url`, canonical references, and Twitter card assets resolve to the primary domain, and `og:image` continues to be served from `/opengraph-image` (Next.js serves it from the current origin in dev, but Preview/Prod inherit the canonical domain).
