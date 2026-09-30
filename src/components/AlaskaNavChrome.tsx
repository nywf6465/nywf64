"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { ALASKA_MENU_TOPICS } from "@/data/alaskaMenu";

/**
 * Alaska menu chrome — nav bar (**ALASKA**) + overview-only menu
 * until full alaska menu topics arrive.
 */
export function AlaskaNavChrome() {
  return (
    <AttractionNavChrome topics={ALASKA_MENU_TOPICS} navLabel="Alaska" />
  );
}
