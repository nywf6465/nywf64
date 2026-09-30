"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { VATICAN_MENU_TOPICS } from "@/data/vaticanMenu";

/**
 * Vatican menu chrome — nav bar (VATICAN) + the shared **vatican menu**.
 * Use on every page whose route begins with `vatican`.
 */
export function VaticanNavChrome() {
  return (
    <AttractionNavChrome
      topics={VATICAN_MENU_TOPICS}
      navLabel="Vatican"
    />
  );
}
