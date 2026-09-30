"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { SERSCI_MENU_TOPICS } from "@/data/sersciMenu";

/**
 * Sersci menu chrome — nav bar + shared **sersci menu**.
 * Use on every page whose route begins with `sersci`.
 */
export function SersciNavChrome() {
  return (
    <AttractionNavChrome
      topics={SERSCI_MENU_TOPICS}
      navLabel="Sermons from Science"
    />
  );
}
