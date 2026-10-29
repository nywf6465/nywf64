"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { VM_MENU_TOPICS } from "@/data/vmMenu";

/**
 * The View-Masters Reels menu chrome — nav bar
 * (“EXPLORE THE PACKETS”) + topic cards.
 * Overview `/vmoverview` shows Page 1. Use on every `vm*` route.
 */
export function ViewMastersNavChrome() {
  return (
    <AttractionNavChrome
      topics={VM_MENU_TOPICS}
      exploreLabel="EXPLORE THE PACKETS"
      menuTitle="Explore The Packets"
    />
  );
}
