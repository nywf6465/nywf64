"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { OREGON_MENU_TOPICS } from "@/data/oregonMenu";

/**
 * Oregon menu chrome — nav bar + shared **oregon menu**.
 * Use on every page whose route begins with `oregon`.
 */
export function OregonNavChrome() {
  return (
    <AttractionNavChrome topics={OREGON_MENU_TOPICS} navLabel="Oregon" />
  );
}
