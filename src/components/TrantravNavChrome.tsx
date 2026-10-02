"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { TRANTRAV_MENU_TOPICS } from "@/data/trantravMenu";

/**
 * Transportation & Travel menu chrome — nav bar + shared **trantrav menu**.
 * Use on every page whose route begins with `trantrav`.
 */
export function TrantravNavChrome() {
  return (
    <AttractionNavChrome
      topics={TRANTRAV_MENU_TOPICS}
      navLabel="Transportation & Travel"
    />
  );
}
