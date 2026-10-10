"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { BUILDING_MENU_TOPICS } from "@/data/buildingMenu";

/**
 * Building the Fair menu chrome — nav bar (“EXPLORE THIS TOPIC”)
 * + building topic cards. Use on every page whose route begins with
 * `building`.
 */
export function BuildingNavChrome() {
  return (
    <AttractionNavChrome
      topics={BUILDING_MENU_TOPICS}
      exploreNoun="TOPIC"
      menuTitle="Explore This Topic"
    />
  );
}
