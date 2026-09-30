"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { CHUCEN_MENU_TOPICS } from "@/data/chucenMenu";

/**
 * Churchill Center menu chrome — nav bar + shared **chucen menu**.
 * Use on every page whose route begins with `chucen`.
 */
export function ChucenNavChrome() {
  return (
    <AttractionNavChrome
      topics={CHUCEN_MENU_TOPICS}
      navLabel="Churchill Center"
    />
  );
}
