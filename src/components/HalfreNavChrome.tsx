"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { HALFRE_MENU_TOPICS } from "@/data/halfreMenu";

/**
 * Hall of Free Enterprise menu chrome — nav bar + shared **halfre menu**.
 * Use on every page whose route begins with `halfre`.
 */
export function HalfreNavChrome() {
  return (
    <AttractionNavChrome
      topics={HALFRE_MENU_TOPICS}
      navLabel="Hall of Free Enterprise"
    />
  );
}
