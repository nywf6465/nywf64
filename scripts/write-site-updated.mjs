/**
 * Build-time helper: write a single stamp file with the newest mtime under
 * src/ + public/. Kept out of the Next bundle so file tracing does not pull
 * the entire public/ tree into every serverless function (ENOSPC on Vercel).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const IGNORE_DIRS = new Set(["node_modules", ".next", ".git"]);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outFile = path.join(root, "src/lib/site-updated.stamp");

function newestMtimeMs(dir) {
  let newest = 0;
  let entries;
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
        newest = Math.max(newest, fs.statSync(full).mtimeMs);
      }
    } catch {
      // skip unreadable entries
    }
  }
  return newest;
}

function formatSiteUpdated(date) {
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const yyyy = String(date.getFullYear());
  return `${mm}.${dd}.${yyyy}`;
}

const newest = Math.max(
  newestMtimeMs(path.join(root, "src")),
  newestMtimeMs(path.join(root, "public")),
);
const stamp = formatSiteUpdated(newest > 0 ? new Date(newest) : new Date());
fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, `${stamp}\n`, "utf8");
console.log(`site-updated.stamp → ${stamp}`);
