# Local Development — Ancient Labs V1

## 1. Install dependencies
```bash
npm install
```

## 2. Environment variables
1. Copy the example file:
   ```bash
   cp .env.local.example .env.local
   ```
2. Fill the placeholders with real values:
   - `NEXT_PUBLIC_CALENDLY_URL`
   - `NEXT_PUBLIC_CONTACT_ENDPOINT`
   - `NEXT_PUBLIC_WEB3FORMS_KEY`

> A tracked `.env.local.example` lives in the repo—update it whenever new env vars are introduced. These values are required for Calendly CTAs and the Web3Forms-powered contact form. The `.env.local` file is gitignored so you can use real keys during development.

### Vercel Deployment
**IMPORTANT**: These environment variables MUST be set in Vercel for BOTH Preview and Production environments:
- `NEXT_PUBLIC_CALENDLY_URL`
- `NEXT_PUBLIC_CONTACT_ENDPOINT`
- `NEXT_PUBLIC_WEB3FORMS_KEY`

Set them in Vercel Dashboard → Project Settings → Environment Variables. Without these, CTAs will be disabled and the contact form will show a fallback message.

## 3. Run the app
```bash
npm run dev
```

Visit http://localhost:3000 and confirm nav + CTAs load. When env vars are missing, CTAs automatically disable and the contact form shows an informational message.
