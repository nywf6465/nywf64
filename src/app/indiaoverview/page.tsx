import type { Metadata } from "next";
import Image from "next/image";
import { IndiaNavChrome } from "@/components/IndiaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./indiaoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "India — Overview — nywf64.com",
  description:
    "India overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * India overview — follows the **overview** prototype
 * (same stack as /honkonoverview / /hawaiioverview).
 */
export default function IndiaOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="India">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/indiaoverview/hero-banner.jpg"
            alt="India at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <IndiaNavChrome />

      <section className={styles.overview} aria-label="India overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Old cultures and new industry are portrayed in this pavilion, set
              behind a cascade of water.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/indiaoverview/photo.jpg"
              alt="India — pavilion set behind a cascade of water"
              width={1584}
              height={1067}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/indiaoverview"
        overviewHref="/indiaoverview"
        nextHref="/india01"
      />
    </>
  );
}
