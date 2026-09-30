"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { COKE_MENU_TOPICS } from "@/data/cokeMenu";

/**
 * Coca-Cola menu chrome — nav bar + shared **coke menu**.
 * Use on every page whose route begins with `coke`.
 */
export function CokeNavChrome() {
  return (
    <AttractionNavChrome topics={COKE_MENU_TOPICS} navLabel="Coca-Cola" />
  );
}
