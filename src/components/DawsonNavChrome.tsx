"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { DAWSON_MENU_TOPICS } from "@/data/dawsonMenu";

/**
 * Greg Dawson menu chrome — nav bar + Dawson topic menu.
 * Use on every page whose route begins with `dawson`.
 */
export function DawsonNavChrome() {
  return (
    <AttractionNavChrome
      topics={DAWSON_MENU_TOPICS}
      navLabel="Greg Dawson"
      exploreNoun="PERSON"
      menuTitle="Explore This Person"
    />
  );
}
