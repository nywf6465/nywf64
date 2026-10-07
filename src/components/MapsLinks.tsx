import Image from "next/image";
import Link from "next/link";
import styles from "./MapsLinks.module.css";

/** Exact user artwork — base unchanged. Hover crops swap burgundy↔navy on text/arrows only; thumbnails untouched. */
const TOPICS = [
  {
    id: "1964-official-souvenir-map",
    title: "1964 Official Souvenir Map of the Fair",
    href: "/maps01",
    hoverSrc: "/images/maps-hover/1964-official-souvenir-map.jpg",
    left: "2.669%",
    top: "1.393%",
    width: "47.094%",
    height: "24.759%",
  },
  {
    id: "industrial-area-map",
    title: "Industrial Area Map",
    href: "/maps/industrial-area-map",
    hoverSrc: "/images/maps-hover/industrial-area-map.jpg",
    left: "50.652%",
    top: "1.393%",
    width: "46.856%",
    height: "24.759%",
  },
  {
    id: "international-area-map",
    title: "International Area Map",
    href: "/maps/international-area-map",
    hoverSrc: "/images/maps-hover/international-area-map.jpg",
    left: "2.669%",
    top: "27.760%",
    width: "47.094%",
    height: "23.794%",
  },
  {
    id: "federal-and-state-area-map",
    title: "Federal & State Area Map",
    href: "/maps/federal-and-state-area-map",
    hoverSrc: "/images/maps-hover/federal-and-state-area-map.jpg",
    left: "50.652%",
    top: "27.760%",
    width: "46.856%",
    height: "23.794%",
  },
  {
    id: "transportation-area-map",
    title: "Transportation Area Map",
    href: "/maps/transportation-area-map",
    hoverSrc: "/images/maps-hover/transportation-area-map.jpg",
    left: "2.669%",
    top: "53.162%",
    width: "47.094%",
    height: "23.794%",
  },
  {
    id: "amusement-area-map",
    title: "Amusement Area Map",
    href: "/maps/amusement-area-map",
    hoverSrc: "/images/maps-hover/amusement-area-map.jpg",
    left: "50.652%",
    top: "53.162%",
    width: "46.856%",
    height: "23.794%",
  },
  {
    id: "the-big-picture",
    title: "The BIG Picture",
    href: "/maps/the-big-picture",
    hoverSrc: "/images/maps-hover/the-big-picture.jpg",
    left: "2.669%",
    top: "78.457%",
    width: "94.840%",
    height: "20.900%",
  },
] as const;

export function MapsLinks() {
  return (
    <section
      className={styles.section}
      aria-label="Interactive Maps links"
    >
      <div className={styles.frame}>
        <Image
          src="/images/maps-links.jpg"
          alt="Interactive Maps: 1964 Official Souvenir Map of the Fair; Industrial Area Map; International Area Map; Federal & State Area Map; Transportation Area Map; Amusement Area Map; The BIG Picture"
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
