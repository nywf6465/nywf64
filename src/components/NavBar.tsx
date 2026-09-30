"use client";

import { useEffect, useRef } from "react";
import styles from "./NavBar.module.css";

export type NavBarProps = {
  /** Opens the nav menu while hovering the explore control. */
  onHoverOpen: () => void;
  /** Closes an unpinned hover menu when the pointer leaves the explore control. */
  onHoverLeave: () => void;
  /** Pins the nav menu open until closed via X, link, Escape, or backdrop. */
  onClickOpen: () => void;
  /** Optional aria relationship to the nav menu panel id. */
  menuId?: string;
  /** Whether the nav menu is open (for aria-expanded). */
  menuOpen?: boolean;
  /**
   * Noun in “EXPLORE THIS …”, e.g. ATTRACTION (default) or PERSON.
   */
  exploreNoun?: string;
  /**
   * Lift the bar above the sliding menu during hover-peek so the drawer
   * does not steal pointer events and flicker the menu open/closed.
   */
  elevate?: boolean;
  /**
   * @deprecated No longer shown on the grey nav bar (redundant with page chrome).
   * Kept optional so existing AttractionNavChrome call sites keep compiling.
   */
  label?: string;
};

/**
 * Nav bar — prototype model for attraction pages.
 * User term: **nav bar**. Full-bleed width matching the site header.
 * Grey strip with left-justified hamburger + EXPLORE THIS ATTRACTION.
 * Hover peeks the nav menu; click pins it open.
 */
export function NavBar({
  onHoverOpen,
  onHoverLeave,
  onClickOpen,
  menuId,
  menuOpen = false,
  exploreNoun = "ATTRACTION",
  elevate = false,
}: NavBarProps) {
  const exploreText = `EXPLORE THIS ${exploreNoun}`;
  const aria = `Explore this ${exploreNoun.toLowerCase()}`;
  const exploreRef = useRef<HTMLButtonElement>(null);
  const hoverOpenRef = useRef(onHoverOpen);
  const hoverLeaveRef = useRef(onHoverLeave);
  hoverOpenRef.current = onHoverOpen;
  hoverLeaveRef.current = onHoverLeave;

  // Native mouseenter/leave so hover peek works reliably (including automation).
  useEffect(() => {
    const el = exploreRef.current;
    if (!el) return;
    const enter = () => hoverOpenRef.current();
    const leave = () => hoverLeaveRef.current();
    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mouseenter", enter);
      el.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div
      className={elevate ? `${styles.bar} ${styles.barElevated}` : styles.bar}
      role="navigation"
      aria-label={aria}
      data-nav-bar=""
    >
      <div className={styles.inner}>
        <button
          ref={exploreRef}
          type="button"
          className={styles.explore}
          onClick={onClickOpen}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          aria-label={`${aria} — open nav menu`}
        >
          <span className={styles.hamburger} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className={styles.exploreText}>{exploreText}</span>
        </button>
      </div>
    </div>
  );
}
