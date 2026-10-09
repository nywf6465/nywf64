import type { Metadata } from "next";
import Image from "next/image";
import { ArgentNavChrome } from "@/components/ArgentNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./argentoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Argentina — Overview — nywf64.com",
  description:
    "Argentina overview at the 1964/1965 New York World’s Fair — Attractions from A to Z on nywf64.com.",
};

/**
 * Argentina overview — follows the **overview** prototype
 * (same stack as /amptheoverview / /adminbldgoverview).
 */
export default function ArgentOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Argentina">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/argentoverview/hero-banner.jpg"
            alt="Argentina at the 1964/1965 New York World’s Fair"
            width={1907}
            height={825}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ArgentNavChrome />

      <section className={styles.overview} aria-label="Argentina overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Ground was broken, the pavilion constructed but never occupied by
              Argentina.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/argentoverview/photo.jpg"
              alt="Argentina"
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
        previousHref="/argentoverview"
        overviewHref="/argentoverview"
        nextHref="/argent01"
      />
    </>
  );
}
