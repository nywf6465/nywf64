"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { ARCH_MENU_TOPICS } from "@/data/archMenu";

/**
 * Architectural Series of Slides menu chrome — nav bar
 * (“EXPLORE THIS TOPIC”) + topic cards.
 * Use on every page whose route begins with `arch` (series, not Arch of
 * Americana / `archamer*`).
 */
export function ArchNavChrome() {
  return (
    <AttractionNavChrome
      topics={ARCH_MENU_TOPICS}
      exploreNoun="TOPIC"
      menuTitle="Explore This Topic"
    />
  );
}
