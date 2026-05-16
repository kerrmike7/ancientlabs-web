# Onboarding — Ancient Labs Website

Handoff doc for a new machine, editor, or agent that needs to clone, run, and ship changes.

## GitHub repository

| Field | Value |
|-------|--------|
| **Owner / repo** | `kerrmike7/ancientlabs-web` |
| **Clone (HTTPS)** | `https://github.com/kerrmike7/ancientlabs-web.git` |
| **Clone (SSH)** | `git@github.com:kerrmike7/ancientlabs-web.git` |
| **Default branch on GitHub** | `main` (scaffold only today) |
| **Branch with the real site** | `v1-qa-polish` |

The npm package name in `package.json` is `ancient-labs-web` — that is **not** the GitHub repo name. Use **`ancientlabs-web`** when cloning or configuring integrations.

Local folder name on disk can be anything (e.g. `AL website`); it does not affect Git remotes.

## Quick start

```bash
git clone https://github.com/kerrmike7/ancientlabs-web.git
cd ancientlabs-web
git checkout v1-qa-polish

npm install
cp .env.local.example .env.local
# Fill NEXT_PUBLIC_* values (see below), then:
npm run dev
```

Open http://localhost:3000. Run `npm run build` and `npm run lint` before opening a PR.

## Environment variables

Copy `.env.local.example` → `.env.local` (gitignored). All three are required for full Calendly + contact form behavior:

- `NEXT_PUBLIC_CALENDLY_URL`
- `NEXT_PUBLIC_CONTACT_ENDPOINT`
- `NEXT_PUBLIC_WEB3FORMS_KEY`

Secrets are **not** in the repo. Get values from whoever owns Calendly / Web3Forms, or from **Vercel → Project → Settings → Environment Variables** (set for both Preview and Production).

See also: `docs/dev.md`.

## Access checklist

| Need | Who grants it |
|------|----------------|
| GitHub read/write on `kerrmike7/ancientlabs-web` | Repo owner |
| `.env.local` values | Owner / Vercel dashboard |
| Vercel deploy + domain | Vercel team invite |
| `ancientlabs.co` DNS | Porkbun (points to Vercel) |

No database, Supabase, or server API keys for V1.

## Project shape

- **Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind v4
- **Config:** `src/siteConfig.ts` (nav, CTAs, domains), `src/lib/runtimeConfig.ts` (env)
- **Pages:** `src/app/` — `/`, `/services`, `/payments`, `/process`, `/about`, `/insights`, `/contact`, `/privacy`
- **Docs:** `docs/ancient-labs-website-prd.md`, `docs/design-spec.md`, `docs/qa.md`, `docs/erd.md` (conceptual only, not a DB)

`goodtechproject.com` is a **separate** Vercel project per PRD; not in this repo for V1.

## Branch workflow

**Today:** Production-quality site code is on `v1-qa-polish`. `main` is still mostly create-next-app boilerplate.

**Target:** Single default branch `main` with the full site.

### Merge `v1-qa-polish` → `main` (one-time)

Run locally after GitHub access is confirmed:

```bash
git fetch origin
git checkout main
git pull origin main
git merge origin/v1-qa-polish
# Resolve conflicts if any, then:
npm run build
npm run lint
git push origin main
```

Then in Vercel: set **Production Branch** to `main` if it isn’t already. Future work: branch from `main`, PR → Preview → merge → Production at `ancientlabs.co`.

### Ongoing

1. Branch from `main` (after merge) or from `v1-qa-polish` (until merge is done)
2. PR → Vercel Preview URL
3. QA per `docs/qa.md`
4. Merge to `main` for production

## For automated editors / agents

Pass these identifiers to the other app:

```text
github_repo: kerrmike7/ancientlabs-web
clone_url: https://github.com/kerrmike7/ancientlabs-web.git
work_branch: v1-qa-polish
site_url: https://ancientlabs.co
```

Until `v1-qa-polish` is merged to `main`, checkout **`v1-qa-polish`** to edit the live site code.
