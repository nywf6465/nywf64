/**
 * Footer “Updated mm.dd.yyyy” stamp.
 *
 * Prefer env override, else the single file written by
 * `scripts/write-site-updated.mjs` at build time. Do NOT walk `public/` or
 * `src/` at runtime — Next file tracing would pull ~235MB of assets into
 * every serverless function and Vercel packaging fails with ENOSPC.
 *
 * Optional override: set `NEXT_PUBLIC_SITE_UPDATED` or `SITE_UPDATED`.
 */
import fs from "node:fs";
import path from "node:path";

export function formatSiteUpdated(date: Date = new Date()): string {
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const yyyy = String(date.getFullYear());
  return `${mm}.${dd}.${yyyy}`;
}

/** Stamp from env, build-time file, or today. */
export function getSiteUpdated(): string {
  const override =
    process.env.NEXT_PUBLIC_SITE_UPDATED?.trim() ||
    process.env.SITE_UPDATED?.trim();
  if (override) return override;

  try {
    const stampPath = path.join(process.cwd(), "src/lib/site-updated.stamp");
    const stamp = fs.readFileSync(stampPath, "utf8").trim();
    if (stamp) return stamp;
  } catch {
    // stamp missing in bare `next dev` — fall through
  }

  return formatSiteUpdated(new Date());
}
