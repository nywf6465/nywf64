"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { MIDWEST_MENU_TOPICS } from "@/data/midwestMenu";

/**
 * Midwestern States menu chrome — nav bar + shared **midwest menu**.
 * Use on every page whose route begins with `midwest`.
 */
export function MidwestNavChrome() {
  return (
    <AttractionNavChrome
      topics={MIDWEST_MENU_TOPICS}
      navLabel="Midwestern States"
    />
  );
}
