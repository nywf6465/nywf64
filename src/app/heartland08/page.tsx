import type { Metadata } from "next";
import Image from "next/image";
import { HeartlandNavChrome } from "@/components/HeartlandNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./heartland08.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Proposal:  Traffic Pattern — Heartland States U.S.A. — nywf64.com",
  description:
    "Heartland States proposal — traffic pattern. — 1964/1965 New York World's Fair on nywf64.com.",
};

/**
 * Heartland States — Proposal:  Traffic Pattern.
 * Body from legacy heartland08.html (IVEL proposal — custom page).
 *
 * Stack: hero → HeartlandNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Heartland08Page() {
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

      <article className={styles.article} aria-labelledby="heartland08-title">
        <header className={styles.titleBar}>
          <h1 id="heartland08-title" className={styles.titleBarMain}>
            Proposal:  Traffic Pattern
          </h1>
        </header>

        <div className={styles.articleInner}>

          <figure className={styles.photoFigure}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/heartland08/11.jpg"
                alt="Traffic Pattern"
                width={600}
                height={473}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <hr className={styles.rule} />
          <div className={styles.docSection}>
            <h2 className={styles.sectionLabel}>
              <u>V</u> <u>TRAFFIC PATTERN</u>:
            </h2>
            <p className={styles.indent}>
              It is well established that the great crowds attracted to a World&apos;s Fair tend to drift or wander along the traffic arteries looking for exciting and dramatic things to see. Special shows they&apos;ve read about are immediately brought to mind by attractive signs which draw them closer; waiting queues incite curiosity and draw more interest.
            </p>
            <p className={styles.indent}>
              The dramatic design of the Panascenium is dictated by the nature of the Panavision presentation itself; the large exhibit hall which forms the long straight entrance provides effective crowd control between rails down its center. While waiting on line, the people will be surrounded by the educational displays on both sides. Curiosity will be heightened as they see prominent features from their place in line, and then sharpened by the Rocket Belt Flight, so that, emerging from the Panascenium, they will be impelled to take a closer look at the exhibit story.
            </p>
            <p className={styles.indent}>
              Egress from the Exhibition Hall leads to outside paths calculated to direct traffic, at uncontrolled pace, to and through all four state pavilions.
            </p>
            <p className={styles.indent}>
              Those who do not wish to wait on line for the Rocket Belt Flight will have direct access to the exhibition hall as well as to the individual State pavilions.
            </p>
            <p className={styles.pageMark}>- Page 14 -</p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/heartland07"
        explicitPrevious
        overviewHref="/heartlandoverview"
        nextHref="/heartland09"
      />
    </>
  );
}
