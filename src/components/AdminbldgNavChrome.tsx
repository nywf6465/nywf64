"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { ADMINBLDG_MENU_TOPICS } from "@/data/adminbldgMenu";

/**
 * Adminbldg menu chrome — nav bar (**ADMINISTRATION BUILDING**) + adminbldg menu.
 * Use on every page whose route begins with `adminbldg`.
 */
export function AdminbldgNavChrome() {
  return (
    <AttractionNavChrome
      topics={ADMINBLDG_MENU_TOPICS}
      navLabel="Administration Building"
    />
  );
}
