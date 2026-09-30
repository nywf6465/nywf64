import type { Metadata } from "next";
import Image from "next/image";
import { AvisNavChrome } from "@/components/AvisNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./avisoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Avis Antique Car Ride — Overview — nywf64.com",
  description:
    "Avis Antique Car Ride overview at the 1964/1965 New York World’s Fair — Attractions from A to Z on nywf64.com.",
};

/**
 * Avis Antique Car Ride overview — follows the **overview** prototype
 * (same stack as /autthroverview / /austriaoverview).
 */
export default function AvisOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Avis Antique Car Ride">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/avisoverview/hero-banner.jpg"
            alt="Avis Antique Car Ride at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <AvisNavChrome />

      <section
        className={styles.overview}
        aria-label="Avis Antique Car Ride overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Models of antique open-topped autos take visitors on a
              four-minute ride down an old-fashioned country lane.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/avisoverview/photo.jpg"
              alt="Avis Antique Car Ride"
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
        previousHref="/avisoverview"
        overviewHref="/avisoverview"
        nextHref="/avis01"
      />
    </>
  );
}
