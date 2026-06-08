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

Every call to action points at `/studio`, resolved in `src/config.ts`:

1. `VITE_STUDIO_URL` — explicit override (e.g. a local Studio dev server)
2. otherwise `/studio` (served by the Vercel rewrite, see below)

`/studio` only resolves where the rewrite exists (production and Vercel previews); in a bare local
`vite dev`/`preview` it **404s — that's expected**. Point it somewhere real for local testing:

```bash
VITE_STUDIO_URL=http://localhost:5173/ npm run dev
```

## Deploy (Vercel)

1. Import this repo in Vercel. It auto-detects Vite (build `npm run build`, output `dist`).
2. Add the domain `threadwick.com` in the Vercel dashboard and point DNS as Vercel instructs.
3. Production deploys from the default branch; every PR/branch gets an automatic preview URL.

Attach `threadwick.com` to **this** project only. A Vercel domain can live on a single project, so the
Studio is *not* given the apex domain — it's reached through a proxy rewrite instead.

### How `/studio` works

`threadwick.com` is served by this project; `vercel.json` proxies the Studio in place:

- `/studio` → the Studio's index (`https://eiluviann.github.io/threadwick/`)
- `/studio/*` and `/threadwick/*` → the Studio's files

The Studio builds with Vite `base: '/threadwick/'`, so its HTML requests assets from `/threadwick/...`;
the `/threadwick/*` rewrite forwards those to the Studio's origin. This means **no change is needed in the
Studio repo** — it keeps running on GitHub Pages, and the homepage proxies to it. To repoint the Studio
origin (e.g. to a Vercel deployment), update the three `destination` URLs in `vercel.json`.

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
