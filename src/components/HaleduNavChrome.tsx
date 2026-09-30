"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { HALEDU_MENU_TOPICS } from "@/data/haleduMenu";

/**
 * Hall of Education menu chrome — nav bar + shared **haledu menu**.
 * Use on every page whose route begins with `haledu`.
 */
export function HaleduNavChrome() {
  return (
    <AttractionNavChrome
      topics={HALEDU_MENU_TOPICS}
      navLabel="Hall of Education"
    />
  );
}
