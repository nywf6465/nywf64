"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { NATMARPAR_MENU_TOPICS } from "@/data/natmarparMenu";

/**
 * National Maritime Union Park menu chrome — nav bar + shared **natmarpar menu**.
 * Use on every page whose route begins with `natmarpar`.
 */
export function NatmarparNavChrome() {
  return (
    <AttractionNavChrome
      topics={NATMARPAR_MENU_TOPICS}
      navLabel="National Maritime Union Park"
    />
  );
}
