"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { TOWERS_MENU_TOPICS } from "@/data/towersMenu";

/**
 * Entrance Towers menu chrome — nav bar + shared **towers menu**.
 * Use on every page whose route begins with `towers`.
 */
export function TowersNavChrome() {
  return (
    <AttractionNavChrome
      topics={TOWERS_MENU_TOPICS}
      navLabel="Entrance Towers"
    />
  );
}
