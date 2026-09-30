"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { BETLIV_MENU_TOPICS } from "@/data/betlivMenu";

/**
 * Betliv menu chrome — nav bar + shared **betliv menu**.
 * Use on every page whose route begins with `betliv`.
 */
export function BetlivNavChrome() {
  return (
    <AttractionNavChrome
      topics={BETLIV_MENU_TOPICS}
      navLabel="Better Living Center"
    />
  );
}
