"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { MEMORIES_MENU_TOPICS } from "@/data/memoriesMenu";

/**
 * Memories / Katherine Khalife menu chrome — nav bar + topic menu.
 * Use on every page whose route begins with `memories`.
 */
export function MemoriesNavChrome() {
  return (
    <AttractionNavChrome
      topics={MEMORIES_MENU_TOPICS}
      navLabel="Katherine Khalife"
      exploreNoun="PERSON"
      menuTitle="Explore This Person"
    />
  );
}
