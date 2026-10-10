"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { FAIR_STORY_MENU_TOPICS } from "@/data/fairStoryMenu";

/**
 * The Story of the Fair menu chrome — nav bar (“Explore the Story of the Fair”)
 * + fair_story topic cards. Use on every page whose route begins with
 * `fair_story`.
 */
export function FairStoryNavChrome() {
  return (
    <AttractionNavChrome
      topics={FAIR_STORY_MENU_TOPICS}
      exploreLabel="Explore the Story of the Fair"
      menuTitle="Explore the Story of the Fair"
    />
  );
}
