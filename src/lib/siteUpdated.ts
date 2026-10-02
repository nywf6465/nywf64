/**
 * Footer “nywf64.com Last Updated mm.dd.yyyy” stamp.
 *
 * Default: newest mtime under `src/` and `public/` (recursive), computed at
 * render/request time — not baked when next.config loads.
 *
 * Optional override: set `NEXT_PUBLIC_SITE_UPDATED` or `SITE_UPDATED` in the
 * environment to force a fixed stamp (e.g. release pinning).
 */
import fs from "node:fs";
import path from "node:path";

const IGNORE_DIRS = new Set(["node_modules", ".next", ".git"]);

export function formatSiteUpdated(date: Date = new Date()): string {
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const yyyy = String(date.getFullYear());
  return `${mm}.${dd}.${yyyy}`;
}

function newestMtimeMs(dir: string): number {
  let newest = 0;
  let entries: fs.Dirent[];
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return 0;
  }
  for (const ent of entries) {
    if (IGNORE_DIRS.has(ent.name)) continue;
    const full = path.join(dir, ent.name);
    try {
      if (ent.isDirectory()) {
        newest = Math.max(newest, newestMtimeMs(full));
      } else if (ent.isFile() || ent.isSymbolicLink()) {
        const st = fs.statSync(full);
        newest = Math.max(newest, st.mtimeMs);
      }
    } catch {
      // skip unreadable entries
    }
  }
  return newest;
}

/** Newest content mtime under src/ + public/, or env override. Call per render. */
export function getSiteUpdated(): string {
  const override =
    process.env.NEXT_PUBLIC_SITE_UPDATED?.trim() ||
    process.env.SITE_UPDATED?.trim();
  if (override) return override;

  const root = process.cwd();
  const newest = Math.max(
    newestMtimeMs(path.join(root, "src")),
    newestMtimeMs(path.join(root, "public")),
  );
  return formatSiteUpdated(newest > 0 ? new Date(newest) : new Date());
}
