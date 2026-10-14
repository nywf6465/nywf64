import type { Metadata } from "next";
import Image from "next/image";
import { MatwNavChrome } from "@/components/MatwNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./matw03.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Page 3 — The “Men at Work” Book — nywf64.com",
  description:
    "Page 3 of Men at Work — Luciano Guarnieri sketches of a pile driver, IBM, Equitable Life, Hall of Education, Johnson’s Wax, Austria, and Japan at the 1964/1965 New York World’s Fair on nywf64.com.",
};

const PLATES = [
  {
    letter: "a.",
    src: "/images/matw03/matw22.jpg",
    width: 563,
    height: 669,
    alt: "Men at Work — pile driver at the Fair site",
    key: "a. Pile Driver",
  },
  {
    letter: "b.",
    src: "/images/matw03/matw23.jpg",
    width: 590,
    height: 257,
    alt: "Men at Work — IBM, Equitable Life, and Hall of Education under construction",
    key: "b. I.B.M., Equitable Life, Hall of Education",
  },
  {
    letter: "c.",
    src: "/images/matw03/matw24.jpg",
    width: 590,
    height: 293,
    alt: "Men at Work — Johnson’s Wax, Austria, and Japan under construction",
    key: "c. Johnson's Wax, Austria, Japan",
  },
] as const;

/**
 * The “Men at Work” Book — Page 3.
 * Body from legacy MatW04.html.
 *
 * Stack: matwhero → MatwNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Matw03Page() {
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

      <article className={styles.article} aria-labelledby="matw03-title">
        <header className={styles.titleBar}>
          <h1 id="matw03-title" className={styles.titleBarMain}>
            Page 3
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.cover}>
            <Image
              src="/images/matw03/matw19.jpg"
              alt="Men at Work — construction sketch introducing Page 3"
              width={590}
              height={292}
              className={styles.coverImage}
              sizes="(max-width: 720px) 100vw, 590px"
              unoptimized
            />
          </div>

          {PLATES.map((plate) => (
            <figure key={plate.letter} className={styles.plate}>
              {/* Legacy MatW pages show letter labels above the bordered plates. */}
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
        previousHref="/matw02"
        explicitPrevious
        overviewHref="/matwoverview"
        nextHref="/matw04"
      />
    </>
  );
}
