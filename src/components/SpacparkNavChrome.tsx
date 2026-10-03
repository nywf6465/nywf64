"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { SPACPARK_MENU_TOPICS } from "@/data/spacparkMenu";

/**
 * Spacpark menu chrome — nav bar (SPACE PARK) + shared
 * **spacpark menu**. Use on every page whose route begins with `spacpark`.
 */
export function SpacparkNavChrome() {
  return (
    <AttractionNavChrome
      topics={SPACPARK_MENU_TOPICS}
      navLabel="Space Park"
    />
  );
}
