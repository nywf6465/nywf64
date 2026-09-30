"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { FINART_MENU_TOPICS } from "@/data/finartMenu";

/**
 * Fine Arts Pavilion menu chrome — nav bar + shared **finart menu**.
 * Use on every page whose route begins with `finart`.
 */
export function FinartNavChrome() {
  return (
    <AttractionNavChrome
      topics={FINART_MENU_TOPICS}
      navLabel="Fine Arts Pavilion"
    />
  );
}
