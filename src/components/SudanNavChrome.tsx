"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { SUDAN_MENU_TOPICS } from "@/data/sudanMenu";

/**
 * Sudan menu chrome — nav bar (SUDAN) + shared
 * **sudan menu**. Use on every page whose route begins with `sudan`.
 */
export function SudanNavChrome() {
  return (
    <AttractionNavChrome topics={SUDAN_MENU_TOPICS} navLabel="Sudan" />
  );
}
