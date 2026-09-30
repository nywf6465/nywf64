"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { ARGENT_MENU_TOPICS } from "@/data/argentMenu";

/**
 * Argent menu chrome — nav bar (**ARGENTINA**) + argent menu.
 * Use on every page whose route begins with `argent`.
 */
export function ArgentNavChrome() {
  return (
    <AttractionNavChrome topics={ARGENT_MENU_TOPICS} navLabel="Argentina" />
  );
}
