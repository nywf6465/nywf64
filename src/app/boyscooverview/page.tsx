import type { Metadata } from "next";
import Image from "next/image";
import { BoyscoNavChrome } from "@/components/BoyscoNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./boyscooverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Boy Scouts of America — Overview — nywf64.com",
  description:
    "Boy Scouts of America overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Boy Scouts of America overview — follows the **overview** prototype
 * (same stack as /boustroverview / /bountyoverview).
 */
export default function BoyscoOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Boy Scouts of America">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/boyscooverview/hero-banner.jpg"
            alt="Boy Scouts of America at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BoyscoNavChrome />

      <section
        className={styles.overview}
        aria-label="Boy Scouts of America overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Scouts from around the U.S. display such skills as knot-tying,
              fire-making and lifesaving.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/boyscooverview/photo.jpg"
              alt="Boy Scouts of America — scouting skills exhibit"
              width={958}
              height={614}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/boyscooverview"
        overviewHref="/boyscooverview"
        nextHref="/boysco01"
      />
    </>
  );
}
