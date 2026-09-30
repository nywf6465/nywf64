"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { FUNLAN_MENU_TOPICS } from "@/data/funlanMenu";

/**
 * Funland menu chrome — nav bar + shared **funlan menu**.
 * Use on every page whose route begins with `funlan`.
 */
export function FunlanNavChrome() {
  return (
    <AttractionNavChrome topics={FUNLAN_MENU_TOPICS} navLabel="Funland" />
  );
}
