"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { BERLIN_MENU_TOPICS } from "@/data/berlinMenu";

/**
 * Berlin menu chrome — nav bar + shared **berlin menu**.
 * Use on every page whose route begins with `berlin`.
 */
export function BerlinNavChrome() {
  return (
    <AttractionNavChrome
      topics={BERLIN_MENU_TOPICS}
      navLabel="Berlin"
    />
  );
}
