"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { CHRSCI_MENU_TOPICS } from "@/data/chrsciMenu";

/**
 * Chrsci menu chrome — nav bar (**CHRISTIAN SCIENCE**) + shared **chrsci menu**.
 * Use on every page whose route begins with `chrsci`.
 */
export function ChrsciNavChrome() {
  return (
    <AttractionNavChrome
      topics={CHRSCI_MENU_TOPICS}
      navLabel="Christian Science"
    />
  );
}
