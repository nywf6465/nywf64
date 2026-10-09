import Image from "next/image";
import Link from "next/link";
import styles from "./InformationBoothLinks.module.css";

/** Exact user artwork — base image unchanged. Hover crops only swap navy↔burgundy. */
const TOPICS = [
  {
    id: "facts",
    title: "Fair Facts & Figures",
    href: "/info_booth01",
    hoverSrc: "/images/information-hover/facts.jpg",
    left: "3.400%",
    top: "1.949%",
    width: "45.605%",
    height: "21.139%",
  },
  {
    id: "story",
    title: "The Story of the Fair",
    href: "/information/story",
    hoverSrc: "/images/information-hover/story.jpg",
    left: "50.498%",
    top: "1.949%",
    width: "46.020%",
    height: "21.139%",
  },
  {
    id: "unofficial",
    title: "An Unofficial World’s Fair",
    href: "/information/unofficial",
    hoverSrc: "/images/information-hover/unofficial.jpg",
    left: "3.400%",
    top: "25.037%",
    width: "45.605%",
    height: "24.438%",
  },
  {
    id: "international",
    title: "The Hunt for International Exhibitors",
    href: "/information/international",
    hoverSrc: "/images/information-hover/international.jpg",
    left: "50.498%",
    top: "25.037%",
    width: "46.020%",
    height: "24.438%",
  },
  {
    id: "building",
    title: "Building the Fair",
    href: "/information/building",
    hoverSrc: "/images/information-hover/building.jpg",
    left: "3.400%",
    top: "51.424%",
    width: "45.605%",
    height: "22.339%",
  },
  {
    id: "end",
    title: "The End of the Fair",
    href: "/information/end",
    hoverSrc: "/images/information-hover/end.jpg",
    left: "50.498%",
    top: "51.424%",
    width: "46.020%",
    height: "22.339%",
  },
  {
    id: "from-the-air",
    title: "See the Fair from the Air",
    href: "/information/from-the-air",
    hoverSrc: "/images/information-hover/from-the-air.jpg",
    left: "3.400%",
    top: "75.262%",
    width: "45.605%",
    height: "23.838%",
  },
  {
    id: "era",
    title: "1964/1965 The Era of the Fair",
    href: "/information/era",
    hoverSrc: "/images/information-hover/era.jpg",
    left: "50.498%",
    top: "75.262%",
    width: "46.020%",
    height: "23.838%",
  },
] as const;

export function InformationBoothLinks() {
  return (
    <section
      className={styles.section}
      aria-label="Information Booth topics"
    >
      <div className={styles.frame}>
        <Image
          src="/images/information-booth-links.jpg"
          alt="Information Booth topics: Fair Facts & Figures; The Story of the Fair; An Unofficial World’s Fair; The Hunt for International Exhibitors; Building the Fair; The End of the Fair; See the Fair from the Air; 1964/1965 The Era of the Fair."
          width={1206}
          height={667}
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
