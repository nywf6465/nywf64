"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { ENTBUI_MENU_TOPICS } from "@/data/entbuiMenu";

/**
 * Entrance Building menu chrome — nav bar + shared **entbui menu**.
 * Use on every page whose route begins with `entbui`.
 */
export function EntbuiNavChrome() {
  return (
    <AttractionNavChrome
      topics={ENTBUI_MENU_TOPICS}
      navLabel="Entrance Building"
    />
  );
}
