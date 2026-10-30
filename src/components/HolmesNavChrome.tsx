"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { HOLMES_MENU_TOPICS } from "@/data/holmesMenu";

/**
 * Gary Holmes menu chrome — nav bar + Holmes topic menu.
 * Use on every page whose route begins with `holmes`.
 */
export function HolmesNavChrome() {
  return (
    <AttractionNavChrome
      topics={HOLMES_MENU_TOPICS}
      navLabel="Gary Holmes"
      exploreNoun="PERSON"
      menuTitle="Explore This Person"
    />
  );
}
