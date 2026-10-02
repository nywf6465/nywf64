"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { SWISKY_MENU_TOPICS } from "@/data/swiskyMenu";

/**
 * Swisky menu chrome — nav bar (SWISS SKY RIDE) + shared
 * **swisky menu**. Use on every page whose route begins with `swisky`.
 */
export function SwiskyNavChrome() {
  return (
    <AttractionNavChrome
      topics={SWISKY_MENU_TOPICS}
      navLabel="Swiss Sky Ride"
    />
  );
}
