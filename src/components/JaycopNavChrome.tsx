"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { JAYCOP_MENU_TOPICS } from "@/data/jaycopMenu";

/**
 * jaycop menu chrome — nav bar + shared **jaycop menu**.
 * Use on every page whose route begins with `jaycop`.
 */
export function JaycopNavChrome() {
  return (
    <AttractionNavChrome topics={JAYCOP_MENU_TOPICS} navLabel="Jaycopter Ride" />
  );
}
