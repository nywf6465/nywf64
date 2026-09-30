"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { RM_MENU_TOPICS } from "@/data/rmMenu";

/**
 * Robert Moses menu chrome — nav bar + RM topic menu.
 * Use on every page whose route begins with `rm`.
 */
export function RmNavChrome() {
  return (
    <AttractionNavChrome topics={RM_MENU_TOPICS} navLabel="Robert Moses" />
  );
}
