import Image from "next/image";
import Link from "next/link";
import styles from "./DisneyShowsLinks.module.css";

/**
 * Disney Shows links section (below guidebook banner, above footer).
 * Terminology: each pavilion image is a "pavilion"; navy circle+arrow is a "link indicator".
 * Pavilion image + title/body are corresponding links to the same destination.
 */
const ROWS = [
  {
    id: "ford01",
    href: "/ford01",
    title: 'Ford — "The Magic Skyway"',
    body: "Animated displays and scale models depict man's progress from prehistoric times to the Space Age. Viewers ride past some of the exhibits in new Ford cars.",
    pavilionSrc: "/images/disney-shows/ford01-pavilion.png",
    pavilionWidth: 762,
    pavilionHeight: 330,
    pavilionAlt: "Ford",
  },
  {
    id: "illinois01",
    href: "/illinoisguidebook",
    title: 'Illinois — "Great Moments with Mr. Lincoln"',
    body: "The highlight of a collection of Lincolniana and state lore is Walt Disney's moving, talking figure of Abe Lincoln himself.",
    pavilionSrc: "/images/disney-shows/illinois01-pavilion.png",
    pavilionWidth: 762,
    pavilionHeight: 330,
    pavilionAlt: "Illinois",
  },
  {
    id: "genele01",
    href: "/geneleguidebook",
    title: 'General Electric — "Carousel of Progress"',
    body: "In a one-hour show, the changes electricity has brought in American living are dramatized by life-sized animated figures created by Walt Disney.",
    pavilionSrc: "/images/disney-shows/genele01-pavilion.png",
    pavilionWidth: 762,
    pavilionHeight: 330,
    pavilionAlt: "General Electric",
  },
  {
    id: "pepsi01",
    href: "/pepsiguidebook",
    title: 'Pepsi-Cola — "It\'s a Small World"',
    body: "A salute to the children of the world, designed by Walt Disney, presents animated figures frolicking in miniature settings of many lands.",
    pavilionSrc: "/images/disney-shows/pepsi01-pavilion.png",
    pavilionWidth: 762,
    pavilionHeight: 330,
    pavilionAlt: "Pepsi-Cola",
  },
] as const;

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

export function DisneyShowsLinks() {
  return (
    <section className={styles.section} aria-label="Disney Shows links">
      <ul className={styles.list}>
        {ROWS.map((row) => (
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
              <span className={styles.body}>{row.body}</span>
              <span className={styles.title}>{row.title}</span>
              <LinkIndicator />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
