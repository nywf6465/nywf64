"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useState } from "react";
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
  /**
   * @deprecated Overview control removed from nav2. Kept so call sites compile.
   */
  overviewHref?: string;
  /** Landing for NEXT → — placeholder until wired. */
  nextHref?: string;
  /**
   * @deprecated Overview control removed from nav2. Kept so call sites compile.
   */
  hideOverview?: boolean;
};

/**
 * Nav2 bar — prototype model for attraction pages.
 * User term: **nav2 bar**. Full width matching the site footer.
 * PREVIOUS | NEXT only. Height matches the mobile footer utility row.
 *
 * By default PREVIOUS uses in-site session history (never history.back /
 * external referrers), falling back to `/atoz` when no prior same-origin page
 * exists. Set `explicitPrevious` to drive PREVIOUS from `previousHref`.
 */
export function Nav2Bar({
  previousHref: previousHrefProp,
  explicitPrevious = false,
  nextHref = "#",
}: Nav2BarProps) {
  const pathname = usePathname() || "/";
  const [historyPreviousHref, setHistoryPreviousHref] = useState(
    IN_SITE_PREVIOUS_FALLBACK,
  );

  useLayoutEffect(() => {
    if (explicitPrevious) return;
    setHistoryPreviousHref(resolveInSitePrevious(pathname));
  }, [pathname, explicitPrevious]);

  const previousHref =
    explicitPrevious && previousHrefProp
      ? previousHrefProp
      : historyPreviousHref;

  return (
    <nav className={styles.wrap} aria-label="Attraction page navigation">
      <div className={styles.bar}>
        <Link href={previousHref} className={styles.section}>
          <span className={styles.sideCluster}>
            <span className={styles.arrow} aria-hidden="true">
              ←
            </span>
            <span className={styles.sideLabel}>PREVIOUS</span>
          </span>
        </Link>

        <span className={styles.divider} aria-hidden="true" />

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
