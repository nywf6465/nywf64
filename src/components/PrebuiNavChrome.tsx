"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { PREBUI_MENU_TOPICS } from "@/data/prebuiMenu";

/**
 * Press Building menu chrome — nav bar + shared **prebui menu**.
 * Use on every page whose route begins with `prebui` / `prebuilt`.
 */
export function PrebuiNavChrome() {
  return (
    <AttractionNavChrome
      topics={PREBUI_MENU_TOPICS}
      navLabel="Press Building & Public Relations"
    />
  );
}
