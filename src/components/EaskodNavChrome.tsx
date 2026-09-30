"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { EASKOD_MENU_TOPICS } from "@/data/easkodMenu";

/**
 * Easkod menu chrome — nav bar (EASTMAN KODAK) + the shared **easkod menu**.
 * Use on every page whose route begins with `easkod`.
 */
export function EaskodNavChrome() {
  return (
    <AttractionNavChrome
      topics={EASKOD_MENU_TOPICS}
      navLabel="Eastman Kodak"
    />
  );
}
