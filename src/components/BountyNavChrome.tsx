"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { BOUNTY_MENU_TOPICS } from "@/data/bountyMenu";

/**
 * Bounty menu chrome — nav bar + shared **bounty menu**.
 * Use on every page whose route begins with `bounty`.
 */
export function BountyNavChrome() {
  return (
    <AttractionNavChrome
      topics={BOUNTY_MENU_TOPICS}
      navLabel="Bounty"
    />
  );
}
