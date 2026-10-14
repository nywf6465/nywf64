"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { MATW_MENU_TOPICS } from "@/data/matwMenu";

/**
 * The “Men at Work” Book menu chrome — nav bar (“EXPLORE THE BOOK”)
 * + matw topic cards. Use on every page whose route begins with `matw`.
 */
export function MatwNavChrome() {
  return (
    <AttractionNavChrome
      topics={MATW_MENU_TOPICS}
      exploreLabel="EXPLORE THE BOOK"
      menuTitle="Explore The Book"
    />
  );
}
