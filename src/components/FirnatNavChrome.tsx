"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { FIRNAT_MENU_TOPICS } from "@/data/firnatMenu";

/**
 * First National City Bank menu chrome — nav bar + shared **firnat menu**.
 * Use on every page whose route begins with `firnat`.
 */
export function FirnatNavChrome() {
  return (
    <AttractionNavChrome
      topics={FIRNAT_MENU_TOPICS}
      navLabel="First National City Bank"
    />
  );
}
