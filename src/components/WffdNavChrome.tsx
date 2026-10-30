"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { WFFD_MENU_TOPICS } from "@/data/wffdMenu";

/**
 * World’s Fair Fire & Police Departments menu chrome — nav bar
 * (“EXPLORE THIS TOPIC”) + topic cards.
 * Overview `/wffdoverview` shows Page 1.
 * Use on every `wffd*` route.
 */
export function WffdNavChrome() {
  return (
    <AttractionNavChrome
      topics={WFFD_MENU_TOPICS}
      exploreNoun="TOPIC"
      menuTitle="Explore This Topic"
    />
  );
}
