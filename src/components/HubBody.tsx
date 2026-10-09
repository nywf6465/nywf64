import Image from "next/image";
import Link from "next/link";
import styles from "./HubBody.module.css";

/**
 * Homepage category hubs — eight hub icons in a 2×4 grid of light-blue
 * rounded cards on white (white space around each card). Link indicator sits
 * at the lower-right of each hub image.
 */
const HUBS = [
  {
    id: "pavilions",
    title: "Pavilions, Attractions & Exhibits",
    href: "/pavilions",
    iconSrc: "/images/pavilions/pavilions-icon.png",
  },
  {
    id: "maps",
    title: "Interactive Maps & Photos",
    href: "/maps",
    iconSrc: "/images/maps/maps-icon.png",
  },
  {
    id: "information",
    title: "The Information Booth",
    href: "/information",
    iconSrc: "/images/information/information-icon.png",
  },
  {
    id: "people",
    title: "People of the Fair",
    href: "/people",
    iconSrc: "/images/people/people-icon.png",
  },
  {
    id: "stories",
    title: "Stories and Essays",
    href: "/stories",
    iconSrc: "/images/stories/stories-icon.png",
  },
  {
    id: "artifacts",
    title: "Artifacts & Legacies",
    href: "/artifacts",
    iconSrc: "/images/artifacts/artifacts-icon.png",
  },
  {
    id: "flushing-meadows",
    title: "Flushing Meadows Park",
    href: "/flushing-meadows",
    iconSrc: "/images/flushing-meadows/flushing-icon.png",
  },
  {
    id: "expos",
    title: "Other Fairs & Expos",
    href: "/expos",
    iconSrc: "/images/expos/expos-icon.png",
  },
] as const;

export function HubBody() {
  return (
    <section
      id="explore"
      className={styles.section}
      aria-label="Explore Fair categories"
    >
      <ul className={styles.grid}>
        {HUBS.map((hub) => (
          <li key={hub.id} className={styles.item}>
            <Link href={hub.href} className={styles.card} aria-label={hub.title}>
              <span className={styles.icon}>
                <Image
                  src={hub.iconSrc}
                  alt=""
                  width={762}
                  height={330}
                  className={styles.iconArt}
                  unoptimized
                />
                <span className={styles.linksSymbol} aria-hidden="true">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/links-symbol.png"
                    alt=""
                    width={177}
                    height={178}
                    className={styles.linksSymbolArt}
                    draggable={false}
                  />
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
