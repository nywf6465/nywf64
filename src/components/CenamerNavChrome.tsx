"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { CENAMER_MENU_TOPICS } from "@/data/cenamerMenu";

/**
 * Cenamer menu chrome — nav bar + shared **cenamer menu**.
 * Use on every page whose route begins with `cenamer`.
 */
export function CenamerNavChrome() {
  return (
    <AttractionNavChrome
      topics={CENAMER_MENU_TOPICS}
      navLabel="Central America"
    />
  );
}
