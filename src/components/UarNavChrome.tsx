"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { UAR_MENU_TOPICS } from "@/data/uarMenu";

/**
 * United Arab Republic menu chrome — nav bar + shared **uar menu**.
 * Use on every page whose route begins with `uar`.
 */
export function UarNavChrome() {
  return (
    <AttractionNavChrome
      topics={UAR_MENU_TOPICS}
      navLabel="United Arab Republic"
    />
  );
}
