import type { Metadata } from "next";
import Image from "next/image";
import { HeartlandNavChrome } from "@/components/HeartlandNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./heartland16.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Proposal: Addendum — Heartland States U.S.A. — nywf64.com",
  description:
    "Heartland States proposal — addendum. — 1964/1965 New York World's Fair on nywf64.com.",
};

/**
 * Heartland States — Proposal: Addendum.
 * Body from legacy heartland16.html (IVEL proposal — custom page).
 *
 * Stack: hero → HeartlandNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Heartland16Page() {
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

      <article className={styles.article} aria-labelledby="heartland16-title">
        <header className={styles.titleBar}>
          <h1 id="heartland16-title" className={styles.titleBarMain}>
            Proposal: Addendum
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.photoFigure}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/heartland16/15.jpg"
                alt="Addenda"
                width={600}
                height={722}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.photoCaption}>- Page 26 - Addenda</figcaption>
          </figure>
          <p className={styles.source}>

Source: <em>Proposal for a Heartland States U.S.A. Pavilion, IVEL Construction Company</em>

</p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/heartland15"
        explicitPrevious
        overviewHref="/heartlandoverview"
        nextHref="/heartland17"
      />
    </>
  );
}
