import type { Metadata } from "next";
import Image from "next/image";
import { RusortNavChrome } from "@/components/RusortNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./rusortoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "Russian Orthodox Greek-Catholic Church of America — Overview — nywf64.com",
  description:
    "Russian Orthodox Greek-Catholic Church of America overview at the 1964/1965 New York World’s Fair — Religions on nywf64.com.",
};

/**
 * Russian Orthodox overview — follows the **overview** prototype
 * (same stack as /morchuoverview / /proortoverview / /bilgraoverview).
 */
export default function RusortOverviewPage() {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="Russian Orthodox Greek-Catholic Church of America"
      >
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/rusortoverview/hero-banner.jpg"
            alt="Russian Orthodox Greek-Catholic Church of America at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <RusortNavChrome />

      <section
        className={styles.overview}
        aria-label="Russian Orthodox Greek-Catholic Church of America overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              A valuable jeweled icon is shown in a replica of a Russian chapel
              built in California in 1823.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/rusortoverview/photo.jpg"
              alt="Russian Orthodox Greek-Catholic Church of America pavilion"
              width={707}
              height={776}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/rusortoverview"
        overviewHref="/rusortoverview"
        nextHref="/rusort01"
      />
    </>
  );
}
