# CoolFixUSA

Marketing site for CoolFixUSA — same-day AC repair, installation, and maintenance.
Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build && npm start   # production
```

## Environment

Copy `.env.example` → `.env.local` and fill in what you need. **Everything is optional** —
the booking form works and stores leads locally (`leads.jsonl`, `uploads/`) without any keys.

| Variable | Purpose |
|---|---|
| `GMAIL_USER`, `GMAIL_APP_PASSWORD` | Email booking leads to your inbox (Gmail App Password). |
| `LEAD_EMAIL` | Destination inbox (default `coolfixusa@gmail.com`). |
| `NEXT_PUBLIC_FB_PIXEL_ID` | Meta Pixel — fires `PageView` + `Lead`. Dormant until set. |
| `NEXT_PUBLIC_GA_ID` | GA4 / Google Ads (`G-…`). Dormant until set. |

## Structure

- `app/` — routes: `/` (landing), `/privacy`, `/terms`, `api/lead` (booking endpoint), `robots.ts`, `sitemap.ts`.
- `components/sections/` — page sections (Nav, Hero, Advantages, Services, Process, Testimonials, FAQ, ClosingBand, Contact, Footer).
- `components/ui/` — Reveal, CountUp, CTA, Eyebrow, MotionRoot.
- `lib/` — `copy.ts` (all site copy), `motion.ts`, `track.ts`.
- `public/media/` — hero video, product renders, review photos.

## Booking → lead flow

`components/sections/Contact.tsx` (3-step wizard) → `POST /api/lead` (multipart):
validate → honeypot → save optional photo to `uploads/` → append `leads.jsonl` →
email to `LEAD_EMAIL` via Gmail (if configured). A `Lead` conversion event fires for ads.

## Notes

- Privacy/Terms pages are general templates — have them reviewed by an attorney before launch.
- `leads.jsonl`, `uploads/`, and `.env.local` are git-ignored (no PII/secrets committed).
