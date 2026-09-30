"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { FORD_MENU_TOPICS } from "@/data/fordMenu";

/**
 * Ford menu chrome — nav bar (FORD) + the shared **ford menu**.
 * Use on every page whose route begins with `ford`.
 */
export function FordNavChrome() {
  return (
    <AttractionNavChrome topics={FORD_MENU_TOPICS} navLabel="Ford" />
  );
}
