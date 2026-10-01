"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { PENNSY_MENU_TOPICS } from "@/data/pennsyMenu";

/**
 * Pennsylvania menu chrome — nav bar + shared menu.
 * Use on `pennsyoverview` and `pennsylvania01`…`pennsylvania06`.
 */
export function PennsyNavChrome() {
  return (
    <AttractionNavChrome topics={PENNSY_MENU_TOPICS} navLabel="Pennsylvania" />
  );
}
