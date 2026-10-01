"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { PHILIP_MENU_TOPICS } from "@/data/philipMenu";

/**
 * Philippines menu chrome — nav bar + shared **philip menu**.
 * Use on every page whose route begins with `philip`.
 */
export function PhilipNavChrome() {
  return (
    <AttractionNavChrome topics={PHILIP_MENU_TOPICS} navLabel="Philippines" />
  );
}
