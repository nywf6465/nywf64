import type { Metadata } from "next";
import Image from "next/image";
import { AertowNavChrome } from "@/components/AertowNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./aertowoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Aerial Tower Ride — Overview — nywf64.com",
  description:
    "Aerial Tower Ride overview at the 1964/1965 New York World’s Fair — Attractions from A to Z on nywf64.com.",
};

/**
 * Aerial Tower Ride overview — follows the **overview** prototype
 * (same stack as /morchuoverview / /proortoverview / /litwaycrooverview).
 */
export default function AertowOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Aerial Tower Ride">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/aertowoverview/hero-banner.jpg"
            alt="Aerial Tower Ride & Waffle Restaurant at the 1964/1965 New York World’s Fair"
            width={1911}
            height={823}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <AertowNavChrome />

      <section
        className={styles.overview}
        aria-label="Aerial Tower Ride overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              An outdoor snack bar sells special waffles, and gondolas give
              rides to the top of a tower.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/aertowoverview/photo.jpg"
              alt="Aerial Tower Ride"
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
        previousHref="/aertowoverview"
        overviewHref="/aertowoverview"
        nextHref="/aertow01"
      />
    </>
  );
}
