"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { SOCMOBIL_MENU_TOPICS } from "@/data/socmobilMenu";

/**
 * Socmobil menu chrome — nav bar (**SOCONY MOBIL**) + socmobil menu.
 * Use on every page whose route begins with `socmobil`.
 */
export function SocmobilNavChrome() {
  return (
    <AttractionNavChrome
      topics={SOCMOBIL_MENU_TOPICS}
      navLabel="Socony Mobil"
    />
  );
}
