"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { ILLINOIS_MENU_TOPICS } from "@/data/illinoisMenu";

/**
 * Illinois menu chrome — nav bar (ILLINOIS) + the shared **illinois menu**
 * (13 topics). Use on every page whose route begins with `illinois`.
 */
export function IllinoisNavChrome() {
  return (
    <AttractionNavChrome topics={ILLINOIS_MENU_TOPICS} navLabel="Illinois" />
  );
}
