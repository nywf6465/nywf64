"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { BOUSTR_MENU_TOPICS } from "@/data/boustrMenu";

/**
 * Boustr menu chrome — nav bar + shared **boustr menu**.
 * Use on every page whose route begins with `boustr`.
 */
export function BoustrNavChrome() {
  return (
    <AttractionNavChrome
      topics={BOUSTR_MENU_TOPICS}
      navLabel="Bourbon Street"
    />
  );
}
