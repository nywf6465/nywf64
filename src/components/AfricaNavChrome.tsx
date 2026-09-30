"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { AFRICA_MENU_TOPICS } from "@/data/africaMenu";

/**
 * Africa menu chrome — nav bar (**AFRICA**) + overview-only menu
 * until full africa menu topics arrive.
 */
export function AfricaNavChrome() {
  return (
    <AttractionNavChrome topics={AFRICA_MENU_TOPICS} navLabel="Africa" />
  );
}
