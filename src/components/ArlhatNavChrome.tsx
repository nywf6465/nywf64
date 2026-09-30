"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { ARLHAT_MENU_TOPICS } from "@/data/arlhatMenu";

/**
 * Arlhat menu chrome — nav bar (**ARLINGTON HAT**) + arlhat menu.
 * Use on every page whose route begins with `arlhat`.
 */
export function ArlhatNavChrome() {
  return (
    <AttractionNavChrome
      topics={ARLHAT_MENU_TOPICS}
      navLabel="Arlington Hat"
    />
  );
}
