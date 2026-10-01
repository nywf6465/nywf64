"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { RCA_MENU_TOPICS } from "@/data/rcaMenu";

/**
 * RCA menu chrome — nav bar + shared **rca menu**.
 * Use on every page whose route begins with `rca`.
 */
export function RcaNavChrome() {
  return (
    <AttractionNavChrome topics={RCA_MENU_TOPICS} navLabel="RCA" />
  );
}
