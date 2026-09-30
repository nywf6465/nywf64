import type { Metadata } from "next";
import Image from "next/image";
import { AmpridNavChrome } from "@/components/AmpridNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./ampridoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Amphicar Ride — Overview — nywf64.com",
  description:
    "Amphicar Ride overview at the 1964/1965 New York World’s Fair — Attractions from A to Z on nywf64.com.",
};

/**
 * Amphicar Ride overview — follows the **overview** prototype
 * (same stack as /amindoverview / /amexoverview / /allstaoverview).
 */
export default function AmpridOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Amphicar Ride">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/ampridoverview/hero-banner.jpg"
            alt="Amphicar Ride at the 1964/1965 New York World’s Fair"
            width={1909}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <AmpridNavChrome />

      <section
        className={styles.overview}
        aria-label="Amphicar Ride overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Amphibious autos take three passengers at a time over land and
              into the lake and back.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/ampridoverview/photo.jpg"
              alt="Amphicar Ride"
              width={958}
              height={776}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/ampridoverview"
        overviewHref="/ampridoverview"
        nextHref="/amprid01"
      />
    </>
  );
}
