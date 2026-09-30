"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { BOYSCO_MENU_TOPICS } from "@/data/boyscoMenu";

/**
 * Boysco menu chrome — nav bar + shared **boysco menu**.
 * Use on every page whose route begins with `boysco`.
 */
export function BoyscoNavChrome() {
  return (
    <AttractionNavChrome
      topics={BOYSCO_MENU_TOPICS}
      navLabel="Boy Scouts of America"
    />
  );
}
