"use client";

import { usePathname } from "next/navigation";
import styles from "./NavBar.module.css";
import { pageNumberFromPath } from "@/lib/pageNumberFromPath";

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
 * White strip with hamburger + EXPLORE THIS ATTRACTION, left-aligned to the
 * burgundy hero bar, with clear space above and below the bar. On numbered
 * routes, “Page N” (zero-suppressed) is right-aligned on the same bar.
 * Click/tap opens the nav menu; hover does not.
 */
export function NavBar({
  onClickOpen,
  menuId,
  menuOpen = false,
  exploreNoun = "ATTRACTION",
}: NavBarProps) {
  const pathname = usePathname() ?? "";
  const pageNumber = pageNumberFromPath(pathname);
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
        {pageNumber != null ? (
          <span className={styles.pageLabel} aria-label={`Page ${pageNumber}`}>
            Page {pageNumber}
          </span>
        ) : null}
      </div>
    </div>
  );
}
