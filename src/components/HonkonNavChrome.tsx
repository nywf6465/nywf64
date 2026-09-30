"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { HONKON_MENU_TOPICS } from "@/data/honkonMenu";

/**
 * Hong Kong menu chrome — nav bar + shared **honkon menu**.
 * Use on every page whose route begins with `honkon`.
 */
export function HonkonNavChrome() {
  return (
    <AttractionNavChrome topics={HONKON_MENU_TOPICS} navLabel="Hong Kong" />
  );
}
