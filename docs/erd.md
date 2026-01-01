# Ancient Labs V1 Marketing Site — Entity Relationship Diagram

This ERD represents the Ancient Labs V1 marketing site as a **content + wiring system**. Unlike traditional database ERDs, this diagram models the site's structure: pages, CTAs, external integrations, environment variables, and deployment configurations. It documents how content flows through the site and how external services are wired via environment variables.

## ERD Diagram

```mermaid
erDiagram
  SITE ||--o{ PAGE : has
  SITE ||--o{ NAV_ITEM : exposes
  SITE ||--o{ CTA : defines
  SITE ||--o{ EXTERNAL_LINK : owns
  SITE ||--o{ ENV_VAR : requires
  SITE ||--o{ DEPLOYMENT : ships

  PAGE ||--o{ SECTION : contains
  PAGE ||--o{ CTA_PLACEMENT : renders
  PAGE ||--o{ OUTBOUND_LINK : links_to

  CTA ||--o{ CTA_PLACEMENT : used_in
  EXTERNAL_LINK ||--o{ OUTBOUND_LINK : target_of

  FORM ||--o{ FORM_FIELD : includes
  FORM ||--o{ ENV_VAR : depends_on
  PAGE ||--o| FORM : hosts

  DEPLOYMENT }o--|| GIT_BRANCH : built_from
  DEPLOYMENT }o--|| ENVIRONMENT : deploys_to
  ENV_VAR }o--|| ENVIRONMENT : scoped_to

  SITE {
    string id
    string name
    string primary_domain
    string secondary_domain
  }

  PAGE {
    string slug
    string title
    string description
    boolean has_fast_trust
  }

  SECTION {
    string type  "Hero|FastTrust|ValueGrid|NotAFit|Timeline|CTA_Band|Legal"
    int sort_order
  }

  NAV_ITEM {
    string label
    string href
    int sort_order
  }

  CTA {
    string key "readiness|architecture_review"
    string label
    string href_source "env|internal_route"
  }

  CTA_PLACEMENT {
    string page_slug
    string cta_key
    string location "header|hero|cta_band|footer|contact"
  }

  EXTERNAL_LINK {
    string key "calendly|substack|goodtechproject"
    string url_source "env|config"
  }

  OUTBOUND_LINK {
    string page_slug
    string link_key
    string href
  }

  FORM {
    string key "contact"
    string submit_method "POST"
  }

  FORM_FIELD {
    string name "name|email|topic|message|honeypot"
    string type "text|email|select|textarea|hidden"
    boolean required
  }

  ENV_VAR {
    string key "NEXT_PUBLIC_CALENDLY_URL|NEXT_PUBLIC_WEB3FORMS_KEY|NEXT_PUBLIC_CONTACT_ENDPOINT"
  }

  GIT_BRANCH {
    string name "main|dev|feature/*"
  }

  ENVIRONMENT {
    string name "preview|production"
  }

  DEPLOYMENT {
    string url
    datetime created_at
  }
```

## Mapping to Locked Decisions

### Global CTAs (2 Total)
- **`readiness`**: "Book AI Readiness Call" → wired via `NEXT_PUBLIC_CALENDLY_URL` (env-driven)
- **`architecture_review`**: "Request Architecture Review" → routes to `/contact#architecture-review` (internal route)

Both CTAs are defined in `siteConfig.ts` and placed across pages via `CTA_PLACEMENT` (header, hero, CTA band, footer).

### Environment-Driven Wiring
- **Calendly**: `NEXT_PUBLIC_CALENDLY_URL` → used by `readiness` CTA
- **Web3Forms**: `NEXT_PUBLIC_WEB3FORMS_KEY` → used by contact form submission
- **Contact Endpoint**: `NEXT_PUBLIC_CONTACT_ENDPOINT` → form POST target

All external integrations are configured via environment variables (no hardcoded URLs or keys).

### Pages/Routes
The site exposes 8 routes:
- `/` (Home)
- `/services`
- `/payments`
- `/process`
- `/about`
- `/contact` (includes form)
- `/insights`
- `/privacy`

Each `PAGE` contains multiple `SECTION` types (Hero, FastTrust, ValueGrid, NotAFit, Timeline, CTA_Band, Legal) and renders CTAs via `CTA_PLACEMENT`.

### Preview vs Production
- **Production**: `main` branch → deploys to `ancientlabs.co` (primary domain)
- **Preview**: PR/branch deployments → Vercel preview URLs

`DEPLOYMENT` entities track which `GIT_BRANCH` built them and which `ENVIRONMENT` they target. `ENV_VAR` values are scoped per `ENVIRONMENT` (preview can use test endpoints; production uses live endpoints).
