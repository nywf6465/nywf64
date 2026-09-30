"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { BARBUF_MENU_TOPICS } from "@/data/barbufMenu";

/**
 * Barbuf menu chrome — nav bar + shared **barbuf menu**.
 * Use on every page whose route begins with `barbuf`.
 */
export function BarbufNavChrome() {
  return (
    <AttractionNavChrome
      topics={BARBUF_MENU_TOPICS}
      navLabel="Bar, Buffet and Cafeteria"
    />
  );
}
