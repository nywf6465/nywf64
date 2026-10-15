/**
 * LOOK's Guide to the N.Y. World's Fair — sequential pages 01–09.
 * Hand icons advance previous/next within this series (legacy looksguide.NN).
 */

export type LooksGuidePageMeta = {
  /** 1–9 */
  page: number;
  slug: string;
  /** Navy title suffix after “LOOK's Guide to the N.Y. World's Fair - ” */
  titleSuffix: string;
  /** Short label used in “Click the Hand … to go to/back to …” */
  handLabel: string;
};

export const LOOKSGUIDE_PAGES: LooksGuidePageMeta[] = [
  { page: 1, slug: "looksguide01", titleSuffix: "N.Y. City", handLabel: "N.Y City" },
  {
    page: 2,
    slug: "looksguide02",
    titleSuffix: "Keys to the City",
    handLabel: "Keys to the City",
  },
  {
    page: 3,
    slug: "looksguide03",
    titleSuffix: "Family Fair Plan",
    handLabel: "Family Fair Plan",
  },
  {
    page: 4,
    slug: "looksguide04",
    titleSuffix: "Going to the Fair",
    handLabel: "Going to the Fair",
  },
  {
    page: 5,
    slug: "looksguide05",
    titleSuffix: "Progressland Advertisement",
    handLabel: "Progressland Advertisement",
  },
  {
    page: 6,
    slug: "looksguide06",
    titleSuffix: "A Billion Dollars' Worth of Wonders",
    handLabel: "A Billion Dollars' Worth of Wonders",
  },
  {
    page: 7,
    slug: "looksguide07",
    titleSuffix: "What You'll See and Do",
    handLabel: "What You'll See and Do",
  },
  {
    page: 8,
    slug: "looksguide08",
    titleSuffix: "Food at the Fair",
    handLabel: "Food at the Fair",
  },
  {
    page: 9,
    slug: "looksguide09",
    titleSuffix: "Your Fair Memos",
    handLabel: "Your Fair Memos",
  },
];

export function looksguideHref(page: number): string {
  return `/looksguide${String(page).padStart(2, "0")}`;
}

export function getLooksGuidePage(page: number): LooksGuidePageMeta | undefined {
  return LOOKSGUIDE_PAGES.find((p) => p.page === page);
}

/** Adjacent guide pages for left/right hand icons (01–09). */
export function adjacentLooksGuidePages(page: number): {
  previous: LooksGuidePageMeta | null;
  next: LooksGuidePageMeta | null;
} {
  return {
    previous: page > 1 ? getLooksGuidePage(page - 1) ?? null : null,
    next: page < 9 ? getLooksGuidePage(page + 1) ?? null : null,
  };
}
