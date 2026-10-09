import Image from "next/image";
import Link from "next/link";
import styles from "./PavilionsLinks.module.css";

/** Exact user artwork — base unchanged. Hover crops swap burgundy↔navy on text/arrows only; thumbnails untouched. */
const TOPICS = [
  {
    id: "attractions-from-a-to-z",
    title: "The Attractions from A to Z",
    href: "/atoz",
    hoverSrc: "/images/pavilions-hover/attractions-from-a-to-z.jpg",
    left: "2.148%",
    top: "0.421%",
    width: "46.549%",
    height: "7.510%",
  },
  {
    id: "top-ten-attractions",
    title: "The Top Ten Attractions",
    href: "/top-ten",
    hoverSrc: "/images/pavilions-hover/top-ten-attractions.jpg",
    left: "51.367%",
    top: "0.421%",
    width: "46.615%",
    height: "7.510%",
  },
  {
    id: "disney-shows",
    title: "The Disney Shows",
    href: "/pavilions/disney-shows",
    hoverSrc: "/images/pavilions-hover/disney-shows.jpg",
    left: "2.148%",
    top: "8.467%",
    width: "46.549%",
    height: "7.625%",
  },
  {
    id: "fountains-lighting-and-effects",
    title: "Fountains, Lighting and Effects",
    href: "/pavilions/fountains",
    hoverSrc: "/images/pavilions-hover/fountains-lighting-and-effects.jpg",
    left: "51.367%",
    top: "8.467%",
    width: "46.615%",
    height: "7.701%",
  },
  {
    id: "religion-at-the-fair",
    title: "Religion at the Fair",
    href: "/pavilions/religions",
    hoverSrc: "/images/pavilions-hover/religion-at-the-fair.jpg",
    left: "2.148%",
    top: "16.667%",
    width: "46.549%",
    height: "7.663%",
  },
  {
    id: "restaurants-bars-and-eateries",
    title: "Restaurants, Bars & Eateries",
    href: "/pavilions/restaurants",
    hoverSrc: "/images/pavilions-hover/restaurants-bars-and-eateries.jpg",
    left: "51.367%",
    top: "16.667%",
    width: "46.615%",
    height: "7.663%",
  },
  {
    id: "quiet-spaces-and-rest-areas",
    title: "Quiet Spaces and Rest Areas",
    href: "/pavilions/quietareas",
    hoverSrc: "/images/pavilions-hover/quiet-spaces-and-rest-areas.jpg",
    left: "2.148%",
    top: "24.751%",
    width: "46.549%",
    height: "7.471%",
  },
  {
    id: "proposed-pavilions-never-built",
    title: "Proposed Pavilions That Were Never Built",
    href: "/pavilions/proposed-pavilions-never-built",
    hoverSrc: "/images/pavilions-hover/proposed-pavilions-never-built.jpg",
    left: "51.367%",
    top: "24.751%",
    width: "46.615%",
    height: "7.471%",
  },
  {
    id: "exhibits-of-american-industry",
    title: "Exhibits of American Industry",
    href: "/pavilions/exhibits-of-american-industry",
    hoverSrc: "/images/pavilions-hover/exhibits-of-american-industry.jpg",
    left: "0.977%",
    top: "38.774%",
    width: "47.721%",
    height: "11.264%",
  },
  {
    id: "exhibits-of-international-participants",
    title: "Exhibits of International Participants",
    href: "/pavilions/exhibits-of-international-participants",
    hoverSrc: "/images/pavilions-hover/exhibits-of-international-participants.jpg",
    left: "51.367%",
    top: "38.774%",
    width: "47.721%",
    height: "11.226%",
  },
  {
    id: "federal-and-state-exhibits",
    title: "Federal and State Exhibits",
    href: "/pavilions/federal-and-state-exhibits",
    hoverSrc: "/images/pavilions-hover/federal-and-state-exhibits.jpg",
    left: "0.977%",
    top: "50.498%",
    width: "47.721%",
    height: "11.648%",
  },
  {
    id: "entertainment-amusements-and-rides",
    title: "Entertainment, Amusements and Rides",
    href: "/pavilions/entertainment-amusements-and-rides",
    hoverSrc: "/images/pavilions-hover/entertainment-amusements-and-rides.jpg",
    left: "51.367%",
    top: "50.498%",
    width: "47.721%",
    height: "11.648%",
  },
  {
    id: "industrial-area-of-the-fair",
    title: "The Industrial Area of the Fair",
    href: "/pavilions/industrial-area-of-the-fair",
    hoverSrc: "/images/pavilions-hover/industrial-area-of-the-fair.jpg",
    left: "2.344%",
    top: "71.034%",
    width: "46.354%",
    height: "5.670%",
  },
  {
    id: "international-area-of-the-fair",
    title: "The International Area of the Fair",
    href: "/pavilions/international-area-of-the-fair",
    hoverSrc: "/images/pavilions-hover/international-area-of-the-fair.jpg",
    left: "51.562%",
    top: "71.034%",
    width: "46.810%",
    height: "5.670%",
  },
  {
    id: "federal-and-state-area-of-the-fair",
    title: "The Federal & State Area of the Fair",
    href: "/pavilions/federal-and-state-area-of-the-fair",
    hoverSrc: "/images/pavilions-hover/federal-and-state-area-of-the-fair.jpg",
    left: "1.953%",
    top: "81.456%",
    width: "46.745%",
    height: "5.594%",
  },
  {
    id: "transportation-area-of-the-fair",
    title: "The Transportation Area of the Fair",
    href: "/pavilions/transportation-area-of-the-fair",
    hoverSrc: "/images/pavilions-hover/transportation-area-of-the-fair.jpg",
    left: "51.888%",
    top: "81.456%",
    width: "46.484%",
    height: "5.594%",
  },
  {
    id: "amusement-area-of-the-fair",
    title: "The Amusement Area of the Fair",
    href: "/pavilions/amusement-area-of-the-fair",
    hoverSrc: "/images/pavilions-hover/amusement-area-of-the-fair.jpg",
    left: "2.018%",
    top: "91.839%",
    width: "47.591%",
    height: "5.249%",
  },
] as const;

export function PavilionsLinks() {
  return (
    <section
      className={styles.section}
      aria-label="Pavilions, Attractions & Exhibits links"
    >
      <div className={styles.frame}>
        <Image
          src="/images/pavilions-links.jpg"
          alt="Pavilions, Attractions & Exhibits: The Attractions from A to Z; The Top Ten Attractions; The Disney Shows; Fountains, Lighting and Effects; Religion at the Fair; Restaurants, Bars & Eateries; Quiet Spaces and Rest Areas; Proposed Pavilions That Were Never Built; Exhibits of American Industry; Exhibits of International Participants; Federal and State Exhibits; Entertainment, Amusements and Rides; The Industrial Area of the Fair; The International Area of the Fair; The Federal & State Area of the Fair; The Transportation Area of the Fair; The Amusement Area of the Fair"
          width={1536}
          height={2610}
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
