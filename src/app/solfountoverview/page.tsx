import type { Metadata } from "next";
import Image from "next/image";
import { SolfountNavChrome } from "@/components/SolfountNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./solfountoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Solar Fountain — Overview — nywf64.com",
  description:
    "Solar Fountain overview at the 1964/1965 New York World’s Fair — Fountains, Lighting & Effects on nywf64.com.",
};

/**
 * Solar Fountain overview — follows the **overview** prototype
 * (same stack as /lunfountoverview / /poolinoverview).
 */
export default function SolfountOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Solar Fountain">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/solfountoverview/hero-banner.jpg"
            alt="Solar Fountain at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SolfountNavChrome />

      <section
        className={styles.overview}
        aria-label="Solar Fountain overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              A central dome supports a 30-foot high column of water while a
              starburst circles around the dome. Wobbling jets of water
              surrounding the dome simulate the sun&apos;s gases.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/solfountoverview/photo.jpg"
              alt="Solar Fountain — dome, starburst, and wobbling jets"
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
        previousHref="/solfountoverview"
        overviewHref="/solfountoverview"
        nextHref="/solfount01"
      />
    </>
  );
}
