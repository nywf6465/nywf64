import type { Metadata } from "next";
import Image from "next/image";
import { ChrsciNavChrome } from "@/components/ChrsciNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./chrscioverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Christian Science — Overview — nywf64.com",
  description:
    "Christian Science overview at the 1964/1965 New York World’s Fair — Religions on nywf64.com.",
};

/**
 * Christian Science overview — follows the **overview** prototype
 * (same stack as /bilgraoverview / /amerisroverview).
 */
export default function ChrsciOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Christian Science">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/chrscioverview/hero-banner.jpg"
            alt="Christian Science at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ChrsciNavChrome />

      <section className={styles.overview} aria-label="Christian Science overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Graphic exhibits explain the religion&apos;s teachings; there is
              also a reading room and park.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/chrscioverview/photo.jpg"
              alt="Christian Science pavilion"
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
        previousHref="/chrscioverview"
        overviewHref="/chrscioverview"
        nextHref="/chrsci01"
      />
    </>
  );
}
