"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { ROCTHR_MENU_TOPICS } from "@/data/rocthrMenu";

/**
 * Rocket Thrower menu chrome — nav bar + shared **rocthr menu**.
 * Use on every page whose route begins with `rocthr`.
 */
export function RocthrNavChrome() {
  return (
    <AttractionNavChrome
      topics={ROCTHR_MENU_TOPICS}
      navLabel="The Rocket Thrower"
    />
  );
}
