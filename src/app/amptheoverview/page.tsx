import type { Metadata } from "next";
import Image from "next/image";
import { AmptheNavChrome } from "@/components/AmptheNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./amptheoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Amphitheatre — Overview — nywf64.com",
  description:
    "Amphitheatre overview at the 1964/1965 New York World’s Fair — Attractions from A to Z on nywf64.com.",
};

/**
 * Amphitheatre overview — follows the **overview** prototype
 * (same stack as /adminbldgoverview / /ampridoverview).
 */
export default function AmptheOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Amphitheatre">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/amptheoverview/hero-banner.jpg"
            alt="Amphitheatre at the 1964/1965 New York World’s Fair"
            width={1909}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <AmptheNavChrome />

      <section className={styles.overview} aria-label="Amphitheatre overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              The Amphitheatre, site of Billy Rose&apos;s famous Aquacade at the
              1939 World&apos;s Fair, has been completely refurbished.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/amptheoverview/photo.jpg"
              alt="Amphitheatre"
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
        previousHref="/amptheoverview"
        overviewHref="/amptheoverview"
        nextHref="/ampthe01"
      />
    </>
  );
}
