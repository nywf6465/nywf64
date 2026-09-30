import Image from "next/image";
import Link from "next/link";
import styles from "./FlushingMeadowsLinks.module.css";

/** Exact user artwork — base unchanged. Hover crops swap burgundy↔navy on text/arrows only; thumbnails untouched. */
const TOPICS = [
  {
    id: "1939-1940",
    title: "The 1939/1940 New York World’s Fair",
    href: "/flushing-meadows/1939-1940",
    hoverSrc: "/images/flushing-hover/1939-1940.jpg",
    left: "2.788%",
    top: "2.787%",
    width: "94.899%",
    height: "31.618%",
  },
  {
    id: "saga",
    title: "The Saga of Flushing Meadows",
    href: "/flushing-meadows/saga",
    hoverSrc: "/images/flushing-hover/saga.jpg",
    left: "2.788%",
    top: "36.120%",
    width: "94.840%",
    height: "28.296%",
  },
  {
    id: "park-today",
    title: "The Park Today",
    href: "/flushing-meadows/park-today",
    hoverSrc: "/images/flushing-hover/park-today.jpg",
    left: "2.788%",
    top: "66.345%",
    width: "94.840%",
    height: "29.904%",
  },
] as const;

export function FlushingMeadowsLinks() {
  return (
    <section
      className={styles.section}
      aria-label="Flushing Meadows Park links"
    >
      <div className={styles.frame}>
        <Image
          src="/images/flushing-meadows-park-links.jpg"
          alt="Flushing Meadows Park: The 1939/1940 New York World’s Fair; The Saga of Flushing Meadows; The Park Today."
          width={1686}
          height={933}
          sizes="100vw"
          className={styles.art}
          unoptimized
        />
        {TOPICS.map((topic) => (
          <Link
            key={topic.id}
            href={topic.href}
            className={styles.hotspot}
            style={{
              left: topic.left,
              top: topic.top,
              width: topic.width,
              height: topic.height,
            }}
            aria-label={topic.title}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={topic.hoverSrc}
              alt=""
              className={styles.hoverArt}
              draggable={false}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
