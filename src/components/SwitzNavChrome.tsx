"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { SWITZ_MENU_TOPICS } from "@/data/switzMenu";

/**
 * Switz menu chrome — nav bar (SWITZERLAND) + shared
 * **switz menu**. Use on every page whose route begins with `switz`.
 */
export function SwitzNavChrome() {
  return (
    <AttractionNavChrome topics={SWITZ_MENU_TOPICS} navLabel="Switzerland" />
  );
}
