"use client";

import { useCallback, useId, useRef, useState } from "react";
import { NavBar } from "@/components/NavBar";
import {
  AttractionTopicsMenu,
  type AttractionTopic,
} from "@/components/AttractionTopicsMenu";

/**
 * Attraction page chrome: full-bleed **nav bar** that opens the **nav menu**.
 * Hover peeks the menu; leaving the explore control closes it unless pinned.
 * Click pins the menu open until X, a topic link, Escape, or backdrop.
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
  const [pinned, setPinned] = useState(false);
  const menuId = useId();
  const pinnedRef = useRef(false);
  pinnedRef.current = pinned;

  const close = useCallback(() => {
    setPinned(false);
    setOpen(false);
  }, []);

  const openHover = useCallback(() => {
    setOpen(true);
  }, []);

  const leaveHover = useCallback(() => {
    if (!pinnedRef.current) setOpen(false);
  }, []);

  const openPinned = useCallback(() => {
    setPinned(true);
    setOpen(true);
  }, []);

  const resolvedMenuTitle =
    menuTitle ??
    `Explore This ${exploreNoun.charAt(0)}${exploreNoun.slice(1).toLowerCase()}`;

  const peeking = open && !pinned;

  return (
    <>
      <NavBar
        onHoverOpen={openHover}
        onHoverLeave={leaveHover}
        onClickOpen={openPinned}
        menuId={menuId}
        menuOpen={open}
        exploreNoun={exploreNoun}
        elevate={peeking}
      />
      <AttractionTopicsMenu
        id={menuId}
        topics={topics}
        open={open}
        onClose={close}
        title={resolvedMenuTitle}
        lockScroll={pinned}
        showBackdrop={pinned}
      />
    </>
  );
}
