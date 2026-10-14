import type { Metadata } from "next";
import Image from "next/image";
import { MatwNavChrome } from "@/components/MatwNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./matw04.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Page 5 — The “Men at Work” Book — nywf64.com",
  description:
    "Page 5 of Men at Work — Luciano Guarnieri sketches of men at work, Pakistan, the Unisphere, and Malaya at the 1964/1965 New York World’s Fair on nywf64.com.",
};

const PLATES = [
  {
    letter: "a.",
    src: "/images/matw04/matw26.jpg",
    width: 590,
    height: 406,
    alt: "Men at Work — workers at the Fair construction site",
    key: "a. Men at Work",
  },
  {
    letter: "b.",
    src: "/images/matw04/matw01.jpg",
    width: 590,
    height: 440,
    alt: "Men at Work — Pakistan pavilion and Unisphere under construction",
    key: "b. Pakistan, Unisphere",
  },
  {
    letter: "c.",
    src: "/images/matw04/matw02.jpg",
    width: 590,
    height: 304,
    alt: "Men at Work — Malaya pavilion under construction",
    key: "c. Malaya",
  },
] as const;

/**
 * The “Men at Work” Book — Page 5.
 * Body from legacy MatW05.html.
 *
 * Stack: matwhero → MatwNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Matw04Page() {
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

      <article className={styles.article} aria-labelledby="matw04-title">
        <header className={styles.titleBar}>
          <h1 id="matw04-title" className={styles.titleBarMain}>
            Page 5
          </h1>
        </header>

        <div className={styles.articleInner}>
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

          <div className={styles.closing}>
            <Image
              src="/images/matw04/matw35.jpg"
              alt="Men at Work — construction sketch closing Page 5"
              width={550}
              height={321}
              className={styles.closingImage}
              sizes="(max-width: 720px) 100vw, 550px"
              unoptimized
            />
          </div>

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
        previousHref="/matw03"
        explicitPrevious
        overviewHref="/matwoverview"
        nextHref="/matw05"
      />
    </>
  );
}
