"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { SCHCEN_MENU_TOPICS } from "@/data/schcenMenu";

/**
 * Schcen menu chrome — nav bar (**SCHAEFER**) + schcen menu.
 * Use on every page whose route begins with `schcen`.
 */
export function SchcenNavChrome() {
  return (
    <AttractionNavChrome topics={SCHCEN_MENU_TOPICS} navLabel="Schaefer" />
  );
}
