import type { Metadata } from "next";
import Image from "next/image";
import { MatwNavChrome } from "@/components/MatwNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./matw10.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Page 11 — The “Men at Work” Book — nywf64.com",
  description:
    "Page 11 of Men at Work — Luciano Guarnieri sketches of Unisphere, Sudan, Sermons from Science, and New York State at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * The “Men at Work” Book — Page 11.
 * Body from legacy MatW11.html.
 *
 * Stack: matwhero → MatwNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Matw10Page() {
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

      <article className={styles.article} aria-labelledby="matw10-title">
        <header className={styles.titleBar}>
          <h1 id="matw10-title" className={styles.titleBarMain}>
            Page 11
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.plate}>
            <figcaption className={styles.plateLetter}>a.</figcaption>
            <Image
              src="/images/matw10/matw28.jpg"
              alt="Men at Work — Unisphere, Sudan, and Sermons from Science"
              width={590}
              height={380}
              className={styles.plateImage}
              sizes="(max-width: 720px) 100vw, 590px"
              unoptimized
            />
          </figure>

          <div className={styles.plain}>
            <Image
              src="/images/matw10/matw14.jpg"
              alt="Men at Work — construction sketch between plates a and b"
              width={590}
              height={263}
              className={styles.plainImage}
              sizes="(max-width: 720px) 100vw, 590px"
              unoptimized
            />
          </div>

          <figure className={styles.plate}>
            <figcaption className={styles.plateLetter}>b.</figcaption>
            <Image
              src="/images/matw10/matw13.jpg"
              alt="Men at Work — New York State pavilion under construction"
              width={590}
              height={412}
              className={`${styles.plateImage} ${styles.plateImageBordered}`}
              sizes="(max-width: 720px) 100vw, 590px"
              unoptimized
            />
          </figure>

          <div className={styles.key}>
            <ul className={styles.keyList}>
              <li>a. Unisphere, Sudan, Sermons from Science</li>
              <li>b. New York State</li>
            </ul>
            <p className={styles.source}>
              SOURCE:{" "}
              <em>
                Official Art Book of the World&apos;s Fair New York 1964-1965
              </em>
              , Leo S. Olschki - Publisher, Florence (Italy)
            </p>
          </div>

          <div className={styles.webmasterBox}>
            <p>
              <strong>Webmaster&apos;s note... </strong>
              <em>The Official Art Book of the Fair</em> is one of my favorite
              collectibles. Artist Guarnieri&apos;s constructon sketches capture
              well the massive undertaking creating the Fair must have been.
              Placing this book online for everyone to enjoy has been a project
              I&apos;ve wanted to complete for many years. I hope that
              you&apos;ve enjoyed studying these artistic sketches as much as I
              have over the years.
            </p>
            <p className={styles.signoff}>
              Bill Young
              <br />
              March, 2007
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/matw09"
        explicitPrevious
        overviewHref="/matwoverview"
        nextHref="/matwoverview"
      />
    </>
  );
}
