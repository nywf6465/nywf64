"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { ATOMHOS_MENU_TOPICS } from "@/data/atomhosMenu";

/**
 * Atomhos menu chrome — nav bar (**ATOMEDIC HOSPITAL**) + atomhos menu.
 * Use on every page whose route begins with `atomhos`.
 */
export function AtomhosNavChrome() {
  return (
    <AttractionNavChrome
      topics={ATOMHOS_MENU_TOPICS}
      navLabel="Atomedic Hospital"
    />
  );
}
