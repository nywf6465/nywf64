"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { AVIS_MENU_TOPICS } from "@/data/avisMenu";

/**
 * Avis menu chrome — nav bar (**AVIS ANTIQUE CAR RIDE**) + Avis menu.
 * Use on every page whose route begins with `avis`.
 */
export function AvisNavChrome() {
  return (
    <AttractionNavChrome
      topics={AVIS_MENU_TOPICS}
      navLabel="Avis Antique Car Ride"
    />
  );
}
