"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { UNISPH_MENU_TOPICS } from "@/data/unisphMenu";

/**
 * Unisph menu chrome — nav bar (UNISPHERE) + the shared **unisph menu**.
 * Use on every page whose route begins with `unisph`.
 */
export function UnisphNavChrome() {
  return (
    <AttractionNavChrome topics={UNISPH_MENU_TOPICS} navLabel="Unisphere" />
  );
}
