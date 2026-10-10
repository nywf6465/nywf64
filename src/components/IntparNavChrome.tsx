"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { INTPAR_MENU_TOPICS } from "@/data/intparMenu";

/**
 * Hunt for International Exhibitors menu chrome — nav bar + topic menu.
 * Use on every page whose route begins with `intpar`.
 */
export function IntparNavChrome() {
  return (
    <AttractionNavChrome
      topics={INTPAR_MENU_TOPICS}
      navLabel="The Hunt for International Exhibitors"
      exploreNoun="TOPIC"
      menuTitle="Explore This Topic"
    />
  );
}
