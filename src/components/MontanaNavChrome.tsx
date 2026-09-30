"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { MONTANA_MENU_TOPICS } from "@/data/montanaMenu";

/**
 * Montana menu chrome — nav bar + shared **montana menu**.
 * Use on every page whose route begins with `montana`.
 */
export function MontanaNavChrome() {
  return (
    <AttractionNavChrome
      topics={MONTANA_MENU_TOPICS}
      navLabel="Montana"
    />
  );
}
