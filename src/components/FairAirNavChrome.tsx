"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { FAIR_AIR_MENU_TOPICS } from "@/data/fairAirMenu";

/**
 * Fair from the Air menu chrome — nav bar (**EXPLORE THE PHOTOS**) + topic menu.
 * Use on every page whose route begins with `fair_air`.
 */
export function FairAirNavChrome() {
  return (
    <AttractionNavChrome
      topics={FAIR_AIR_MENU_TOPICS}
      navLabel="The Fair from the Air"
      exploreLabel="EXPLORE THE PHOTOS"
      menuTitle="Explore the Photos"
    />
  );
}
