"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { JAPAN_MENU_TOPICS } from "@/data/japanMenu";

/**
 * Japan menu chrome — nav bar + shared **Japan menu**.
 * Use on every page whose route begins with `japan`.
 */
export function JapanNavChrome() {
  return (
    <AttractionNavChrome topics={JAPAN_MENU_TOPICS} navLabel="Japan" />
  );
}
