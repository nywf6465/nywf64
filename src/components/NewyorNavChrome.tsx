"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { NEWYOR_MENU_TOPICS } from "@/data/newyorMenu";

/**
 * Newyor menu chrome — nav bar (NEW YORK STATE) + the shared **newyor menu**.
 * Use on every page whose route begins with `newyor`.
 */
export function NewyorNavChrome() {
  return (
    <AttractionNavChrome
      topics={NEWYOR_MENU_TOPICS}
      navLabel="New York State"
    />
  );
}
