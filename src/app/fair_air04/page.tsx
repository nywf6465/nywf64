import type { Metadata } from "next";
import Image from "next/image";
import { FairAirNavChrome } from "@/components/FairAirNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./fair_air04.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Industrial Area — See the Fair from the Air — nywf64.com",
  description:
    "Industrial Area aerial photograph — See the Fair from the Air at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * See the Fair from the Air — Industrial Area.
 * Body from legacy fair_air04.html (Page 4; 1:1 with legacy numbering).
 *
 * Stack: airhero → FairAirNavChrome → navy title → aerial photo → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function FairAir04Page() {
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

      <article className={styles.article} aria-labelledby="fair-air04-title">
        <header className={styles.titleBar}>
          <h1 id="fair-air04-title" className={styles.titleBarMain}>
            Industrial Area
          </h1>
        </header>

        <div className={styles.articleInner}>
          <Image
            src="/images/fair_air04/aerial03.jpg"
            alt="Industrial Area"
            width={1200}
            height={958}
            sizes="(max-width: 1200px) 100vw, 1200px"
            className={styles.photo}
            unoptimized
            priority
          />
          <p className={styles.caption}>
            <span className={styles.captionLead}>Industrial Area</span>
            Featuring the Pavilions of Continental Insurance, Chunky Candy,
            Better Living Center, Pepsi Cola and others.
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/fair_air03"
        explicitPrevious
        nextHref="/fair_air05"
      />
    </>
  );
}
