"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { FAREWELL_MENU_TOPICS } from "@/data/farewellMenu";

/**
 * The End of the Fair menu chrome — nav bar (“EXPLORE THIS TOPIC”)
 * + farewell topic cards. Use on every page whose route begins with
 * `farewell`.
 */
export function FarewellNavChrome() {
  return (
    <AttractionNavChrome
      topics={FAREWELL_MENU_TOPICS}
      exploreNoun="TOPIC"
      menuTitle="Explore This Topic"
    />
  );
}
