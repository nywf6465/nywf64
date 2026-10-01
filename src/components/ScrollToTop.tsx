"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * App Router scrolls to the first Page segment on navigation, which lands on
 * the hero and leaves the layout SiteHeader above the viewport. Force the
 * window to the document top so every route opens at the header.
 */
export function ScrollToTop() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const toTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    };

    toTop();

    // Next may scrollIntoView the page segment after this layout effect.
    const raf = window.requestAnimationFrame(toTop);
    const t = window.setTimeout(toTop, 0);

    return () => {
      window.cancelAnimationFrame(raf);
      window.clearTimeout(t);
    };
  }, [pathname]);

  return null;
}
