"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { FORMICA_MENU_TOPICS } from "@/data/formicaMenu";

/**
 * Formica menu chrome — nav bar + shared **formica menu**.
 * Use on every page whose route begins with `formica`.
 */
export function FormicaNavChrome() {
  return (
    <AttractionNavChrome topics={FORMICA_MENU_TOPICS} navLabel="Formica" />
  );
}
