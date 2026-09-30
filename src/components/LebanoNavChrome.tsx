"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { LEBANO_MENU_TOPICS } from "@/data/lebanoMenu";

/**
 * Lebanon menu chrome — nav bar + shared **lebano menu**.
 * Use on every page whose route begins with `lebano`.
 */
export function LebanoNavChrome() {
  return (
    <AttractionNavChrome
      topics={LEBANO_MENU_TOPICS}
      navLabel="Lebanon"
    />
  );
}
