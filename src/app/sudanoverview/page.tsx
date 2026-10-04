import type { Metadata } from "next";
import Image from "next/image";
import { SudanNavChrome } from "@/components/SudanNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./sudanoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Sudan — Overview — nywf64.com",
  description:
    "Sudan overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Sudan overview — follows the **overview** prototype
 * (same stack as /solfountoverview / /spainoverview).
 */
export default function SudanOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Sudan">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/sudanoverview/hero-banner.jpg"
            alt="Sudan at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SudanNavChrome />

      <section className={styles.overview} aria-label="Sudan overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Displays include 4,000-year-old relics of Nubian civilization and
              a newly discovered fresco of the Madonna.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/sudanoverview/photo.jpg"
              alt="Sudan Pavilion — dome and lattice facade"
              width={1574}
              height={999}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/sudanoverview"
        overviewHref="/sudanoverview"
        nextHref="/sudan01"
      />
    </>
  );
}
