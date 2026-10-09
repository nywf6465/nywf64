import type { Metadata } from "next";
import Image from "next/image";
import { BerlinNavChrome } from "@/components/BerlinNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./berlinoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Berlin — Overview — nywf64.com",
  description:
    "Berlin overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Berlin overview — follows the **overview** prototype
 * (same stack as /belviloverview / /barbufoverview).
 */
export default function BerlinOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Berlin">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/berlinoverview/hero-banner.jpg"
            alt="Berlin at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BerlinNavChrome />

      <section className={styles.overview} aria-label="Berlin overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              A film and color transparencies depict day-to-day life in this
              outpost of freedom.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/berlinoverview/photo.jpg"
              alt="Berlin pavilion"
              width={958}
              height={633}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/berlinoverview"
        overviewHref="/berlinoverview"
        nextHref="/berlin01"
      />
    </>
  );
}
