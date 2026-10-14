import type { Metadata } from "next";
import Image from "next/image";
import { MatwNavChrome } from "@/components/MatwNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./matw02.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Page 3 — The “Men at Work” Book — nywf64.com",
  description:
    "Page 3 of Men at Work — Luciano Guarnieri sketches of Indonesia, Republic of China, IBM, Travelers, Bell System, and Rheingold at the 1964/1965 New York World’s Fair on nywf64.com.",
};

const PLATES = [
  {
    letter: "a.",
    src: "/images/matw02/matw11.jpg",
    width: 590,
    height: 280,
    alt: "Men at Work — Indonesia and Republic of China pavilions under construction",
    key: "a. Indonesia, Republic of China",
  },
  {
    letter: "b.",
    src: "/images/matw02/matw16.jpg",
    width: 590,
    height: 406,
    alt: "Men at Work — IBM Pavilion under construction",
    key: "b. I.B.M., The Pavilion",
  },
  {
    letter: "c.",
    src: "/images/matw02/matw17.jpg",
    width: 590,
    height: 287,
    alt: "Men at Work — Travelers, Bell System, and Rheingold Little Old New York under construction",
    key: 'c. Travelers Insurance Companies, Bell System, Rheingold "Little Old New York"',
  },
] as const;

/**
 * The “Men at Work” Book — Page 3.
 * Body from legacy MatW03.html.
 *
 * Stack: matwhero → MatwNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Matw02Page() {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="The Men at Work Book"
      >
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/matw/matwhero.jpg"
            alt='The “Men at Work” Book — Official Art Book of the 1964/1965 New York World’s Fair'
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <MatwNavChrome />

      <article className={styles.article} aria-labelledby="matw02-title">
        <header className={styles.titleBar}>
          <h1 id="matw02-title" className={styles.titleBarMain}>
            Page 3
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.cover}>
            <Image
              src="/images/matw02/matw33.jpg"
              alt="Men at Work — Official Art Book cover plate"
              width={400}
              height={459}
              className={styles.coverImage}
              sizes="(max-width: 720px) 100vw, 400px"
              unoptimized
            />
          </div>

          {PLATES.map((plate) => (
            <figure key={plate.letter} className={styles.plate}>
              {/* Legacy MatW03 shows letter labels above the bordered plates. */}
              <figcaption className={styles.plateLetter}>
                {plate.letter}
              </figcaption>
              <Image
                src={plate.src}
                alt={plate.alt}
                width={plate.width}
                height={plate.height}
                className={styles.plateImage}
                sizes="(max-width: 720px) 100vw, 590px"
                unoptimized
              />
            </figure>
          ))}

          <div className={styles.key}>
            <ul className={styles.keyList}>
              {PLATES.map((plate) => (
                <li key={plate.key}>{plate.key}</li>
              ))}
            </ul>
            <p className={styles.source}>
              SOURCE:{" "}
              <em>
                Official Art Book of the World&apos;s Fair New York 1964-1965
              </em>
              , Leo S. Olschki - Publisher, Florence (Italy)
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/matw01"
        explicitPrevious
        overviewHref="/matwoverview"
        nextHref="/matw03"
      />
    </>
  );
}
