/**
 * Lettered A–Z attraction index pages that exist on the site.
 * Order is alphabetical among live routes (Y/Z not built yet; Q/X are nav stubs).
 */
export const LETTER_PAGES = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
] as const;

export type LetterPage = (typeof LETTER_PAGES)[number];

/** Wrap at ends among live letters: `/X` → `/A`, `/A` → `/X`. */
export function adjacentLetterPages(letter: string): {
  previousHref: string;
  nextHref: string;
} {
  const upper = letter.toUpperCase();
  const idx = LETTER_PAGES.indexOf(upper as LetterPage);
  if (idx < 0) {
    return { previousHref: "/atoz", nextHref: "/atoz" };
  }
  const prev = LETTER_PAGES[(idx - 1 + LETTER_PAGES.length) % LETTER_PAGES.length];
  const next = LETTER_PAGES[(idx + 1) % LETTER_PAGES.length];
  return { previousHref: `/${prev}`, nextHref: `/${next}` };
}
