"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef, useState } from "react";
import {
  IN_SITE_PREVIOUS_FALLBACK,
  resolveInSitePrevious,
} from "@/lib/inSiteHistory";
import styles from "./Nav2Bar.module.css";

export type Nav2BarProps = {
  /**
   * PREVIOUS target when `explicitPrevious` is true.
   * Otherwise unused — in-site history drives PREVIOUS (option 2).
   */
  previousHref?: string;
  /**
   * When true, PREVIOUS uses `previousHref` instead of in-site history.
   * Used by lettered A–Z pages for sequential letter navigation.
   */
  explicitPrevious?: boolean;
  /** Landing for Back to Overview — placeholder until wired. */
  overviewHref?: string;
  /** Landing for NEXT → — placeholder until wired. */
  nextHref?: string;
  /**
   * Hide the middle “Back to Overview” control (letter A–Z pages).
   * Bar becomes PREVIOUS | NEXT only.
   */
  hideOverview?: boolean;
};

function OverviewIcon() {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 48 36"
      aria-hidden="true"
      focusable="false"
    >
      <ellipse
        cx="24"
        cy="20"
        rx="18"
        ry="12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M6 20h36M24 8v24M12 12c4 6 4 16 0 22M36 12c-4 6-4 16 0 22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M10 16c8 2 20 2 28 0M10 24c8-2 20-2 28 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
      />
    </svg>
  );
}

/**
 * Nav2 bar — prototype model for attraction pages.
 * User term: **nav2 bar**. Full width matching the site footer.
 * Height syncs to the **nav bar** on the page when present.
 * Default: three equal sections (PREVIOUS | Overview | NEXT).
 * Letter A–Z pages use `hideOverview` + `explicitPrevious` (PREVIOUS | NEXT).
 *
 * By default PREVIOUS uses in-site session history (never history.back /
 * external referrers), falling back to `/atoz` when no prior same-origin page
 * exists. Set `explicitPrevious` to drive PREVIOUS from `previousHref`.
 */
export function Nav2Bar({
  previousHref: previousHrefProp,
  explicitPrevious = false,
  overviewHref = "#",
  nextHref = "#",
  hideOverview = false,
}: Nav2BarProps) {
  const barRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname() || "/";
  const [historyPreviousHref, setHistoryPreviousHref] = useState(
    IN_SITE_PREVIOUS_FALLBACK,
  );

  useLayoutEffect(() => {
    if (explicitPrevious) return;
    setHistoryPreviousHref(resolveInSitePrevious(pathname));
  }, [pathname, explicitPrevious]);

  useLayoutEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const sync = () => {
      const nav = document.querySelector<HTMLElement>("[data-nav-bar]");
      if (!nav) return;
      // Match the rendered grey strip height exactly (border-box).
      const h = Math.round(nav.getBoundingClientRect().height);
      if (h > 0) {
        bar.style.setProperty("height", `${h}px`);
        bar.style.setProperty("min-height", `${h}px`);
        bar.style.setProperty("max-height", `${h}px`);
        bar.style.setProperty("padding-top", "0");
        bar.style.setProperty("padding-bottom", "0");
      }
    };

    sync();
    const nav = document.querySelector<HTMLElement>("[data-nav-bar]");
    const ro = nav ? new ResizeObserver(sync) : null;
    if (nav && ro) ro.observe(nav);
    window.addEventListener("resize", sync);
    return () => {
      ro?.disconnect();
      window.removeEventListener("resize", sync);
    };
  }, []);

  const previousHref =
    explicitPrevious && previousHrefProp
      ? previousHrefProp
      : historyPreviousHref;

  return (
    <nav className={styles.wrap} aria-label="Attraction page navigation">
      <div
        className={hideOverview ? `${styles.bar} ${styles.barNoOverview}` : styles.bar}
        ref={barRef}
      >
        <Link href={previousHref} className={styles.section}>
          <span className={styles.sideCluster}>
            <span className={styles.arrow} aria-hidden="true">
              ←
            </span>
            <span className={styles.sideLabel}>PREVIOUS</span>
          </span>
        </Link>

        <span className={styles.divider} aria-hidden="true" />

        {!hideOverview ? (
          <>
            <Link href={overviewHref} className={styles.section}>
              <span className={styles.overviewCluster}>
                <OverviewIcon />
                <span className={styles.overviewLabel}>
                  Back to
                  <br />
                  Overview
                </span>
              </span>
            </Link>

            <span className={styles.divider} aria-hidden="true" />
          </>
        ) : null}

        <Link href={nextHref} className={styles.section}>
          <span className={styles.sideCluster}>
            <span className={styles.sideLabel}>NEXT</span>
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </span>
        </Link>
      </div>
    </nav>
  );
}
