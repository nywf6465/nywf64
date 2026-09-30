"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { CARPAR_MENU_TOPICS } from "@/data/carparMenu";

/**
 * Carpar menu chrome — nav bar + shared **carpar menu**.
 * Use on every page whose route begins with `carpar`.
 */
export function CarparNavChrome() {
  return (
    <AttractionNavChrome
      topics={CARPAR_MENU_TOPICS}
      navLabel="Carousel Park"
    />
  );
}
