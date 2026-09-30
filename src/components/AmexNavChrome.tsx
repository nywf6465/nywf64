"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { AMEX_MENU_TOPICS } from "@/data/amexMenu";

/**
 * Amex menu chrome — nav bar (**AMERICAN EXPRESS**) + overview-only menu
 * until full amex menu topics arrive.
 */
export function AmexNavChrome() {
  return (
    <AttractionNavChrome topics={AMEX_MENU_TOPICS} navLabel="American Express" />
  );
}
