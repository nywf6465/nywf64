"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { STAMPS_MENU_TOPICS } from "@/data/stampsMenu";

/**
 * Postage Stamps of the Fair menu chrome — nav bar
 * (“EXPLORE THE STAMPS”) + topic cards.
 * Overview `/stampsoverview` shows Page 1. Use on every `stamps*` route.
 */
export function StampsNavChrome() {
  return (
    <AttractionNavChrome
      topics={STAMPS_MENU_TOPICS}
      exploreLabel="EXPLORE THE STAMPS"
      menuTitle="Explore The Stamps"
    />
  );
}
