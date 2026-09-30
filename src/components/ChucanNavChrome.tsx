"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { CHUCAN_MENU_TOPICS } from "@/data/chucanMenu";

/**
 * Chunky Candy menu chrome — nav bar + shared **chucan menu**.
 * Use on every page whose route begins with `chucan`.
 */
export function ChucanNavChrome() {
  return (
    <AttractionNavChrome
      topics={CHUCAN_MENU_TOPICS}
      navLabel="Chunky Candy"
    />
  );
}
