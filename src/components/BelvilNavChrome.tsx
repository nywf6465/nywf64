"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { BELVIL_MENU_TOPICS } from "@/data/belvilMenu";

/**
 * Belvil menu chrome — nav bar + shared **belvil menu**.
 * Use on every page whose route begins with `belvil`.
 */
export function BelvilNavChrome() {
  return (
    <AttractionNavChrome
      topics={BELVIL_MENU_TOPICS}
      navLabel="Belgian Village"
    />
  );
}
