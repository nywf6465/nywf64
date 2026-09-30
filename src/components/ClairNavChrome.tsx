"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { CLAIR_MENU_TOPICS } from "@/data/clairMenu";

/**
 * Clairol menu chrome — nav bar + shared **clair menu**.
 * Use on every page whose route begins with `clair`.
 */
export function ClairNavChrome() {
  return (
    <AttractionNavChrome topics={CLAIR_MENU_TOPICS} navLabel="Clairol" />
  );
}
