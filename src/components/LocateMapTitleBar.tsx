import styles from "@/styles/locateMapPage.module.css";

/**
 * Shared navy title bar for locate-it map pages (/bellmap, /fordmap, …).
 *
 * HARD RULE — navy title banner: place this immediately beneath the attraction
 * nav on every locate-it map page. Never skip it or replace it with a body `<h1>`.
 */
export const LOCATE_MAP_TITLE = "1964 Official Souvenir Map";

export function LocateMapTitleBar({
  titleId = "locate-map-title",
}: {
  titleId?: string;
}) {
  return (
    <header className={styles.titleBar}>
      <h1 id={titleId} className={styles.titleBarMain}>
        {LOCATE_MAP_TITLE}
      </h1>
    </header>
  );
}
