"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { GENCIG_MENU_TOPICS } from "@/data/gencigMenu";

/**
 * General Cigar menu chrome — nav bar + shared **gencig menu**.
 * Use on every page whose route begins with `gencig`.
 */
export function GencigNavChrome() {
  return (
    <AttractionNavChrome topics={GENCIG_MENU_TOPICS} navLabel="General Cigar" />
  );
}
