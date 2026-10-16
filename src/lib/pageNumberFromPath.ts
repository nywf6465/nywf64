import { WOLFE_SLIDE_IDS } from "@/data/wolfeSlides";

/**
 * Extract a page label from a numbered attraction route (zero-suppressed).
 * `/trantrav05` → `"5"`, `/vatican10` → `"10"`. Overview/map/hub routes → null.
 *
 * Saga subpages `/ftwptf03-01` … `/ftwptf03-15` use book section numbering
 * `13-01` … `13-15` (not the trailing slug digits alone).
 *
 * Periodicals article scans (`life640508`, `newsweek640113`, `look640211b`,
 * `look640211c`, `post640328`, …) are Page 2 under their magazine index
 * (`*01` = Page 1). The YYMMDD date in the slug is not a page number.
 *
 * LOOK's Guide (`looksguide01` … `looksguide09`) continues after Look Index
 * Page 1: guide page NN shows Page N+1 (looksguide01 → Page 2, …, 09 → Page 10).
 *
 * Architectural Series: `archtray` → Page 1; `arch5401`…`arch5470` → Page 2…71
 * (slide number − 5399); `archS180A`…`archS187D` → Page 72…103.
 * Overview `/archoverview` has no Page notation.
 *
 * Wolfe Worldwide Films: `wolfetray` → Page 1; tray slides in legacy order
 * start at Page 2 (`wolfe79000` → Page 2). Overview `/wolfeoverview`
 * has no Page notation.
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

  // LOOK's Guide: looksguide01 → Page 2 … looksguide09 → Page 10
  const looksguide = segment.match(/^looksguide(\d+)$/i);
  if (looksguide) {
    const n = Number.parseInt(looksguide[1], 10);
    if (Number.isFinite(n) && n >= 1 && n <= 9) {
      return String(n + 1);
    }
  }

  // Architectural Series: archtray → Page 1; arch5401…arch5470 → Page 2…71
  // archS180A…archS187D → Page 72…103
  if (/^archtray$/i.test(segment) || /^wolfetray$/i.test(segment)) {
    return "1";
  }
  const wolfeSlide = segment.match(/^wolfe(\d{5})$/i);
  if (wolfeSlide) {
    const idx = WOLFE_SLIDE_IDS.indexOf(
      wolfeSlide[1] as (typeof WOLFE_SLIDE_IDS)[number],
    );
    if (idx >= 0) return String(idx + 2);
  }
  const archSlide = segment.match(/^arch(\d{4})$/i);
  if (archSlide) {
    const n = Number.parseInt(archSlide[1], 10);
    if (Number.isFinite(n) && n >= 5401 && n <= 5470) {
      return String(n - 5399);
    }
  }
  const archS = segment.match(/^archS(\d{3})([A-D])$/i);
  if (archS) {
    const set = Number.parseInt(archS[1], 10);
    const letter = archS[2].toUpperCase().charCodeAt(0) - 65; // A=0 … D=3
    if (Number.isFinite(set) && set >= 180 && set <= 187 && letter >= 0 && letter <= 3) {
      return String(72 + (set - 180) * 4 + letter);
    }
  }

  const match = segment.match(/^(?:[a-zA-Z][a-zA-Z0-9_-]*?)(\d+)$/);
  if (!match) return null;
  const n = Number.parseInt(match[1], 10);
  return Number.isFinite(n) && n > 0 ? String(n) : null;
}
