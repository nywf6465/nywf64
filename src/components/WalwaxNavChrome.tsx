"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { WALWAX_MENU_TOPICS } from "@/data/walwaxMenu";

/**
 * Walter's International Wax Museum menu chrome — nav bar + shared **walwax menu**.
 * Use on every page whose route begins with `walwax`.
 */
export function WalwaxNavChrome() {
  return (
    <AttractionNavChrome
      topics={WALWAX_MENU_TOPICS}
      navLabel="Walter's International Wax Museum"
    />
  );
}
