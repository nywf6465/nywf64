"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { WESHOU_MENU_TOPICS } from "@/data/weshouMenu";

/**
 * Westinghouse menu chrome — nav bar + shared **weshou menu**.
 * Use on every page whose route begins with `weshou`.
 */
export function WeshouNavChrome() {
  return (
    <AttractionNavChrome topics={WESHOU_MENU_TOPICS} navLabel="Westinghouse" />
  );
}
