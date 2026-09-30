"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { DUPONT_MENU_TOPICS } from "@/data/dupontMenu";

/**
 * DuPont menu chrome — nav bar (DUPONT) + the shared **dupont menu**.
 * Use on every page whose route begins with `dupont`.
 */
export function DupontNavChrome() {
  return (
    <AttractionNavChrome topics={DUPONT_MENU_TOPICS} navLabel="DuPont" />
  );
}
