import type { Metadata } from "next";
import Image from "next/image";
import { HeartlandNavChrome } from "@/components/HeartlandNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./heartland11.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Proposal:  Governor\'s Room — Heartland States U.S.A. — nywf64.com",
  description:
    "Heartland States proposal — Governor's Room. — 1964/1965 New York World's Fair on nywf64.com.",
};

/**
 * Heartland States — Proposal:  Governor's Room.
 * Body from legacy heartland11.html (IVEL proposal — custom page).
 *
 * Stack: hero → HeartlandNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Heartland11Page() {
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

      <article className={styles.article} aria-labelledby="heartland11-title">
        <header className={styles.titleBar}>
          <h1 id="heartland11-title" className={styles.titleBarMain}>
            Proposal:  Governor's Room
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.docSection}>
            <h2 className={styles.sectionLabel}>VIII:</h2>
            <p className={styles.indent}>__It is essential that space be provided for the office of an Exhibit Manager, as well as for the entertainment of special guests by either the Manager, or by the Governors themselves at such times as they may wish to do so. Visitors from all over the world will be escorted into the Fair Grounds directly from the Administration Building, through the V.I.P. entrance near the Heartland States exhibit. Such headquarters should have direct egress independent of the Exhibit Hall and Theatre.</p>
            <p className={styles.pageMark}>- Page 18 -</p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/heartland10"
        explicitPrevious
        overviewHref="/heartlandoverview"
        nextHref="/heartland12"
      />
    </>
  );
}
