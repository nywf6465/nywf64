import type { Metadata } from "next";
import Image from "next/image";
import { SwiskyNavChrome } from "@/components/SwiskyNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./swiskyoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Swiss Sky Ride — Overview — nywf64.com",
  description:
    "Swiss Sky Ride overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Swiss Sky Ride overview — follows the **overview** prototype
 * (same stack as /solfountoverview / /spainoverview).
 */
export default function SwiskyOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Swiss Sky Ride">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/swiskyoverview/hero-banner.jpg"
            alt="Swiss Sky Ride at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SwiskyNavChrome />

      <section
        className={styles.overview}
        aria-label="Swiss Sky Ride overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Passengers ride high across the Fairgrounds in cable cars for a
              spectacular view of the Fair.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/swiskyoverview/photo.jpg"
              alt="Swiss Sky Ride — colorful cable cars over the Fairgrounds"
              width={1377}
              height={1142}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/swiskyoverview"
        overviewHref="/swiskyoverview"
        nextHref="/swisky01"
      />
    </>
  );
}
