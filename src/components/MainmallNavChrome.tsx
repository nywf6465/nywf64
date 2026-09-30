"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { MAINMALL_MENU_TOPICS } from "@/data/mainmallMenu";

/**
 * Main Mall menu chrome — nav bar + shared **mainmall menu**.
 * Use on every page whose route begins with `mainmall`.
 */
export function MainmallNavChrome() {
  return (
    <AttractionNavChrome
      topics={MAINMALL_MENU_TOPICS}
      navLabel="Main Mall"
    />
  );
}
