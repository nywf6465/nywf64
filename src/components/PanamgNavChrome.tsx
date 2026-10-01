"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { PANAMG_MENU_TOPICS } from "@/data/panamgMenu";

/**
 * Pan American Highway Gardens menu chrome — nav bar + shared menu.
 * Use on `panamgoverview` and `panama01`…`panama03`.
 */
export function PanamgNavChrome() {
  return (
    <AttractionNavChrome
      topics={PANAMG_MENU_TOPICS}
      navLabel="Pan American Highway Gardens"
    />
  );
}
