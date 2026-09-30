"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { EQUIT_MENU_TOPICS } from "@/data/equitMenu";

/**
 * Equitable Life menu chrome — nav bar + shared **equit menu**.
 * Use on every page whose route begins with `equit`.
 */
export function EquitNavChrome() {
  return (
    <AttractionNavChrome
      topics={EQUIT_MENU_TOPICS}
      navLabel="Equitable Life Assurance Society"
    />
  );
}
