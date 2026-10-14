import type { Metadata } from "next";
import Image from "next/image";
import { MatwNavChrome } from "@/components/MatwNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./matw08.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Page 8 — The “Men at Work” Book — nywf64.com",
  description:
    "Page 8 of Men at Work — Luciano Guarnieri sketches of the Top of the Fair Port Authority Heliport and the view toward General Motors, Socony Mobil, and Greyhound at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * The “Men at Work” Book — Page 8.
 * Body from legacy MatW09.html.
 *
 * Stack: matwhero → MatwNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Matw08Page() {
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

      <article className={styles.article} aria-labelledby="matw08-title">
        <header className={styles.titleBar}>
          <h1 id="matw08-title" className={styles.titleBarMain}>
            Page 8
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.plain}>
            <Image
              src="/images/matw08/matw39.jpg"
              alt="Men at Work — construction sketch introducing Page 8"
              width={530}
              height={284}
              className={styles.plainImage}
              sizes="(max-width: 720px) 100vw, 530px"
              unoptimized
            />
          </div>

          <div className={styles.plain}>
            <Image
              src="/images/matw08/matw40.jpg"
              alt="Men at Work — construction sketch of Fair site work"
              width={590}
              height={176}
              className={styles.plainImage}
              sizes="(max-width: 720px) 100vw, 590px"
              unoptimized
            />
          </div>

          <figure className={styles.plate}>
            <figcaption className={styles.plateLetter}>a.</figcaption>
            <Image
              src="/images/matw08/matw41.jpg"
              alt="Men at Work — Top of the Fair Port Authority Heliport"
              width={590}
              height={367}
              className={styles.plateImage}
              sizes="(max-width: 720px) 100vw, 590px"
              unoptimized
            />
          </figure>

          <div className={styles.plain}>
            <Image
              src="/images/matw08/matw42.jpg"
              alt="Men at Work — construction sketch between plates a and b"
              width={590}
              height={273}
              className={styles.plainImage}
              sizes="(max-width: 720px) 100vw, 590px"
              unoptimized
            />
          </div>

          <figure className={styles.plate}>
            <figcaption className={styles.plateLetter}>b.</figcaption>
            <Image
              src="/images/matw08/matw10.jpg"
              alt="Men at Work — view from Top of the Fair toward General Motors, Socony Mobil, and Greyhound"
              width={590}
              height={273}
              className={`${styles.plateImage} ${styles.plateImageBordered}`}
              sizes="(max-width: 720px) 100vw, 590px"
              unoptimized
            />
          </figure>

          <div className={styles.plain}>
            <Image
              src="/images/matw08/matw44.jpg"
              alt="Men at Work — construction sketch closing Page 8"
              width={590}
              height={190}
              className={styles.plainImage}
              sizes="(max-width: 720px) 100vw, 590px"
              unoptimized
            />
          </div>

          <div className={styles.key}>
            <ul className={styles.keyList}>
              <li>a. Top of the Fair Port Authority Heliport</li>
              <li>
                b. View from Top of the Fair, General Motors, Socony Mobil,
                Greyhound
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
        previousHref="/matw07"
        explicitPrevious
        overviewHref="/matwoverview"
        nextHref="/matw09"
      />

    </>
  );
}
