import type { Metadata } from "next";
import Image from "next/image";
import { MatwNavChrome } from "@/components/MatwNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./matw06.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Page 7 — The “Men at Work” Book — nywf64.com",
  description:
    "Page 7 of Men at Work — Luciano Guarnieri sketches of I.B.M. and Electric Power & Light at the 1964/1965 New York World’s Fair on nywf64.com.",
};

const PLATES = [
  {
    letter: "a.",
    src: "/images/matw06/matw05.jpg",
    width: 590,
    height: 355,
    alt: "Men at Work — I.B.M. pavilion under construction",
    key: "a. I.B.M.",
  },
  {
    letter: "b.",
    src: "/images/matw06/matw06.jpg",
    width: 590,
    height: 386,
    alt: "Men at Work — Electric Power & Light pavilion under construction",
    key: "b. Electric Power & Light",
  },
] as const;

const PLAIN_IMAGES = [
  {
    src: "/images/matw06/matw37.jpg",
    width: 590,
    height: 207,
    alt: "Men at Work — construction sketch following plate b",
  },
  {
    src: "/images/matw06/matw18.jpg",
    width: 550,
    height: 266,
    alt: "Men at Work — construction sketch of Fair building work",
  },
  {
    src: "/images/matw06/matw15.jpg",
    width: 590,
    height: 233,
    alt: "Men at Work — construction sketch closing Page 7",
  },
] as const;

/**
 * The “Men at Work” Book — Page 7.
 * Body from legacy MatW07.html.
 *
 * Stack: matwhero → MatwNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Matw06Page() {
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

      <article className={styles.article} aria-labelledby="matw06-title">
        <header className={styles.titleBar}>
          <h1 id="matw06-title" className={styles.titleBarMain}>
            Page 7
          </h1>
        </header>

        <div className={styles.articleInner}>
          {PLATES.map((plate) => (
            <figure key={plate.letter} className={styles.plate}>
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

          {PLAIN_IMAGES.map((image) => (
            <div key={image.src} className={styles.plain}>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className={styles.plainImage}
                sizes={`(max-width: 720px) 100vw, ${image.width}px`}
                unoptimized
              />
            </div>
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
        previousHref="/matw05"
        explicitPrevious
        overviewHref="/matwoverview"
      />
    </>
  );
}
