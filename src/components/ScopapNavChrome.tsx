"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { SCOPAP_MENU_TOPICS } from "@/data/scopapMenu";

/**
 * Scopap menu chrome — nav bar (**SCOTT PAPER**) + scopap menu.
 * Use on every page whose route begins with `scopap`.
 */
export function ScopapNavChrome() {
  return (
    <AttractionNavChrome topics={SCOPAP_MENU_TOPICS} navLabel="Scott Paper" />
  );
}
