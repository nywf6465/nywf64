import type { Metadata } from "next";
import Image from "next/image";
import { GencigNavChrome } from "@/components/GencigNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./gencigoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "General Cigar — Overview — nywf64.com",
  description:
    "General Cigar overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * General Cigar overview — follows the **overview** prototype
 * (same stack as /garmedoverview / /funlanoverview).
 */
export default function GencigOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="General Cigar">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/gencigoverview/hero-banner.jpg"
            alt="General Cigar at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <GencigNavChrome />

      <section className={styles.overview} aria-label="General Cigar overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              There are two highlights: a live magic show in which people
              disappear, and spectacular aerial movies of sprts events.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/gencigoverview/photo.jpg"
              alt="General Cigar — live magic show and aerial movies"
              width={1584}
              height={1080}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/gencigoverview"
        overviewHref="/gencigoverview"
        nextHref="/gencig01"
      />
    </>
  );
}
