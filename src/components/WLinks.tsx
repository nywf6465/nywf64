import Image from "next/image";
import Link from "next/link";
import { W_CARDS } from "@/data/wCards";
import styles from "./FountainsLinks.module.css";

/**
 * W-letter links section — same fountains link-card model as prior letter pages.
 * W-specific rows live in `wCards.ts` (empty until cards arrive).
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

export function WLinks() {
  if (W_CARDS.length === 0) {
    return (
      <section
        className={styles.section}
        aria-label="W — Attractions from A to Z links"
      />
    );
  }

  return (
    <section
      className={styles.section}
      aria-label="W — Attractions from A to Z links"
    >
      <ul className={styles.list}>
        {W_CARDS.map((row) => (
          <li key={row.id} className={styles.item}>
            <Link href={row.href} className={styles.row}>
              <span className={styles.pavilion}>
                <Image
                  src={row.pavilionSrc}
                  alt={row.pavilionAlt}
                  width={row.pavilionWidth}
                  height={row.pavilionHeight}
                  className={styles.pavilionArt}
                  unoptimized
                />
              </span>
              <span
                className={
                  row.bodyItalic
                    ? `${styles.body} ${styles.bodyItalic}`
                    : styles.body
                }
              >
                {row.body}
              </span>
              <span className={styles.title}>{row.title}</span>
              <LinkIndicator />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
