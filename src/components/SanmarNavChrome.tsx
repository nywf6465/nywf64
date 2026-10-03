"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { SANMAR_MENU_TOPICS } from "@/data/sanmarMenu";

/**
 * Sanmar menu chrome — nav bar (**SANTA MARIA**) + sanmar menu.
 * Use on every page whose route begins with `sanmar`.
 */
export function SanmarNavChrome() {
  return (
    <AttractionNavChrome topics={SANMAR_MENU_TOPICS} navLabel="Santa Maria" />
  );
}
