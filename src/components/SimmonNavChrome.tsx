"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { SIMMON_MENU_TOPICS } from "@/data/simmonMenu";

/**
 * Simmon menu chrome — nav bar (**SIMMONS**) + simmon menu.
 * Use on every page whose route begins with `simmon` .
 */
export function SimmonNavChrome() {
  return (
    <AttractionNavChrome topics={SIMMON_MENU_TOPICS} navLabel="Simmons" />
  );
}
