"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { CHRYSLER_MENU_TOPICS } from "@/data/chryslerMenu";

/**
 * Chrysler menu chrome — nav bar (CHRYSLER) + the shared **chrysler menu**.
 * Use on every page whose route begins with `chrysler`.
 */
export function ChryslerNavChrome() {
  return (
    <AttractionNavChrome
      topics={CHRYSLER_MENU_TOPICS}
      navLabel="Chrysler"
    />
  );
}
