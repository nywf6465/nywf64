"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { NEWYORCIT_MENU_TOPICS } from "@/data/newyorcitMenu";

/**
 * New York City menu chrome — nav bar + shared **newyorcit menu**.
 * Use on every page whose route begins with `newyorcit`.
 */
export function NewyorcitNavChrome() {
  return (
    <AttractionNavChrome
      topics={NEWYORCIT_MENU_TOPICS}
      navLabel="New York City"
    />
  );
}
