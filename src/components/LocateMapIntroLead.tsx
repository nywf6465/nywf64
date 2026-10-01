import styles from "@/styles/locateMapPage.module.css";

/**
 * Standard locate-it intro lead for map pages.
 * “Locate it!” is navy (#26346e) — map-page standard.
 */
export function LocateMapIntroLead() {
  return (
    <p className={styles.introLead}>
      <strong>Locate it!</strong> The location of this pavilion or exhibit is
      indicated below.
    </p>
  );
}
