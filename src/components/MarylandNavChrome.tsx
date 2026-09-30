"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { MARYLAND_MENU_TOPICS } from "@/data/marylandMenu";

/**
 * Maryland menu chrome — nav bar + shared **maryland menu**.
 * Use on every page whose route begins with `maryland`.
 */
export function MarylandNavChrome() {
  return (
    <AttractionNavChrome
      topics={MARYLAND_MENU_TOPICS}
      navLabel="Maryland"
    />
  );
}
