"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { ARCHAMER_MENU_TOPICS } from "@/data/archamerMenu";

/**
 * Archamer menu chrome — nav bar (**ARCH OF THE AMERICAS**) + archamer menu.
 * Use on every page whose route begins with `archamer`.
 */
export function ArchamerNavChrome() {
  return (
    <AttractionNavChrome
      topics={ARCHAMER_MENU_TOPICS}
      navLabel="Arch of the Americas"
    />
  );
}
