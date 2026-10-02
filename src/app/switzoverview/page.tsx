import type { Metadata } from "next";
import Image from "next/image";
import { SwitzNavChrome } from "@/components/SwitzNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./switzoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Switzerland — Overview — nywf64.com",
  description:
    "Switzerland overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Switzerland overview — follows the **overview** prototype
 * (same stack as /solfountoverview / /spainoverview).
 */
export default function SwitzOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Switzerland">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/switzoverview/hero-banner.jpg"
            alt="Switzerland at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SwitzNavChrome />

      <section className={styles.overview} aria-label="Switzerland overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              In a cluster of Alpine chalets, Swiss industries display tourist
              attractions, watches, chocolates and cheese.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/switzoverview/photo.jpg"
              alt="Switzerland Pavilion — Alpine chalet and Swiss flag"
              width={1507}
              height={1044}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/switzoverview"
        overviewHref="/switzoverview"
        nextHref="/switz01"
      />
    </>
  );
}
