"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { FISHER_MENU_TOPICS } from "@/data/fisherMenu";

/**
 * Albert Fisher menu chrome — nav bar + Fisher topic menu.
 * Use on every page whose route begins with `fisher`.
 */
export function FisherNavChrome() {
  return (
    <AttractionNavChrome
      topics={FISHER_MENU_TOPICS}
      navLabel="Albert Fisher"
      exploreNoun="PERSON"
      menuTitle="Explore This Person"
    />
  );
}
