"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { RUSORT_MENU_TOPICS } from "@/data/rusortMenu";

/**
 * Rusort menu chrome — nav bar + shared **rusort menu**.
 * Use on every page whose route begins with `rusort`.
 */
export function RusortNavChrome() {
  return (
    <AttractionNavChrome
      topics={RUSORT_MENU_TOPICS}
      navLabel="Russian Orthodox Greek-Catholic Church of America"
    />
  );
}
