import type { Metadata } from "next";
import Image from "next/image";
import { JaycopNavChrome } from "@/components/JaycopNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./jaycopoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Jaycopter Ride — Overview — nywf64.com",
  description:
    "Jaycopter Ride overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Jaycopter Ride overview — follows the **overview** prototype
 * (same stack as /japanoverview / /irelandoverview).
 * Wired with the shared **jaycop menu**.
 * Route slug: `/jaycopoverview`.
 */
export default function JaycopOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Jaycopter Ride">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/jaycopoverview/hero-banner.jpg"
            alt="Jaycopter Ride at the 1964/1965 New York World’s Fair"
            width={1903}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <JaycopNavChrome />

      <section className={styles.overview} aria-label="Jaycopter Ride overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              The sensations of a real helicopter flight are simulated in this
              high-flying machine, attached by a long boom to a tall tower.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/jaycopoverview/photo.jpg"
              alt="Jaycopter Ride — helicopter flight simulator on a tower boom"
              width={1584}
              height={2105}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/jaycop04"
        overviewHref="/jaycopoverview"
        nextHref="/jaycop01"
      />
    </>
  );
}
