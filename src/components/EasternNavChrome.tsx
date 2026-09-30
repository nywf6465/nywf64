"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { EASTERN_MENU_TOPICS } from "@/data/easternMenu";

/**
 * Eastern Air Lines menu chrome — nav bar + shared **eastern menu**.
 * Use on every page whose route begins with `eastern`.
 */
export function EasternNavChrome() {
  return (
    <AttractionNavChrome
      topics={EASTERN_MENU_TOPICS}
      navLabel="Eastern Air Lines"
    />
  );
}
