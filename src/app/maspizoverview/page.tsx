import type { Metadata } from "next";
import Image from "next/image";
import { MaspizNavChrome } from "@/components/MaspizNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./maspizoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Mastro Pizza — Overview — nywf64.com",
  description:
    "Mastro Pizza overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Mastro Pizza overview — follows the **overview** prototype
 * (same stack as /masonoverview / /marylandoverview).
 * Wired with the shared **maspiz menu**.
 * Route slug: `/maspizoverview`.
 */
export default function MaspizOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Mastro Pizza">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/maspizoverview/hero-banner.jpg"
            alt="Mastro Pizza at the 1964/1965 New York World’s Fair"
            width={1903}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <MaspizNavChrome />

      <section className={styles.overview} aria-label="Mastro Pizza overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              At this counter restaurant, pizza, beer and soda are sold.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/maspizoverview/photo.jpg"
              alt="Mastro Pizza — Mr. Sman Pizza stand"
              width={1584}
              height={709}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/maspizoverview"
        overviewHref="/maspizoverview"
        nextHref="/maspiz01"
      />
    </>
  );
}
