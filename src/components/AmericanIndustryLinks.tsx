import Image from "next/image";
import Link from "next/link";
import { AMERICAN_INDUSTRY_CARDS } from "@/data/americanIndustryCards";
import styles from "./FountainsLinks.module.css";

/**
 * Exhibits of American Industry links (below guidebook banner).
 * Same layout as Religions / Fountains / A-to-Z letter pages.
 * Rows: All-State … Bell System (`/A`, `/B`).
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

export function AmericanIndustryLinks() {
  if (AMERICAN_INDUSTRY_CARDS.length === 0) {
    return (
      <section
        className={styles.section}
        aria-label="Exhibits of American Industry links"
      />
    );
  }

  return (
    <section
      className={styles.section}
      aria-label="Exhibits of American Industry links"
    >
      <ul className={styles.list}>
        {AMERICAN_INDUSTRY_CARDS.map((row) => (
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
