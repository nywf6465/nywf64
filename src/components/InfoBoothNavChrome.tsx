"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { INFO_BOOTH_MENU_TOPICS } from "@/data/infoBoothMenu";

/**
 * Fair Facts & Figures menu chrome — nav bar (“Explore Fair Information”)
 * + 15 info_booth topic cards. Use on every page whose route begins with
 * `info_booth`.
 */
export function InfoBoothNavChrome() {
  return (
    <AttractionNavChrome
      topics={INFO_BOOTH_MENU_TOPICS}
      exploreLabel="Explore Fair Information"
      menuTitle="Explore Fair Information"
    />
  );
}
