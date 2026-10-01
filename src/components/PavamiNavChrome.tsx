"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { PAVAMI_MENU_TOPICS } from "@/data/pavamiMenu";

/**
 * Pavilion of American Interiors menu chrome — nav bar + shared **pavami menu**.
 * Use on every page whose route begins with `pavami`.
 */
export function PavamiNavChrome() {
  return (
    <AttractionNavChrome
      topics={PAVAMI_MENU_TOPICS}
      navLabel="Pavilion of American Interiors"
    />
  );
}
