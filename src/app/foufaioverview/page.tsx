import type { Metadata } from "next";
import Image from "next/image";
import { FoucaultNavChrome } from "@/components/FoucaultNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./foufaioverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Fountains of the Fairs — Overview — nywf64.com",
  description:
    "Fountains of the Fairs overview at the 1964/1965 New York World’s Fair — Fountains, Lighting & Effects on nywf64.com.",
};

/**
 * Fountains of the Fairs overview — follows the **overview** prototype
 * (same stack as /fouconoverview / /sprogfountoverview / /astfountoverview).
 * Menu hub path is `/Foucault` (separate); this overview route is `/foufaioverview`.
 */
export default function FoufaiOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Fountains of the Fairs">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/foufaioverview/hero-banner.jpg"
            alt="Fountains of the Fairs at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FoucaultNavChrome />

      <section
        className={styles.overview}
        aria-label="Fountains of the Fairs overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              The Fountains of the Fairs in the East and West Pools are arching
              jets of water directed inward toward the center of the pools.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/foufaioverview/photo.jpg"
              alt="Fountains of the Fairs — arching jets in the East and West Pools"
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
        previousHref="/foufaioverview"
        overviewHref="/foufaioverview"
        nextHref="/foufai01"
      />
    </>
  );
}
