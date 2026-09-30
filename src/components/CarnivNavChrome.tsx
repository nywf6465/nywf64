"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { CARNIV_MENU_TOPICS } from "@/data/carnivMenu";

/**
 * Carniv menu chrome — nav bar + shared **carniv menu**.
 * Use on every page whose route begins with `carniv`.
 */
export function CarnivNavChrome() {
  return (
    <AttractionNavChrome
      topics={CARNIV_MENU_TOPICS}
      navLabel="Carnival"
    />
  );
}
