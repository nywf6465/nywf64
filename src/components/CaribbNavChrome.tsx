"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { CARIBB_MENU_TOPICS } from "@/data/caribbMenu";

/**
 * Caribb menu chrome — nav bar + shared **caribb menu**.
 * Use on every page whose route begins with `caribb`.
 */
export function CaribbNavChrome() {
  return (
    <AttractionNavChrome
      topics={CARIBB_MENU_TOPICS}
      navLabel="Caribbean"
    />
  );
}
