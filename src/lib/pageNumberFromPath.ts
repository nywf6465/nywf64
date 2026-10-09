/**
 * Extract a zero-suppressed page number from a numbered attraction route.
 * `/trantrav05` → 5, `/vatican10` → 10. Overview/map/hub routes → null.
 */
export function pageNumberFromPath(pathname: string): number | null {
  const segment = pathname.replace(/\/+$/, "").split("/").pop() ?? "";
  const match = segment.match(/^(?:[a-zA-Z][a-zA-Z0-9_-]*?)(\d+)$/);
  if (!match) return null;
  const n = Number.parseInt(match[1], 10);
  return Number.isFinite(n) && n > 0 ? n : null;
}
