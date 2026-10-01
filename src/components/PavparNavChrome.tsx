"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { PAVPAR_MENU_TOPICS } from "@/data/pavparMenu";

/**
 * Pavilion of Paris menu chrome — nav bar + shared **pavpar menu**.
 * Use on every page whose route begins with `pavpar`.
 */
export function PavparNavChrome() {
  return (
    <AttractionNavChrome
      topics={PAVPAR_MENU_TOPICS}
      navLabel="Pavilion of Paris"
    />
  );
}
