import Image from "next/image";
import Link from "next/link";
import styles from "./HubBody.module.css";

/**
 * Homepage category hubs — all eight ovals share one size (278×142 on the
 * 1206×522 plate ≈ 23.051% × 27.203%), matching Attractions as the reference.
 * Each oval ring is scaled to the same outer dimensions before layout.
 * Hover crops swap navy↔burgundy (red stars + light-blue ring preserved).
 */
const HUB_W = "23.051%";
const HUB_H = "27.203%";

const HUBS = [
  {
    id: "attractions",
    title: "Pavilions, Attractions & Exhibits",
    href: "/pavilions",
    hoverSrc: "/images/hubs-hover/attractions.jpg",
    left: "7.214%",
    top: "3.831%",
    width: HUB_W,
    height: HUB_H,
  },
  {
    id: "maps",
    title: "Interactive Maps & Photos",
    href: "/maps",
    hoverSrc: "/images/hubs-hover/maps.jpg",
    left: "38.474%",
    top: "3.831%",
    width: HUB_W,
    height: HUB_H,
  },
  {
    id: "information",
    title: "The Information Booth",
    href: "/information",
    hoverSrc: "/images/hubs-hover/information.jpg",
    left: "69.735%",
    top: "3.831%",
    width: HUB_W,
    height: HUB_H,
  },
  {
    id: "people",
    title: "People of the Fair",
    href: "/people",
    hoverSrc: "/images/hubs-hover/people.jpg",
    left: "7.214%",
    top: "36.398%",
    width: HUB_W,
    height: HUB_H,
  },
  {
    id: "stories",
    title: "Stories and Essays",
    href: "/stories",
    hoverSrc: "/images/hubs-hover/stories.jpg",
    left: "38.474%",
    top: "36.398%",
    width: HUB_W,
    height: HUB_H,
  },
  {
    id: "artifacts",
    title: "Artifacts & Legacies",
    href: "/artifacts",
    hoverSrc: "/images/hubs-hover/artifacts.jpg",
    left: "69.735%",
    top: "36.398%",
    width: HUB_W,
    height: HUB_H,
  },
  {
    id: "park",
    title: "Flushing Meadows Park",
    href: "/flushing-meadows",
    hoverSrc: "/images/hubs-hover/park.jpg",
    left: "22.803%",
    top: "68.966%",
    width: HUB_W,
    height: HUB_H,
  },
  {
    id: "other-fairs",
    title: "Other Fairs & Expos",
    href: "/expos",
    hoverSrc: "/images/hubs-hover/other-fairs.jpg",
    left: "54.063%",
    top: "68.966%",
    width: HUB_W,
    height: HUB_H,
  },
] as const;

export function HubBody() {
  return (
    <section
      id="explore"
      className={styles.section}
      aria-label="Explore Fair categories"
    >
      <div className={styles.frame}>
        <Image
          src="/images/homepage-hubs-body.jpg"
          alt="Fair section links: Pavilions, Attractions & Exhibits; Interactive Maps & Photos; The Information Booth; People of the Fair; Stories and Essays; Artifacts & Legacies; Flushing Meadows Park; Other Fairs & Expos."
          width={1206}
          height={522}
          sizes="100vw"
          className={styles.art}
          unoptimized
          priority={false}
        />
        {HUBS.map((hub) => (
          <Link
            key={hub.id}
            href={hub.href}
            className={styles.hotspot}
            style={{
              left: hub.left,
              top: hub.top,
              width: hub.width,
              height: hub.height,
            }}
            aria-label={hub.title}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={hub.hoverSrc}
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
