"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { FRANCE_MENU_TOPICS } from "@/data/franceMenu";

/**
 * France menu chrome — nav bar + shared **france menu**.
 * Use on every page whose route begins with `france`.
 */
export function FranceNavChrome() {
  return (
    <AttractionNavChrome topics={FRANCE_MENU_TOPICS} navLabel="France" />
  );
}
