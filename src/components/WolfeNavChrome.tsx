"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { WOLFE_MENU_TOPICS } from "@/data/wolfeMenu";

/**
 * Wolfe Worldwide Films menu chrome — nav bar (“EXPLORE THE SLIDES”)
 * + topic cards. Overview has no Page notation.
 */
export function WolfeNavChrome() {
  return (
    <AttractionNavChrome
      topics={WOLFE_MENU_TOPICS}
      exploreLabel="EXPLORE THE SLIDES"
      menuTitle="Explore The Slides"
    />
  );
}
