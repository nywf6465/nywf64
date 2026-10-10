import type { Metadata } from "next";
import Image from "next/image";
import { FairAirNavChrome } from "@/components/FairAirNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./fair_air01.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Transportation Area — See the Fair from the Air — nywf64.com",
  description:
    "Transportation Area aerial photograph — See the Fair from the Air at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * See the Fair from the Air — Transportation Area.
 * Body from legacy fair_air02.html (mapped to /fair_air01 as Page 1 after overview).
 *
 * Stack: airhero → FairAirNavChrome → navy title → aerial photo → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function FairAir01Page() {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="See the Fair from the Air"
      >
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/fair_air/airhero.jpg"
            alt="See the Fair from the Air — 1964/1965 New York World’s Fair"
            width={1910}
            height={823}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FairAirNavChrome />

      <article className={styles.article} aria-labelledby="fair-air01-title">
        <header className={styles.titleBar}>
          <h1 id="fair-air01-title" className={styles.titleBarMain}>
            Transportation Area
          </h1>
        </header>

        <div className={styles.articleInner}>
          <Image
            src="/images/fair_air01/aerial01.jpg"
            alt="Transportation Area"
            width={1200}
            height={955}
            sizes="(max-width: 1200px) 100vw, 1200px"
            className={styles.photo}
            unoptimized
            priority
          />
          <p className={styles.caption}>
            <span className={styles.captionLead}>Transportation Area</span>
            Featuring the Pavilions of Chrysler, Transportation &amp; Travel,
            Ford, SKF, US Rubber, Port Authority, Sinclair and others.
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/fair_airoverview"
        explicitPrevious
        nextHref="/fair_air02"
      />
    </>
  );
}
