"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { UN_MENU_TOPICS } from "@/data/unMenu";

/**
 * United Nations menu chrome — nav bar + shared **un menu**.
 * Use on every page whose route begins with `un` (overview + numbered stubs).
 */
export function UnNavChrome() {
  return (
    <AttractionNavChrome topics={UN_MENU_TOPICS} navLabel="United Nations" />
  );
}
