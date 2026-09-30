import type { Metadata } from "next";
import Image from "next/image";
import { BellNavChrome } from "@/components/BellNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./belloverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Bell System — Overview — nywf64.com",
  description:
    "Bell System Pavilion overview at the 1964/1965 New York World’s Fair — Ride of Communications on nywf64.com.",
};

/**
 * Bell System overview — follows the **overview** prototype
 * (canonical instance: /illinoisoverview).
 * Stack: header → hero → nav bar (bell menu) → overview body → nav2 → footer
 */
export default function BellOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Bell System Pavilion">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/belloverview/hero-banner.jpg"
            alt="Bell System Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BellNavChrome />

      <section className={styles.overview} aria-label="Bell System overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              The history of communications, from smoke signal to satellites, is
              shown in a 15-minute ride.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/belloverview/photo.jpg"
              alt="Bell System Pavilion — Ride of Communications"
              width={958}
              height={706}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/belloverview"
        overviewHref="/belloverview"
        nextHref="/bell01"
      />
    </>
  );
}
