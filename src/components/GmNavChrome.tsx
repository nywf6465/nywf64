"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { GM_MENU_TOPICS } from "@/data/gmMenu";

/**
 * GM menu chrome — nav bar (GENERAL MOTORS) + the shared **gm menu**.
 * Use on every page whose route begins with `gm`.
 */
export function GmNavChrome() {
  return (
    <AttractionNavChrome
      topics={GM_MENU_TOPICS}
      navLabel="General Motors"
    />
  );
}
