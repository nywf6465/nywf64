import type { Metadata } from "next";
import Image from "next/image";
import { MatwNavChrome } from "@/components/MatwNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./matw07.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Page 8 — The “Men at Work” Book — nywf64.com",
  description:
    "Page 8 of Men at Work — Luciano Guarnieri sketches of the Philippines, Kodak, Greece, Unisphere, Johnson’s Wax, and Spain at the 1964/1965 New York World’s Fair on nywf64.com.",
};

const PLATES = [
  {
    letter: "a.",
    src: "/images/matw07/matw07.jpg",
    width: 590,
    height: 430,
    alt: "Men at Work — Philippines, Kodak, and Greece under construction",
    key: "a. Philippines, Kodak, Greece",
    narrow: false,
  },
  {
    letter: "b.",
    src: "/images/matw07/matw08.jpg",
    width: 590,
    height: 301,
    alt: "Men at Work — Unisphere under construction",
    key: "b. Unisphere",
    narrow: false,
  },
  {
    letter: "c.",
    src: "/images/matw07/matw09.jpg",
    width: 400,
    height: 520,
    alt: "Men at Work — Johnson’s Wax and Spain under construction",
    key: "c. Johnson's Wax, Spain",
    narrow: true,
  },
] as const;

/**
 * The “Men at Work” Book — Page 8.
 * Body from legacy MatW08.html.
 *
 * Stack: matwhero → MatwNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Matw07Page() {
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

      <article className={styles.article} aria-labelledby="matw07-title">
        <header className={styles.titleBar}>
          <h1 id="matw07-title" className={styles.titleBarMain}>
            Page 8
          </h1>
        </header>

        <div className={styles.articleInner}>
          {PLATES.map((plate) => (
            <figure
              key={plate.letter}
              className={
                plate.narrow
                  ? `${styles.plate} ${styles.plateNarrow}`
                  : styles.plate
              }
            >
              <figcaption className={styles.plateLetter}>
                {plate.letter}
              </figcaption>
              <Image
                src={plate.src}
                alt={plate.alt}
                width={plate.width}
                height={plate.height}
                className={styles.plateImage}
                sizes={`(max-width: 720px) 100vw, ${plate.width}px`}
                unoptimized
              />
            </figure>
          ))}

          <div className={styles.plain}>
            <Image
              src="/images/matw07/matw38.jpg"
              alt="Men at Work — construction sketch closing Page 8"
              width={590}
              height={312}
              className={styles.plainImage}
              sizes="(max-width: 720px) 100vw, 590px"
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
        previousHref="/matw06"
        explicitPrevious
        overviewHref="/matwoverview"
        nextHref="/matw08"
      />
    </>
  );
}
