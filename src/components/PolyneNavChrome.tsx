"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { POLYNE_MENU_TOPICS } from "@/data/polyneMenu";

/**
 * Polynesia menu chrome — nav bar + shared menu.
 * Use on `polyneoverview` and `polynesia01`…`polynesia04`.
 */
export function PolyneNavChrome() {
  return (
    <AttractionNavChrome topics={POLYNE_MENU_TOPICS} navLabel="Polynesia" />
  );
}
