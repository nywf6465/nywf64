"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { KIDLAN_MENU_TOPICS } from "@/data/kidlanMenu";

/**
 * kidlan menu chrome — nav bar + shared **kidlan menu**.
 * Use on every page whose route begins with `kidlan`.
 */
export function KidlanNavChrome() {
  return (
    <AttractionNavChrome topics={KIDLAN_MENU_TOPICS} navLabel="Kiddyland" />
  );
}
