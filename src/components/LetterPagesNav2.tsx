import { Nav2Bar } from "@/components/Nav2Bar";
import { adjacentLetterPages } from "@/data/letterPages";

/**
 * Nav2 for lettered A–Z index pages: PREVIOUS / NEXT between letters.
 * Overview (“Back to Overview”) is omitted per letter-page spec.
 * Ends wrap among live letter routes (`/X` → `/A`).
 */
export function LetterPagesNav2({ letter }: { letter: string }) {
  const { previousHref, nextHref } = adjacentLetterPages(letter);
  return (
    <Nav2Bar
      previousHref={previousHref}
      nextHref={nextHref}
      explicitPrevious
      hideOverview
    />
  );
}
