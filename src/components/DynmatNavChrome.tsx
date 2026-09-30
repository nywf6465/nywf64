"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { DYNMAT_MENU_TOPICS } from "@/data/dynmatMenu";

/**
 * Dynamic Maturity menu chrome — nav bar + shared **dynmat menu**.
 * Use on every page whose route begins with `dynmat`.
 */
export function DynmatNavChrome() {
  return (
    <AttractionNavChrome
      topics={DYNMAT_MENU_TOPICS}
      navLabel="Dynamic Maturity"
    />
  );
}
