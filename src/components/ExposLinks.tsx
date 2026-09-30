import Image from "next/image";
import Link from "next/link";
import styles from "./ExposLinks.module.css";

/** Expos topic cards — default colors only (no navy↔burgundy hover swap). */
const TOPICS = [
  {
    id: "brussels-1958",
    title: "Brussels World's Fair 1958",
    href: "/expos/brussels-1958",
    left: "2.788%",
    top: "0.654%",
    width: "94.899%",
    height: "18.925%",
  },
  {
    id: "seattle-1962",
    title: "Century 21 Exposition (Seattle 1962)",
    href: "/expos/seattle-1962",
    left: "2.788%",
    top: "20.596%",
    width: "94.899%",
    height: "18.925%",
  },
  {
    id: "expo67",
    title: "Expo 67 (Montreal)",
    href: "/expos/expo67",
    left: "2.788%",
    top: "40.538%",
    width: "94.899%",
    height: "18.925%",
  },
  {
    id: "hemisfair-1968",
    title: "HemisFair 1968 (San Antonio)",
    href: "/expos/hemisfair-1968",
    left: "2.788%",
    top: "60.479%",
    width: "94.899%",
    height: "18.925%",
  },
  {
    id: "expo70",
    title: "Expo '70 (Osaka)",
    href: "/expos/expo70",
    left: "2.788%",
    top: "80.421%",
    width: "94.899%",
    height: "18.925%",
  },
] as const;

export function ExposLinks() {
  return (
    <section className={styles.section} aria-label="Other Fairs & Expos links">
      <div className={styles.frame}>
        <Image
          src="/images/expos-links.jpg"
          alt="Other Fairs & Expos: Brussels World's Fair 1958; Century 21 Exposition (Seattle 1962); Expo 67 (Montreal); HemisFair 1968 (San Antonio); Expo '70 (Osaka)."
          width={1686}
          height={2753}
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
          />
        ))}
      </div>
    </section>
  );
}
