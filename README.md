# threadwick-home

The marketing homepage for **Threadwick** — a home for fiber artists and hobbyists — served at
[threadwick.com](https://threadwick.com). Its job is to introduce **Threadwick Studio** (a browser-based
crochet chart designer) and send people to it at `threadwick.com/studio`.

Built to match the Studio: **Vite + React 18 + TypeScript + Ant Design v5**, Iconoir icons, and the
Space Grotesk / Inter type pairing on a terracotta-on-cream palette.

## Develop

```bash
npm install
npm run dev        # local dev server (http://localhost:5173)
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
npm run test       # vitest
npm run build      # typecheck + lint + production build -> dist/
npm run preview    # serve the production build locally
```

## The "Open Studio" link

Every call to action points at one place, resolved in `src/config.ts`:

1. `VITE_STUDIO_URL` — explicit override (e.g. a local Studio dev server)
2. production build → `/studio` (served by the Vercel rewrite, see below)
3. dev / preview → the live Studio URL, so the link works before the rewrite exists

Override it for local testing:

```bash
VITE_STUDIO_URL=http://localhost:5173/ npm run dev
```

> In `npm run preview` the CTA resolves to `/studio`, which **404s locally** — that's expected. Vercel
> serves it in production. See the rewrite note below.

## Deploy (Vercel)

1. Import this repo in Vercel. It auto-detects Vite (build `npm run build`, output `dist`).
2. Add the domain `threadwick.com` in the Vercel dashboard and point DNS as Vercel instructs.
3. Production deploys from the default branch; every PR/branch gets an automatic preview URL.

`vercel.json` rewrites `/studio/*` to the Studio so both live under one domain — no GitHub Pages and no
Cloudflare needed.

### ⚠️ `/studio` coordination (Studio repo)

The Studio (`Eiluviann/threadwick`) currently builds with Vite `base: '/threadwick/'`, so its assets load
from `/threadwick/...` and **won't resolve under `/studio`** until its `base` is set to `/studio/` (or the
rewrite is extended to also proxy the asset path). Until that's coordinated, this homepage's CTA uses the
live Studio URL fallback in non-production builds.

## Assets

- `public/favicon.svg` — the brand mark.
- `public/og-image.png` — the 1200×630 social card. Regenerate from `public/og-image.svg` with
  `npm run og` (uses `@resvg/resvg-js`).

## Project layout

```
src/
  theme/        design tokens + the Ant Design ThemeConfig (single source of truth)
  providers/    ConfigProvider + IconoirProvider
  styles/       global.css + CSS-variable tokens
  components/   Wordmark, Header, Footer, OpenStudioButton, SectionHeading, Stitch*/GrannyChartMock
  sections/     Hero, DesignApproach, Features, HowItWorks, AccountBand, Faq
  data/         copy + stitch metadata (features, steps, faqs, stitches)
  config.ts     the Open Studio URL
```
