"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { FLOWATSKI_MENU_TOPICS } from "@/data/flowatskiMenu";

/**
 * Florida Citrus Water Ski Show menu chrome — nav bar + shared **flowatski menu**.
 * Use on every page whose route begins with `flowatski`.
 */
export function FlowatskiNavChrome() {
  return (
    <AttractionNavChrome
      topics={FLOWATSKI_MENU_TOPICS}
      navLabel="Florida Citrus Water Ski Show"
    />
  );
}
