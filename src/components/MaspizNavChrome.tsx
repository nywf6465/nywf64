"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { MASPIZ_MENU_TOPICS } from "@/data/maspizMenu";

/**
 * Mastro Pizza menu chrome — nav bar + shared **maspiz menu**.
 * Use on every page whose route begins with `maspiz`.
 */
export function MaspizNavChrome() {
  return (
    <AttractionNavChrome
      topics={MASPIZ_MENU_TOPICS}
      navLabel="Mastro Pizza"
    />
  );
}
