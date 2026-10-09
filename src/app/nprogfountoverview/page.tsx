import type { Metadata } from "next";
import Image from "next/image";
import { NprogfountNavChrome } from "@/components/NprogfountNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./nprogfountoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Fountain of Progress North — Overview — nywf64.com",
  description:
    "Fountain of Progress North overview at the 1964/1965 New York World’s Fair — Fountains, Lighting & Effects on nywf64.com.",
};

/**
 * Fountain of Progress North overview — follows the **overview** prototype
 * (canonical instance: /illinoisoverview / /astfountoverview / /unisphoverview).
 * Stack: header → hero → nav bar (nprogfount menu) → overview body → nav2 → footer
 */
export default function NprogfountOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Fountain of Progress North">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/nprogfountoverview/hero-banner.jpg"
            alt="Fountain of Progress North at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <NprogfountNavChrome />

      <section
        className={styles.overview}
        aria-label="Fountain of Progress North overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              The Fountain of Progress North is a pool with a spiral layout of
              water jets featuring a changing water cycle pattern.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/nprogfountoverview/photo.jpg"
              alt="Fountain of Progress North — spiral layout of water jets"
              width={958}
              height={838}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/nprogfountoverview"
        overviewHref="/nprogfountoverview"
        nextHref="/nprogfount01"
      />
    </>
  );
}
