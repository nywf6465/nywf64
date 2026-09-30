"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { JOHWAX_MENU_TOPICS } from "@/data/johwaxMenu";

/**
 * Johwax menu chrome — nav bar (JOHNSON WAX) + the shared **johwax menu**.
 * Use on every page whose route begins with `johwax`.
 */
export function JohwaxNavChrome() {
  return (
    <AttractionNavChrome
      topics={JOHWAX_MENU_TOPICS}
      navLabel="Johnson Wax"
    />
  );
}
