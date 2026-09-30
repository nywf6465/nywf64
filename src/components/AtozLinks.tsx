import Link from "next/link";
import { ATOZ_CARDS } from "@/data/atozCards";
import styles from "./AtozLinks.module.css";

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

/**
 * A-to-Z letter cards (below guidebook banner).
 * Mockup: letter left, range with lighter “to”, chevron right.
 */
export function AtozLinks() {
  return (
    <section className={styles.section} aria-label="Attractions from A to Z">
      <ul className={styles.list}>
        {ATOZ_CARDS.map((card) => (
          <li key={card.letter} className={styles.item}>
            <Link
              href={card.href}
              className={styles.row}
              aria-label={`${card.letter}: ${card.label}`}
            >
              <span className={styles.letter} aria-hidden="true">
                {card.letter}
              </span>
              <span className={styles.dots} aria-hidden="true" />
              <span className={styles.range}>
                <span className={styles.from}>{card.from}</span>{" "}
                <span className={styles.toWord}>to</span>{" "}
                <span className={styles.end}>{card.to}</span>
              </span>
              <LinkIndicator />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
