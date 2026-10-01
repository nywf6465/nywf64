"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { PORAUT_MENU_TOPICS } from "@/data/porautMenu";

/**
 * Port Authority Heliport menu chrome — nav bar + shared **poraut menu**.
 * Use on every page whose route begins with `poraut`.
 */
export function PorautNavChrome() {
  return (
    <AttractionNavChrome
      topics={PORAUT_MENU_TOPICS}
      navLabel="Port Authority Heliport"
    />
  );
}
