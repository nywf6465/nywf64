"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { FIESTA_MENU_TOPICS } from "@/data/fiestaMenu";

/**
 * Fiesta menu chrome — nav bar + shared **fiesta menu**.
 * Use on every page whose route begins with `fiesta`.
 */
export function FiestaNavChrome() {
  return (
    <AttractionNavChrome topics={FIESTA_MENU_TOPICS} navLabel="Fiesta" />
  );
}
