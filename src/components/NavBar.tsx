"use client";

import styles from "./NavBar.module.css";

export type NavBarProps = {
  /** Opens the nav menu on click/tap (hover does not open). */
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
   * @deprecated No longer shown on the grey nav bar (redundant with page chrome).
   * Kept optional so existing AttractionNavChrome call sites keep compiling.
   */
  label?: string;
};

/**
 * Nav bar — prototype model for attraction pages.
 * User term: **nav bar**. Full-bleed width matching the site header.
 * Grey strip with left-justified hamburger + EXPLORE THIS ATTRACTION.
 * Click/tap opens the nav menu; hover does not.
 */
export function NavBar({
  onClickOpen,
  menuId,
  menuOpen = false,
  exploreNoun = "ATTRACTION",
}: NavBarProps) {
  const exploreText = `EXPLORE THIS ${exploreNoun}`;
  const aria = `Explore this ${exploreNoun.toLowerCase()}`;

  return (
    <div
      className={styles.bar}
      role="navigation"
      aria-label={aria}
      data-nav-bar=""
    >
      <div className={styles.inner}>
        <button
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
