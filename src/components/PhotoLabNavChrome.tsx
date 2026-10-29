"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { PHOTOLAB_MENU_TOPICS } from "@/data/photolabMenu";

/**
 * Photo Lab Slide Set menu chrome — nav bar (“EXPLORE THE SLIDES”)
 * + topic cards. Overview has no Page notation.
 * Use on every page whose route begins with `photolab`.
 */
export function PhotoLabNavChrome() {
  return (
    <AttractionNavChrome
      topics={PHOTOLAB_MENU_TOPICS}
      exploreLabel="EXPLORE THE SLIDES"
      menuTitle="Explore The Slides"
    />
  );
}
