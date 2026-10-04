"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { THAI_MENU_TOPICS } from "@/data/thaiMenu";

/**
 * Thai menu chrome — nav bar (THAILAND) + shared
 * **thai menu**. Use on every page whose route begins with `thai`.
 */
export function ThaiNavChrome() {
  return (
    <AttractionNavChrome topics={THAI_MENU_TOPICS} navLabel="Thailand" />
  );
}
