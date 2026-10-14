import type { Metadata } from "next";
import Image from "next/image";
import { MatwNavChrome } from "@/components/MatwNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./matw05.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Page 6 — The “Men at Work” Book — nywf64.com",
  description:
    "Page 6 of Men at Work — Luciano Guarnieri sketches of N.C.R., the Church of Jesus Christ of Latter-day Saints, Festival of Gas, and I.B.M. at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * The “Men at Work” Book — Page 6.
 * Body from legacy MatW06.html.
 *
 * Stack: matwhero → MatwNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Matw05Page() {
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

      <article className={styles.article} aria-labelledby="matw05-title">
        <header className={styles.titleBar}>
          <h1 id="matw05-title" className={styles.titleBarMain}>
            Page 6
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.plain}>
            <Image
              src="/images/matw05/matw30.jpg"
              alt="Men at Work — construction sketch introducing Page 6"
              width={459}
              height={275}
              className={styles.plainImage}
              sizes="(max-width: 720px) 100vw, 459px"
              unoptimized
            />
          </div>

          <figure className={`${styles.plate} ${styles.plateNarrow}`}>
            <figcaption className={styles.plateLetter}>a.</figcaption>
            <Image
              src="/images/matw05/matw27.jpg"
              alt="Men at Work — N.C.R. pavilion under construction"
              width={450}
              height={417}
              className={styles.plateImage}
              sizes="(max-width: 720px) 100vw, 450px"
              unoptimized
            />
          </figure>

          <div className={styles.plain}>
            <Image
              src="/images/matw05/matw36.jpg"
              alt="Men at Work — construction sketch between plates a and b"
              width={590}
              height={336}
              className={styles.plainImage}
              sizes="(max-width: 720px) 100vw, 590px"
              unoptimized
            />
          </div>

          <figure className={styles.plate}>
            <figcaption className={styles.plateLetter}>b.</figcaption>
            <Image
              src="/images/matw05/matw03.jpg"
              alt="Men at Work — Church of Jesus Christ of Latter-day Saints, Festival of Gas, and I.B.M. under construction"
              width={590}
              height={294}
              className={styles.plateImage}
              sizes="(max-width: 720px) 100vw, 590px"
              unoptimized
            />
          </figure>

          <div className={styles.key}>
            <ul className={styles.keyList}>
              <li>a. N.C.R.</li>
              <li>
                b. Church of Jesus Christ of Latter-day Saints, Festival of
                Gas, I.B.M.
              </li>
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
        previousHref="/matw04"
        explicitPrevious
        overviewHref="/matwoverview"
      />
    </>
  );
}
