/**
 * Extract a page label from a numbered attraction route (zero-suppressed).
 * `/trantrav05` → `"5"`, `/vatican10` → `"10"`. Overview/map/hub routes → null.
 *
 * Saga subpages `/ftwptf03-01` … `/ftwptf03-15` use book section numbering
 * `13-01` … `13-15` (not the trailing slug digits alone).
 *
 * Periodicals article scans (`life640508`, `newsweek640113`, `look640211c`,
 * `post640328`, …) are Page 2 under their magazine index (`*01` = Page 1).
 * The YYMMDD date in the slug is not a page number.
 */
export function pageNumberFromPath(pathname: string): string | null {
  const segment = pathname.replace(/\/+$/, "").split("/").pop() ?? "";

  const saga = segment.match(/^ftwptf03-(\d+)$/i);
  if (saga) {
    const n = Number.parseInt(saga[1], 10);
    if (Number.isFinite(n) && n >= 1 && n <= 15) {
      return `13-${String(n).padStart(2, "0")}`;
    }
  }

  // Magazine article scans: life/newsweek/look/post + YYMMDD + optional letter
  if (/^(?:life|newsweek|look|post)\d{6}[a-z]?$/i.test(segment)) {
    return "2";
  }

  const match = segment.match(/^(?:[a-zA-Z][a-zA-Z0-9_-]*?)(\d+)$/);
  if (!match) return null;
  const n = Number.parseInt(match[1], 10);
  return Number.isFinite(n) && n > 0 ? String(n) : null;
}
