"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { POOLIN_MENU_TOPICS } from "@/data/poolinMenu";

/**
 * Poolin menu chrome — nav bar (POOL OF INDUSTRY) + shared
 * **poolin menu**. Use on every page whose route begins with `poolin`.
 */
export function PoolinNavChrome() {
  return (
    <AttractionNavChrome
      topics={POOLIN_MENU_TOPICS}
      navLabel="Pool of Industry "
    />
  );
}
