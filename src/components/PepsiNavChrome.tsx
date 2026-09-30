"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { PEPSI_MENU_TOPICS } from "@/data/pepsiMenu";

/**
 * Pepsi menu chrome — nav bar (PEPSI-COLA) + the shared **pepsi menu**.
 * Use on every page whose route begins with `pepsi`.
 */
export function PepsiNavChrome() {
  return (
    <AttractionNavChrome topics={PEPSI_MENU_TOPICS} navLabel="Pepsi-Cola" />
  );
}
