/**
 * Single source for the "Open Studio" destination.
 *
 * Resolution order:
 *   1. VITE_STUDIO_URL (explicit override, e.g. a local Studio dev server)
 *   2. production build -> "/studio" (served by the Vercel rewrite in vercel.json)
 *   3. dev / preview    -> the live Studio URL, so the link works without the rewrite
 */
const LIVE_STUDIO_URL = 'https://eiluviann.github.io/threadwick/';

export const STUDIO_URL: string =
  import.meta.env.VITE_STUDIO_URL ?? (import.meta.env.PROD ? '/studio' : LIVE_STUDIO_URL);

/** Public repository for the Studio (used for the footer link). */
export const STUDIO_REPO_URL = 'https://github.com/Eiluviann/threadwick';

/**
 * True when the resolved Studio URL leaves this origin. Used to decide whether the
 * CTA should open in a new tab (external) or navigate in place (same-origin /studio).
 */
export const STUDIO_IS_EXTERNAL = /^https?:\/\//i.test(STUDIO_URL);
