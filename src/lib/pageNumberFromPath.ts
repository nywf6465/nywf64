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
 * Photo Lab Slide Set: `photolabtray01` → Page 1; `photolab5601`…`photolab5650`
 * → Page 2…51. `photolabtray02` → Page 1; `photolab5471`…`photolab5540`
 * → Page 2…71. `photolabtray03` → Page 1; `photolabS301A`…`photolabS313D`
 * → Page 2…53. The tray-2 closer is also published at `/photolab55340`
 * (legacy plab5540) and shows Page 71. Overview `/photolaboverview` has no
 * Page notation.
 *
 * Wolfe Worldwide Films: `wolfetray` → Page 1; tray slides in legacy order
 * start at Page 2 (`wolfe79000` → Page 2). From `/wolfe79125` onward,
 * Page numbers run sequentially starting at Page 71 (79125 → 71, …).
 * Overview `/wolfeoverview` has no Page notation.
 *
 * MAINLINER: `mainlinertray01` and `mainlinertray02` → Page 1.
 * `mainliner55501`…`mainliner555100` → Page 2…101.
 * `mainliner63301`…`mainliner633100` → Page 2…101. Overview
 * `/mainlineroverview` has no Page notation.
 *
 * World’s Fair Matchbook Collection (NEXT order):
 * `matchbooksoverview` → Page 1; gallery slugs → Pages 2–7
 * (`matchbooks01`…`05` → 2…6; `matchbooks08` → 7).
 * Removed: `/matchbooks06`, `/matchbooks07`.
 *
 * World’s Fair Scrapbook: `scrapbookoverview` → Page 1;
 * `scrapbook01`… → Page 2… (route number + 1).
 *
 * The View-Masters Reels: `vmoverview` → Page 1;
 * `vm01`… → Page 2… (route number + 1) when gallery pages exist.
 *
 * World’s Fair Postcard Collection: `pcardsoverview` → Page 1
 * (legacy pcards01 Introduction); `pcards01`… → Page 2… (legacy pcards02…).
 *
 * Postage Stamps of the Fair: `stampsoverview` → Page 1;
 * `stamps01`… → Page 2… (route number + 1).
 *
 * The “Edu-Cards” Set: `educardsoverview` → Page 1;
 * `educards01`… → Page 2… (route number + 1) when feature pages exist.
 */
export function pageNumberFromPath(pathname: string): string | null {
  const segment = pathname.replace(/\/+$/, "").split("/").pop() ?? "";

  // Matchbook Collection overview — Page 1 on the nav bar
  if (/^matchbooksoverview$/i.test(segment)) {
    return "1";
  }
  // World’s Fair Scrapbook overview — Page 1 on the nav bar
  if (/^scrapbookoverview$/i.test(segment)) {
    return "1";
  }
  // The View-Masters Reels overview — Page 1 on the nav bar
  if (/^vmoverview$/i.test(segment)) {
    return "1";
  }
  // Postcard Collection overview (legacy pcards01) — Page 1 on the nav bar
  if (/^pcardsoverview$/i.test(segment)) {
    return "1";
  }
  // Postage Stamps of the Fair overview — Page 1 on the nav bar
  if (/^stampsoverview$/i.test(segment)) {
    return "1";
  }
  // The “Edu-Cards” Set overview — Page 1 on the nav bar
  if (/^educardsoverview$/i.test(segment)) {
    return "1";
  }
  const vmGallery = segment.match(/^vm(\d+)$/i);
  if (vmGallery) {
    const n = Number.parseInt(vmGallery[1], 10);
    if (Number.isFinite(n) && n >= 1) {
      return String(n + 1);
    }
  }
  // Gallery pages: pcards01 → Page 2, pcards02 → Page 3, …
  const pcardsGallery = segment.match(/^pcards(\d+)$/i);
  if (pcardsGallery) {
    const n = Number.parseInt(pcardsGallery[1], 10);
    if (Number.isFinite(n) && n >= 1) {
      return String(n + 1);
    }
  }
  const stampsGallery = segment.match(/^stamps(\d+)$/i);
  if (stampsGallery) {
    const n = Number.parseInt(stampsGallery[1], 10);
    if (Number.isFinite(n) && n >= 1) {
      return String(n + 1);
    }
  }
  const educardsGallery = segment.match(/^educards(\d+)$/i);
  if (educardsGallery) {
    const n = Number.parseInt(educardsGallery[1], 10);
    if (Number.isFinite(n) && n >= 1) {
      return String(n + 1);
    }
  }

  const scrapbookGallery = segment.match(/^scrapbook(\d+)$/i);
  if (scrapbookGallery) {
    const n = Number.parseInt(scrapbookGallery[1], 10);
    if (Number.isFinite(n) && n >= 1) {
      return String(n + 1);
    }
  }
  // Gallery pages in NEXT order (06/07 removed — no Page label)
  const matchbooksGallery = segment.match(/^matchbooks(\d+)$/i);
  if (matchbooksGallery) {
    const n = Number.parseInt(matchbooksGallery[1], 10);
    if (n === 6 || n === 7) return null;
    if (Number.isFinite(n) && n >= 1 && n <= 5) {
      return String(n + 1);
    }
    if (n === 8) {
      return "7";
    }
    return null;
  }

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
  if (
    /^archtray$/i.test(segment) ||
    /^photolabtray0[123]$/i.test(segment) ||
    /^wolfetray$/i.test(segment) ||
    /^mainlinertray0[12]$/i.test(segment)
  ) {
    return "1";
  }
  const mainlinerSlide = segment.match(/^mainliner(?:555|633)(\d+)$/i);
  if (mainlinerSlide) {
    const n = Number.parseInt(mainlinerSlide[1], 10);
    if (Number.isFinite(n) && n >= 1 && n <= 100) return String(n + 1);
  }
  const photolabSlide = segment.match(/^photolab(\d{4})$/i);
  if (photolabSlide) {
    const n = Number.parseInt(photolabSlide[1], 10);
    if (Number.isFinite(n) && n >= 5601 && n <= 5650) {
      return String(n - 5599);
    }
    if (Number.isFinite(n) && n >= 5471 && n <= 5540) {
      return String(n - 5469);
    }
  }
  // Tray-2 closer published at the five-digit route (legacy plab5540).
  if (/^photolab55340$/i.test(segment)) {
    return "71";
  }
  // Super Scenic Series: tray 3 is Page 1; S301A…S313D are Page 2…53.
  const photolabScenic = segment.match(/^photolabS(\d{3})([A-D])$/i);
  if (photolabScenic) {
    const set = Number.parseInt(photolabScenic[1], 10);
    const letter = photolabScenic[2].toUpperCase().charCodeAt(0) - 65;
    if (Number.isFinite(set) && set >= 301 && set <= 313 && letter >= 0 && letter <= 3) {
      return String(2 + (set - 301) * 4 + letter);
    }
  }
  if (/^photolab/i.test(segment)) {
    return null;
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
