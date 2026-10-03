"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { SHEASTA_MENU_TOPICS } from "@/data/sheastaMenu";

/**
 * Sheasta menu chrome — nav bar (**SHEA STADIUM**) + sheasta menu.
 * Use on every page whose route begins with `sheasta`.
 */
export function SheastaNavChrome() {
  return (
    <AttractionNavChrome topics={SHEASTA_MENU_TOPICS} navLabel="Shea Stadium" />
  );
}
