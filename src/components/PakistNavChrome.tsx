"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { PAKIST_MENU_TOPICS } from "@/data/pakistMenu";

/**
 * Pakistan menu chrome — nav bar + shared **pakist menu**.
 * Use on every page whose route begins with `pakist`.
 */
export function PakistNavChrome() {
  return (
    <AttractionNavChrome topics={PAKIST_MENU_TOPICS} navLabel="Pakistan" />
  );
}
