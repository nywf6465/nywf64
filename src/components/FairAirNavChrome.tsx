"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { FAIR_AIR_MENU_TOPICS } from "@/data/fairAirMenu";

/**
 * See the Fair from the Air menu chrome — nav bar (“EXPLORE THE PHOTOS”)
 * + fair_air topic cards. Use on every page whose route begins with
 * `fair_air`.
 */
export function FairAirNavChrome() {
  return (
    <AttractionNavChrome
      topics={FAIR_AIR_MENU_TOPICS}
      exploreLabel="Explore the Photos"
      menuTitle="Explore the Photos"
    />
  );
}
