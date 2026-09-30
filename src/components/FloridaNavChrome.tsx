"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { FLORIDA_MENU_TOPICS } from "@/data/floridaMenu";

/**
 * Florida menu chrome — nav bar (FLORIDA) + the shared **Florida menu**.
 * Use on every page whose route begins with `florida`.
 */
export function FloridaNavChrome() {
  return (
    <AttractionNavChrome
      topics={FLORIDA_MENU_TOPICS}
      navLabel="Florida"
    />
  );
}
