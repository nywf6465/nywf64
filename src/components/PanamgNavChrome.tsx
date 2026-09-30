"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { PANAMG_MENU_TOPICS } from "@/data/panamgMenu";

/**
 * Panama menu chrome — nav bar (**AVIS PAN AMERICAN HIGHWAY RIDES**) + Panama menu.
 * Use on every page whose route begins with `panamg`.
 */
export function PanamgNavChrome() {
  return (
    <AttractionNavChrome
      topics={PANAMG_MENU_TOPICS}
      navLabel="Avis Pan American Highway Rides"
    />
  );
}
