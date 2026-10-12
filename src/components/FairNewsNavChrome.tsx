"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { FAIR_NEWS_MENU_TOPICS } from "@/data/fairNewsMenu";

/**
 * Fair News Newsletters menu chrome — nav bar (“EXPLORE THE NEWSLETTERS”)
 * + fairnews topic cards. Use on every page whose route begins with
 * `fairnews`.
 */
export function FairNewsNavChrome() {
  return (
    <AttractionNavChrome
      topics={FAIR_NEWS_MENU_TOPICS}
      exploreLabel="EXPLORE THE NEWSLETTERS"
      menuTitle="Explore The Newsletters"
    />
  );
}
