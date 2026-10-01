"use client";

import { useCallback, useId, useState } from "react";
import { NavBar } from "@/components/NavBar";
import {
  AttractionTopicsMenu,
  type AttractionTopic,
} from "@/components/AttractionTopicsMenu";

/**
 * Attraction page chrome: full-bleed **nav bar** that opens the **nav menu**.
 * Click/tap opens the menu; hover does not. Menu stays open until X, a topic
 * link, Escape, or a click/tap outside (backdrop).
 *
 * HARD RULE — on legacy content pages, the navy (`#26346e`) title banner must
 * follow immediately after this chrome (GuidebookSouvenirPage /
 * InformationManualPage / LocateMapTitleBar / equivalent `.titleBar`). Do not
 * put body copy directly under the nav.
 */
export function AttractionNavChrome({
  topics,
  exploreNoun = "ATTRACTION",
  menuTitle,
}: {
  topics: AttractionTopic[];
  /**
   * @deprecated No longer shown on the grey nav bar.
   * Kept optional so existing *NavChrome wrappers keep compiling.
   */
  navLabel?: string;
  /** Noun in nav bar “EXPLORE THIS …”, e.g. ATTRACTION or PERSON. */
  exploreNoun?: string;
  /** Optional nav menu header; defaults from exploreNoun. */
  menuTitle?: string;
}) {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  const openMenu = useCallback(() => {
    setOpen(true);
  }, []);

  const resolvedMenuTitle =
    menuTitle ??
    `Explore This ${exploreNoun.charAt(0)}${exploreNoun.slice(1).toLowerCase()}`;

  return (
    <>
      <NavBar
        onClickOpen={openMenu}
        menuId={menuId}
        menuOpen={open}
        exploreNoun={exploreNoun}
      />
      <AttractionTopicsMenu
        id={menuId}
        topics={topics}
        open={open}
        onClose={close}
        title={resolvedMenuTitle}
      />
    </>
  );
}
