"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { MEDPHO_MENU_TOPICS } from "@/data/medphoMenu";

/**
 * Medo Photo Supply menu chrome — nav bar + shared **medpho menu**.
 * Use on every page whose route begins with `medpho`.
 */
export function MedphoNavChrome() {
  return (
    <AttractionNavChrome
      topics={MEDPHO_MENU_TOPICS}
      navLabel="Medo Photo Supply"
    />
  );
}
