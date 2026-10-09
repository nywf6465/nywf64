import type { Metadata } from "next";
import Image from "next/image";
import { ChryslerNavChrome } from "@/components/ChryslerNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./chrysleroverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Chrysler — Overview — nywf64.com",
  description:
    "Chrysler Pavilion overview at the 1964/1965 New York World’s Fair — Autofare Islands on nywf64.com.",
};

/**
 * Chrysler overview — follows the **overview** prototype
 * (canonical instance: /illinoisoverview).
 * Stack: header → hero → nav bar (chrysler menu) → overview body → nav2 → footer
 */
export default function ChryslerOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Chrysler Pavilion">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/chrysleroverview/hero-banner.jpg"
            alt="Chrysler Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ChryslerNavChrome />

      <section className={styles.overview} aria-label="Chrysler overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              This exhibit was designed especially for children, with a puppet
              show, a giant car, and other exhibits set on islands in a large
              man-made lake.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/chrysleroverview/photo.jpg"
              alt="Chrysler Pavilion — Autofare Islands exhibits"
              width={1684}
              height={934}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/chrysleroverview"
        overviewHref="/chrysleroverview"
        nextHref="/chrysler01"
      />
    </>
  );
}
