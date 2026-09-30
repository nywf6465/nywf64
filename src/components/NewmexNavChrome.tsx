"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { NEWMEX_MENU_TOPICS } from "@/data/newmexMenu";

/**
 * New Mexico menu chrome — nav bar + shared **newmex menu**.
 * Use on every page whose route begins with `newmex`.
 */
export function NewmexNavChrome() {
  return (
    <AttractionNavChrome
      topics={NEWMEX_MENU_TOPICS}
      navLabel="New Mexico"
    />
  );
}
