import type { Metadata } from "next";
import Image from "next/image";
import { HeartlandNavChrome } from "@/components/HeartlandNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./heartland15.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Proposal:  Conclusion — Heartland States U.S.A. — nywf64.com",
  description:
    "Heartland States proposal — conclusion. — 1964/1965 New York World's Fair on nywf64.com.",
};

/**
 * Heartland States — Proposal:  Conclusion.
 * Body from legacy heartland15.html (IVEL proposal — custom page).
 *
 * Stack: hero → HeartlandNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Heartland15Page() {
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

      <article className={styles.article} aria-labelledby="heartland15-title">
        <header className={styles.titleBar}>
          <h1 id="heartland15-title" className={styles.titleBarMain}>
            Proposal:  Conclusion
          </h1>
        </header>

        <div className={styles.articleInner}>

          <div className={styles.docSection}>
            <h2 className={styles.sectionLabel}>
              <u>XII</u> <u>CONCLUSION</u>:
            </h2>
            <p className={styles.indent}>
              In giving consideration to the foregoing report, we ask that the Committee bear in mind that the ideas and proposals herein suggested are based upon a serious study of the subject matter and are believed to be valid in every detail. It is entirely possible that members of the Committee may have ideas of value to contribute.
            </p>
            <p className={styles.indent}>
              The projected revenues herein have not taken into consideration the sale of gift items, souvenirs, state novelties, sunflower seeds, etc. Further research may develop other such sources of substantial additional income.
            </p>
            <p className={styles.indent}>
              The projected items of cost are estimated and believed to be on the conservative side - that is, actual bids on construction and various operational items may result in perceptible savings.
            </p>
            <p className={styles.indent}>
              It must be noted, however, that early decisions are absolutely necessary if these figures are to hold firm. Cost incident to World&apos;s Fair construction will rise in direct proportion to the advance of the calendar, due primarily to skilled labor shortages and consequent overtime charges.
            </p>
            <div className={styles.signOff}>
              <p>Respectfully Submitted,</p>
              <p>IVEL&nbsp;CONSTRUCTION CORPORATION</p>
            </div>
            <p className={styles.pageMark}>- Page 25 -</p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/heartland14"
        explicitPrevious
        overviewHref="/heartlandoverview"
        nextHref="/heartland16"
      />
    </>
  );
}
