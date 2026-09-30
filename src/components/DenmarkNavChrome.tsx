"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { DENMARK_MENU_TOPICS } from "@/data/denmarkMenu";

/**
 * Denmark menu chrome — nav bar + shared **denmark menu**.
 * Use on every page whose route begins with `denmark`.
 */
export function DenmarkNavChrome() {
  return (
    <AttractionNavChrome
      topics={DENMARK_MENU_TOPICS}
      navLabel="Denmark"
    />
  );
}
