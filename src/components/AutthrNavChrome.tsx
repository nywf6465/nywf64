"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { AUTTHR_MENU_TOPICS } from "@/data/autthrMenu";

/**
 * Autthr menu chrome — nav bar (**AUTO THRILL SHOW**) + Autthr menu.
 * Use on every page whose route begins with `autthr`.
 */
export function AutthrNavChrome() {
  return (
    <AttractionNavChrome
      topics={AUTTHR_MENU_TOPICS}
      navLabel="Auto Thrill Show"
    />
  );
}
