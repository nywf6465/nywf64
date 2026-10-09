import type { Metadata } from "next";
import Image from "next/image";
import { ArlhatNavChrome } from "@/components/ArlhatNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./arlhatoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Arlington Hat — Overview — nywf64.com",
  description:
    "Arlington Hat overview at the 1964/1965 New York World’s Fair — Attractions from A to Z on nywf64.com.",
};

/**
 * Arlington Hat overview — follows the **overview** prototype
 * (same stack as /archameroverview / /argentoverview).
 */
export default function ArlhatOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Arlington Hat">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/arlhatoverview/hero-banner.jpg"
            alt="Arlington Hat at the 1964/1965 New York World’s Fair"
            width={1909}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ArlhatNavChrome />

      <section className={styles.overview} aria-label="Arlington Hat overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Unusual hats -- large, small, funny, old and odd -- are displayed
              by the Fair&apos;s official hatter.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/arlhatoverview/photo.jpg"
              alt="Arlington Hat"
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
        previousHref="/arlhatoverview"
        overviewHref="/arlhatoverview"
        nextHref="/arlhat01"
      />
    </>
  );
}
