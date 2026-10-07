import type { Metadata } from "next";
import Image from "next/image";
import { HeartlandNavChrome } from "@/components/HeartlandNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./heartland17.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Proposal:  Midwest States Exhibit Plan — Heartland States U.S.A. — nywf64.com",
  description:
    "Midwest States exhibit plot plan — Heartland States U.S.A. — 1964/1965 New York World's Fair on nywf64.com.",
};

/**
 * Heartland States — Proposal:  Midwest States Exhibit Plan.
 * Body from legacy heartland17.html (IVEL proposal — custom page).
 *
 * Stack: hero → HeartlandNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Heartland17Page() {
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

      <article className={styles.article} aria-labelledby="heartland17-title">
        <header className={styles.titleBar}>
          <h1 id="heartland17-title" className={styles.titleBarMain}>
            Proposal:  Midwest States Exhibit Plan
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.plotBanner}>
            <h2>PLOT PLAN</h2>
            <h2>MIDWESTERN STATES EXHIBIT</h2>
          </div>
          <figure className={styles.photoFigure}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/heartland17/1.jpg"
                alt="Cover"
                width={600}
                height={469}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <figure className={styles.photoFigure}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/heartland17/16.jpg"
                alt="Map"
                width={469}
                height={593}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <figure className={styles.photoFigure}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/heartland17/17.jpg"
                alt="Plot Plan"
                width={900}
                height={715}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <figure className={styles.photoFigure}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/heartland17/18.jpg"
                alt="Model Diagram"
                width={600}
                height={474}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <figure className={styles.photoFigure}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/heartland17/19.jpg"
                alt="Model Diagram"
                width={900}
                height={694}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <figure className={styles.photoFigure}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/heartland17/20.jpg"
                alt="Back Cover"
                width={600}
                height={455}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <p className={styles.source}>
            Source: <em>Plot Plan, Midwestern States Exhibit, </em>
            <em>Leo A. Daly Company</em>
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/heartland16"
        explicitPrevious
        overviewHref="/heartlandoverview"
        nextHref="/heartlandoverview"
      />
    </>
  );
}
