"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { recordInSiteVisit } from "@/lib/inSiteHistory";

/**
 * Records each same-origin App Router path into sessionStorage so nav2
 * PREVIOUS can return to the last in-site page (never external referrers).
 */
export function InSiteHistoryTracker() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (!pathname) return;
    recordInSiteVisit(pathname);
  }, [pathname]);

  return null;
}
