"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { RHEING_MENU_TOPICS } from "@/data/rheingMenu";

/**
 * Rheingold menu chrome — nav bar + shared **rheing menu**.
 * Use on every page whose route begins with `rheing`.
 */
export function RheingNavChrome() {
  return (
    <AttractionNavChrome topics={RHEING_MENU_TOPICS} navLabel="Rheingold" />
  );
}
