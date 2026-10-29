"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { ARCH_MENU_TOPICS } from "@/data/archMenu";

/**
 * Architectural Series of Slides menu chrome — nav bar
 * (“EXPLORE THE SLIDES”) + topic cards.
 * Use on every page whose route begins with `arch` (series, not Arch of
 * Americana / `archamer*`).
 */
export function ArchNavChrome() {
  return (
    <AttractionNavChrome
      topics={ARCH_MENU_TOPICS}
      exploreLabel="EXPLORE THE SLIDES"
      menuTitle="Explore The Slides"
    />
  );
}
