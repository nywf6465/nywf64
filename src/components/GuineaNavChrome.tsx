"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { GUINEA_MENU_TOPICS } from "@/data/guineaMenu";

/**
 * Guinea menu chrome — nav bar + shared **guinea menu**.
 * Use on every page whose route begins with `guinea`.
 */
export function GuineaNavChrome() {
  return (
    <AttractionNavChrome topics={GUINEA_MENU_TOPICS} navLabel="Guinea" />
  );
}
