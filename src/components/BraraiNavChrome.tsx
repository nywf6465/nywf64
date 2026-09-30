"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { BRARAI_MENU_TOPICS } from "@/data/braraiMenu";

/**
 * Brarai menu chrome — nav bar + shared **brarai menu**.
 * Use on every page whose route begins with `brarai`.
 */
export function BraraiNavChrome() {
  return (
    <AttractionNavChrome
      topics={BRARAI_MENU_TOPICS}
      navLabel="Brass Rail"
    />
  );
}
