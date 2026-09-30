"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { POOREF_MENU_TOPICS } from "@/data/poorefMenu";

/**
 * Pooref menu chrome — nav bar (POOL OF REFLECTIONS) + shared
 * **pooref menu**. Use on every page whose route begins with `pooref`.
 */
export function PoorefNavChrome() {
  return (
    <AttractionNavChrome
      topics={POOREF_MENU_TOPICS}
      navLabel="Pool of Reflections"
    />
  );
}
