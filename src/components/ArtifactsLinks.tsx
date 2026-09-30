import Image from "next/image";
import Link from "next/link";
import styles from "./ArtifactsLinks.module.css";

/** Exact user artwork — base unchanged. Hover crops swap burgundy↔navy on text/arrows only; thumbnails untouched. */
const TOPICS = [
  {
    id: "images-of-america",
    title: "Images of America Book Series",
    href: "/artifacts/images-of-america",
    hoverSrc: "/images/artifacts-hover/images-of-america.jpg",
    left: "2.058%",
    top: "0.667%",
    width: "47.104%",
    height: "10.175%",
  },
  {
    id: "fair-that-survived",
    title: "The Fair that Survived",
    href: "/artifacts/fair-that-survived",
    hoverSrc: "/images/artifacts-hover/fair-that-survived.jpg",
    left: "50.534%",
    top: "0.667%",
    width: "47.637%",
    height: "10.259%",
  },
  {
    id: "miniature-models",
    title: "Miniature Models of the Fair",
    href: "/artifacts/miniature-models",
    hoverSrc: "/images/artifacts-hover/miniature-models.jpg",
    left: "2.058%",
    top: "11.593%",
    width: "47.104%",
    height: "9.591%",
  },
  {
    id: "fair-news",
    title: "Fair News Newsletters",
    href: "/artifacts/fair-news",
    hoverSrc: "/images/artifacts-hover/fair-news.jpg",
    left: "50.534%",
    top: "11.676%",
    width: "47.637%",
    height: "9.591%",
  },
  {
    id: "progress-reports",
    title: "World\u2019s Fair Progress Reports",
    href: "/artifacts/progress-reports",
    hoverSrc: "/images/artifacts-hover/progress-reports.jpg",
    left: "2.058%",
    top: "21.935%",
    width: "47.104%",
    height: "10.425%",
  },
  {
    id: "for-those-who-produced",
    title: "For Those Who Produced the Fair",
    href: "/artifacts/for-those-who-produced",
    hoverSrc: "/images/artifacts-hover/for-those-who-produced.jpg",
    left: "50.534%",
    top: "22.018%",
    width: "47.637%",
    height: "10.342%",
  },
  {
    id: "official-preview-book",
    title: "Official Preview Book",
    href: "/artifacts/official-preview-book",
    hoverSrc: "/images/artifacts-hover/official-preview-book.jpg",
    left: "2.058%",
    top: "33.028%",
    width: "47.104%",
    height: "8.924%",
  },
  {
    id: "men-at-work",
    title: "The \u201cMen at Work\u201d Book",
    href: "/artifacts/men-at-work",
    hoverSrc: "/images/artifacts-hover/men-at-work.jpg",
    left: "50.534%",
    top: "33.111%",
    width: "47.637%",
    height: "8.841%",
  },
  {
    id: "magazine-articles",
    title: "Magazine Articles of the Fair",
    href: "/artifacts/magazine-articles",
    hoverSrc: "/images/artifacts-hover/magazine-articles.jpg",
    left: "2.058%",
    top: "42.702%",
    width: "47.104%",
    height: "9.341%",
  },
  {
    id: "scrapbook",
    title: "World\u2019s Fair Scrapbook",
    href: "/artifacts/scrapbook",
    hoverSrc: "/images/artifacts-hover/scrapbook.jpg",
    left: "50.534%",
    top: "42.702%",
    width: "47.637%",
    height: "9.341%",
  },
  {
    id: "architectural-slides",
    title: "The Architectural Series of Slides",
    href: "/artifacts/architectural-slides",
    hoverSrc: "/images/artifacts-hover/architectural-slides.jpg",
    left: "2.058%",
    top: "52.794%",
    width: "47.104%",
    height: "9.425%",
  },
  {
    id: "photo-lab-slides",
    title: "The Photo Lab Slide Set",
    href: "/artifacts/photo-lab-slides",
    hoverSrc: "/images/artifacts-hover/photo-lab-slides.jpg",
    left: "50.534%",
    top: "52.794%",
    width: "47.637%",
    height: "9.508%",
  },
  {
    id: "wolfe-slides",
    title: "The Wolfe Worldwide Films Slide Set",
    href: "/artifacts/wolfe-slides",
    hoverSrc: "/images/artifacts-hover/wolfe-slides.jpg",
    left: "2.058%",
    top: "62.969%",
    width: "47.104%",
    height: "9.008%",
  },
  {
    id: "blackhawk-slides",
    title: "The Blackhawk Films Slide Set",
    href: "/artifacts/blackhawk-slides",
    hoverSrc: "/images/artifacts-hover/blackhawk-slides.jpg",
    left: "50.534%",
    top: "63.053%",
    width: "47.637%",
    height: "9.008%",
  },
  {
    id: "postcards",
    title: "World\u2019s Fair Postcard Collection",
    href: "/artifacts/postcards",
    hoverSrc: "/images/artifacts-hover/postcards.jpg",
    left: "2.058%",
    top: "72.727%",
    width: "47.104%",
    height: "9.008%",
  },
  {
    id: "matchbooks",
    title: "World\u2019s Fair Matchbook Collection",
    href: "/artifacts/matchbooks",
    hoverSrc: "/images/artifacts-hover/matchbooks.jpg",
    left: "50.534%",
    top: "72.811%",
    width: "47.637%",
    height: "8.924%",
  },
  {
    id: "postage-stamps",
    title: "The Postage Stamps of the Fair",
    href: "/artifacts/postage-stamps",
    hoverSrc: "/images/artifacts-hover/postage-stamps.jpg",
    left: "2.134%",
    top: "82.402%",
    width: "47.027%",
    height: "8.340%",
  },
  {
    id: "view-masters",
    title: "The View-Masters Reels",
    href: "/artifacts/view-masters",
    hoverSrc: "/images/artifacts-hover/view-masters.jpg",
    left: "50.534%",
    top: "82.485%",
    width: "47.637%",
    height: "8.841%",
  },
  {
    id: "edu-cards",
    title: "The \u201cEdu-Cards\u201d Set",
    href: "/artifacts/edu-cards",
    hoverSrc: "/images/artifacts-hover/edu-cards.jpg",
    left: "2.134%",
    top: "91.410%",
    width: "47.027%",
    height: "7.923%",
  },
] as const;

export function ArtifactsLinks() {
  return (
    <section
      className={styles.section}
      aria-label="Artifacts & Legacies links"
    >
      <div className={styles.frame}>
        <Image
          src="/images/artifacts-links.jpg"
          alt="Artifacts & Legacies: Images of America Book Series; The Fair that Survived; Miniature Models of the Fair; Fair News Newsletters; World\u2019s Fair Progress Reports; For Those Who Produced the Fair; Official Preview Book; The \u201cMen at Work\u201d Book; Magazine Articles of the Fair; World\u2019s Fair Scrapbook; The Architectural Series of Slides; The Photo Lab Slide Set; The Wolfe Worldwide Films Slide Set; The Blackhawk Films Slide Set; World\u2019s Fair Postcard Collection; World\u2019s Fair Matchbook Collection; The Postage Stamps of the Fair; The View-Masters Reels; The \u201cEdu-Cards\u201d Set"
          width={1312}
          height={1199}
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
