"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { SPAIN_MENU_TOPICS } from "@/data/spainMenu";

/**
 * Spain menu chrome — nav bar (SPAIN) + the shared **Spain menu**.
 * Use on every page whose route begins with `spain`.
 */
export function SpainNavChrome() {
  return (
    <AttractionNavChrome topics={SPAIN_MENU_TOPICS} navLabel="Spain" />
  );
}
