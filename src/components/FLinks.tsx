import Image from "next/image";
import Link from "next/link";
import { F_CARDS } from "@/data/fCards";
import styles from "./FountainsLinks.module.css";

/**
 * F-letter links section — same fountains link-card model as `/B` / `/E`.
 * F-specific rows live in `fCards.ts`.
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

export function FLinks() {
  if (F_CARDS.length === 0) {
    return (
      <section
        className={styles.section}
        aria-label="F — Attractions from A to Z links"
      />
    );
  }

  return (
    <section
      className={styles.section}
      aria-label="F — Attractions from A to Z links"
    >
      <ul className={styles.list}>
        {F_CARDS.map((row) => (
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
