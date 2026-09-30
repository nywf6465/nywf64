"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { INDIA_MENU_TOPICS } from "@/data/indiaMenu";

/**
 * India menu chrome — nav bar + shared **india menu**.
 * Use on every page whose route begins with `india`.
 */
export function IndiaNavChrome() {
  return (
    <AttractionNavChrome topics={INDIA_MENU_TOPICS} navLabel="India" />
  );
}
