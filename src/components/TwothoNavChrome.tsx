"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { TWOTHO_MENU_TOPICS } from "@/data/twothoMenu";

/**
 * Twotho menu chrome — nav bar + shared **twotho menu**.
 * Use on every page whose route begins with `twotho`.
 */
export function TwothoNavChrome() {
  return (
    <AttractionNavChrome
      topics={TWOTHO_MENU_TOPICS}
      navLabel="Two Thousand Tribes"
    />
  );
}
