"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { SWEDEN_MENU_TOPICS } from "@/data/swedenMenu";

/**
 * Sweden menu chrome — nav bar (SWEDEN) + shared
 * **sweden menu**. Use on every page whose route begins with `sweden`.
 */
export function SwedenNavChrome() {
  return (
    <AttractionNavChrome topics={SWEDEN_MENU_TOPICS} navLabel="Sweden" />
  );
}
