/**
 * In-site last-page history for nav2 PREVIOUS (option 2).
 * Same-origin paths only — never reads document.referrer.
 */

export const IN_SITE_HISTORY_KEY = "nywf64:in-site-history";
export const IN_SITE_PREVIOUS_FALLBACK = "/atoz";

export type InSiteHistoryState = {
  /** Path last recorded as the current page. */
  current: string | null;
  /** Path to use for PREVIOUS (visit before `current`). */
  previous: string | null;
};

function normalizePath(path: string): string {
  if (!path) return "/";
  // pathname only — strip query/hash if ever passed
  const bare = path.split(/[?#]/, 1)[0] || "/";
  if (bare.length > 1 && bare.endsWith("/")) return bare.slice(0, -1);
  return bare;
}

export function loadInSiteHistory(): InSiteHistoryState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(IN_SITE_HISTORY_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as InSiteHistoryState;
    return {
      current: parsed.current ? normalizePath(parsed.current) : null,
      previous: parsed.previous ? normalizePath(parsed.previous) : null,
    };
  } catch {
    return null;
  }
}

export function saveInSiteHistory(state: InSiteHistoryState): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(IN_SITE_HISTORY_KEY, JSON.stringify(state));
  } catch {
    // private mode / quota — ignore
  }
}

/** Record a same-origin visit. Skips if path matches the last current (no double-push). */
export function recordInSiteVisit(pathname: string): void {
  const path = normalizePath(pathname);
  const state = loadInSiteHistory() ?? { current: null, previous: null };
  if (state.current === path) return;
  saveInSiteHistory({
    previous: state.current,
    current: path,
  });
}

/**
 * Resolve PREVIOUS target for the given pathname.
 * Works even if this visit has not been recorded yet (uses last `current` as previous).
 */
export function resolveInSitePrevious(pathname: string): string {
  const path = normalizePath(pathname);
  const state = loadInSiteHistory();
  if (!state) return IN_SITE_PREVIOUS_FALLBACK;

  if (state.current === path) {
    return state.previous ?? IN_SITE_PREVIOUS_FALLBACK;
  }

  // Visit not recorded yet — last current is the prior in-site page
  if (state.current) return state.current;
  return IN_SITE_PREVIOUS_FALLBACK;
}
