"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { JORDAN_MENU_TOPICS } from "@/data/jordanMenu";

/**
 * Jordan menu chrome — nav bar + shared **Jordan menu**.
 * Use on every page whose route begins with `jordan`.
 */
export function JordanNavChrome() {
  return (
    <AttractionNavChrome topics={JORDAN_MENU_TOPICS} navLabel="Jordan" />
  );
}
