import type { Metadata } from "next";
import Image from "next/image";
import { HalsciNavChrome } from "@/components/HalsciNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./halscioverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Hall of Science — Overview — nywf64.com",
  description:
    "Hall of Science overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Hall of Science overview — follows the **overview** prototype
 * (same stack as /halfreoverview / /haleduoverview).
 */
export default function HalsciOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Hall of Science">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/halscioverview/hero-banner.jpg"
            alt="Hall of Science at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <HalsciNavChrome />

      <section className={styles.overview} aria-label="Hall of Science overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Eleven exhibitors display scientific advances ranging from disease
              control to travel in space.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/halscioverview/photo.jpg"
              alt="Hall of Science — scientific advances from disease control to space travel"
              width={1584}
              height={1070}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/halscioverview"
        overviewHref="/halscioverview"
        nextHref="/halsci01"
      />
    </>
  );
}
