"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { HALSCI_MENU_TOPICS } from "@/data/halsciMenu";

/**
 * Hall of Science menu chrome — nav bar + shared **halsci menu**.
 * Use on every page whose route begins with `halsci`.
 */
export function HalsciNavChrome() {
  return (
    <AttractionNavChrome
      topics={HALSCI_MENU_TOPICS}
      navLabel="Hall of Science"
    />
  );
}
