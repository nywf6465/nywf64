"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { LAKCRU_MENU_TOPICS } from "@/data/lakcruMenu";

/**
 * Lake Cruise menu chrome — nav bar + shared **lakcru menu**.
 * Use on every page whose route begins with `lakcru`.
 */
export function LakcruNavChrome() {
  return (
    <AttractionNavChrome
      topics={LAKCRU_MENU_TOPICS}
      navLabel="Lake Cruise"
    />
  );
}
