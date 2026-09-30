"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { INDONES_MENU_TOPICS } from "@/data/indonesMenu";

/**
 * Indonesia menu chrome — nav bar + shared **indones menu**.
 * Use on every page whose route begins with `indones`.
 */
export function IndonesNavChrome() {
  return (
    <AttractionNavChrome
      topics={INDONES_MENU_TOPICS}
      navLabel="Indonesia"
    />
  );
}
