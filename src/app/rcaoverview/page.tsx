import type { Metadata } from "next";
import Image from "next/image";
import { RcaNavChrome } from "@/components/RcaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./rcaoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "RCA — Overview — nywf64.com",
  description:
    "RCA overview at the 1964/1965 New York World’s Fair — Attractions from A to Z on nywf64.com.",
};

/**
 * RCA overview — follows the **overview** prototype
 * (same stack as /alaskaoverview / /porautoverview).
 */
export default function RcaOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="RCA">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/rcaoverview/hero-banner.jpg"
            alt="RCA at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <RcaNavChrome />

      <section className={styles.overview} aria-label="RCA overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Fairgoers may see themselves on color television and watch a
              working TV station broadcasting programs to the Fair.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/rcaoverview/photo.jpg"
              alt="RCA Pavilion at the 1964/1965 New York World’s Fair"
              width={1530}
              height={1028}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/rcaoverview"
        overviewHref="/rcaoverview"
        nextHref="/rca01"
      />
    </>
  );
}
