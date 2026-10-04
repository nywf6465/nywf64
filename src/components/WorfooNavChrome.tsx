"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { WORFOO_MENU_TOPICS } from "@/data/worfooMenu";

/**
 * World of Food menu chrome — nav bar + shared **worfoo menu**.
 * Use on every page whose route begins with `worfoo`.
 */
export function WorfooNavChrome() {
  return (
    <AttractionNavChrome
      topics={WORFOO_MENU_TOPICS}
      navLabel="World of Food"
    />
  );
}
