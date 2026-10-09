import type { Metadata } from "next";
import Image from "next/image";
import { HeartlandNavChrome } from "@/components/HeartlandNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./heartland06.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Proposal:  Content of the Exhibit — Heartland States U.S.A. — nywf64.com",
  description:
    "Heartland States proposal — content of the exhibit. — 1964/1965 New York World's Fair on nywf64.com.",
};

/**
 * Heartland States — Proposal:  Content of the Exhibit.
 * Body from legacy heartland06.html (IVEL proposal — custom page).
 *
 * Stack: hero → HeartlandNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Heartland06Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Heartland States U.S.A.">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/heartlandoverview/hero-banner.jpg"
            alt="Heartland States U.S.A. at the 1964/1965 New York World's Fair"
            width={1908}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <HeartlandNavChrome />

      <article className={styles.article} aria-labelledby="heartland06-title">
        <header className={styles.titleBar}>
          <h1 id="heartland06-title" className={styles.titleBarMain}>
            Proposal:  Content of the Exhibit
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.photoFigure}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/heartland06/8.jpg"
                alt="Individual State Pavilion Proposal"
                width={600}
                height={479}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.docSection}>
            <h2 className={styles.sectionLabel}>
              <u>III</u> <u>CONTENT OF THE EXHIBIT</u>:
            </h2>
            <p>The plan proposed includes five major features:</p>
            <p className={styles.indent}>
              1. A primary attraction, entertaining, enlightening and exciting, that
              will draw maximum national press notice and attendance.
            </p>
            <p className={styles.indent}>
              2. A unified, coordinated exhibit presentation of the common history
              and destiny, the cultures, institutions, agriculture, industry and
              resources of the Heartland States, USA.
            </p>
            <p className={styles.indent}>
              3. Four specific exhibits of the distinctive features, products and
              attractions of North Dakota, South Dakota, Nebraska and Kansas, each
              housed in its own elegant pavilion.
            </p>
            <p className={styles.indent}>
              4. Attractively landscaped garden and rest areas.
            </p>
            <p className={styles.indent}>
              5. A private office and V.I.P. reception area, to be designated
              &quot;The Governor&apos;s Room&quot;.
            </p>
            <p className={styles.pageMark}>- Page 4 -</p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/heartland05"
        explicitPrevious
        overviewHref="/heartlandoverview"
        nextHref="/heartland07"
      />
    </>
  );
}
