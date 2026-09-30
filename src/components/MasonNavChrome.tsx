"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { MASON_MENU_TOPICS } from "@/data/masonMenu";

/**
 * Masonic Center menu chrome — nav bar + shared **mason menu**.
 * Use on every page whose route begins with `mason`.
 */
export function MasonNavChrome() {
  return (
    <AttractionNavChrome
      topics={MASON_MENU_TOPICS}
      navLabel="Masonic Center"
    />
  );
}
