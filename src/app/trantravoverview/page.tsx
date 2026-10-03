import type { Metadata } from "next";
import Image from "next/image";
import { TrantravNavChrome } from "@/components/TrantravNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./trantravoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Transportation & Travel — Overview — nywf64.com",
  description:
    "Transportation & Travel Pavilion overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Transportation & Travel overview — follows the **overview** prototype
 * (canonical instance: /illinoisoverview).
 * Stack: header → hero → nav bar (trantrav menu) → overview body → nav2 → footer
 */
export default function TrantravOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Transportation & Travel">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/trantravoverview/hero-banner.jpg"
            alt="Transportation & Travel at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <TrantravNavChrome />

      <section
        className={styles.overview}
        aria-label="Transportation & Travel overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              All modes of travel, from underwater to lunar, are explored in
              exhibits by various industries and agencies.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/trantravoverview/photo.jpg"
              alt="Transportation & Travel Pavilion with tram and T & T mural"
              width={1587}
              height={991}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/trantravoverview"
        overviewHref="/trantravoverview"
        nextHref="/trantrav01"
      />
    </>
  );
}
