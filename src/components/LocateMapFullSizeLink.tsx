import Link from "next/link";
import styles from "@/styles/locateMapPage.module.css";

/**
 * Standard “full-size souvenir map” note box for locate-it map pages.
 * Includes the circular link indicator used on A–Z link cards.
 */
function LinkIndicator() {
  return (
    <span className={styles.linkIndicator} aria-hidden="true">
      <svg viewBox="0 0 24 24" width="18" height="18" focusable="false">
        <path
          d="M9.2 6.4 14.8 12 9.2 17.6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function LocateMapFullSizeLink({
  href = "/maps/1964-official-souvenir-map",
}: {
  href?: string;
}) {
  return (
    <p className={styles.mapNote}>
      <Link href={href} className={styles.mapNoteLink}>
        <span className={styles.mapNoteText}>
          See a <i>full-size</i> version of the 1964 Official Souvenir Map (
          <b>LARGE&nbsp;download</b>).
        </span>
        <LinkIndicator />
      </Link>
    </p>
  );
}
