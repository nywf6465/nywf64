"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { MEXICO_MENU_TOPICS } from "@/data/mexicoMenu";

/**
 * Mexico menu chrome — nav bar + shared **mexico menu**.
 * Use on every page whose route begins with `mexico`.
 */
export function MexicoNavChrome() {
  return (
    <AttractionNavChrome
      topics={MEXICO_MENU_TOPICS}
      navLabel="Mexico"
    />
  );
}
