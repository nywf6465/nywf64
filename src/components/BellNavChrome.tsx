"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { BELL_MENU_TOPICS } from "@/data/bellMenu";

/**
 * Bell menu chrome — nav bar (BELL SYSTEM) + the shared **bell menu**.
 * Use on every page whose route begins with `bell`.
 */
export function BellNavChrome() {
  return (
    <AttractionNavChrome
      topics={BELL_MENU_TOPICS}
      navLabel="Bell System"
    />
  );
}
