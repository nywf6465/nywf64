"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { HOUGT_MENU_TOPICS } from "@/data/hougtMenu";

/**
 * House of Good Taste menu chrome — nav bar + shared **hougt menu**.
 * Use on every page whose route begins with `hougt`.
 */
export function HougtNavChrome() {
  return (
    <AttractionNavChrome
      topics={HOUGT_MENU_TOPICS}
      navLabel="House of Good Taste"
    />
  );
}
