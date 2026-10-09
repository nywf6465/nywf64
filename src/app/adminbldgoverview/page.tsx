import type { Metadata } from "next";
import Image from "next/image";
import { AdminbldgNavChrome } from "@/components/AdminbldgNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./adminbldgoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Administration Building — Overview — nywf64.com",
  description:
    "Administration Building overview at the 1964/1965 New York World’s Fair — Attractions from A to Z on nywf64.com.",
};

/**
 * Administration Building overview — follows the **overview** prototype
 * (same stack as /ampridoverview / /amindoverview).
 */
export default function AdminbldgOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Administration Building">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/adminbldgoverview/hero-banner.jpg"
            alt="Administration Building at the 1964/1965 New York World’s Fair"
            width={1914}
            height={822}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <AdminbldgNavChrome />

      <section
        className={styles.overview}
        aria-label="Administration Building overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              The Administration Building was built to house the administrative
              offices of the New York World’s Fair 1964/1965 Corporation.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/adminbldgoverview/photo.jpg"
              alt="Administration Building"
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
        previousHref="/adminbldgoverview"
        overviewHref="/adminbldgoverview"
        nextHref="/adminbldg01"
      />
    </>
  );
}
