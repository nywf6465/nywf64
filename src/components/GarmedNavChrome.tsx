"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { GARMED_MENU_TOPICS } from "@/data/garmedMenu";

/**
 * Garden of Meditation menu chrome — nav bar + shared **garmed menu**.
 * Use on every page whose route begins with `garmed`.
 */
export function GarmedNavChrome() {
  return (
    <AttractionNavChrome
      topics={GARMED_MENU_TOPICS}
      navLabel="Garden of Meditation"
    />
  );
}
